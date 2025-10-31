// import "./App.css";
// import Provider from "provider";

// const App = () => {
//   return (
//     <div className="content">
//       <div className="title">Mika Host Entrys here!</div>
//       <Provider />
//     </div>
//   );
// };

// export default App;

import { createInstance } from "@module-federation/enhanced/runtime";
import React, { useState, useEffect, useMemo } from "react";
import * as Vue from "vue";

export default () => {
  async function loadMf() {
    const mf: any = await new Promise((res, rej) => {
      setTimeout(() => {
        const mf = createInstance({
          name: "mf_host",
          remotes: [
            {
              name: "remote1",
              alias: "remote-1",
              entry: "http://localhost:3001/mf-manifest.json",
            },
            {
              name: "remote2",
              alias: "remote-2",
              entry: "http://localhost:3002/mf-manifest.json",
            },
          ],
          shared: {
            vue: {
              version: "3.5.22",
              scope: "default",
              lib: () => Vue,
              shareConfig: {
                singleton: true,
                requiredVersion: "^3.5.22",
              },
            },
            react: {
              version: "18.3.1",
              scope: "default",
              lib: () => React,
              shareConfig: {
                singleton: true,
                requiredVersion: "^18.3.1",
              },
            },
            "react-dom": {
              version: "18.3.1",
              scope: "default",
              lib: () => React,
              shareConfig: {
                singleton: true,
                requiredVersion: "^18.3.1",
              },
            },
          },
        });
        res(mf);
      }, 200);
    });
    setCurMf(mf);
    loadVueRemote(mf);
  }
  useEffect(() => {
    loadMf();
  }, []);
  const [curMf, setCurMf] = useState<any>(null);
  const loadVueRemote = (curMf: any) => {
    curMf.loadRemote("remote2/child").then((cmptObj: any) => {
      console.log(cmptObj);
      const CurRemote = cmptObj.default;
      Vue.createApp(CurRemote).mount("#vueRemote");
    });
  };
  const renderRemotes = useMemo(() => {
    const remoteList: any = [];
    if (curMf) {
      const CurRemote = React.lazy(async () => {
        return curMf.loadRemote("remote1").then((cmptObj: any) => {
          const CurRemote = cmptObj.default;
          return {
            default: CurRemote,
          };
        });
      });
      remoteList.push(CurRemote);
      return remoteList.map((Item: any, index: any) => {
        return <Item key={index} />;
      });
    }
  }, [curMf]);

  return (
    <>
      <div>Remote entry</div>
      <React.Suspense fallback="Loading Remote">{renderRemotes}</React.Suspense>
      <div id="vueRemote"></div>
    </>
  );
};
