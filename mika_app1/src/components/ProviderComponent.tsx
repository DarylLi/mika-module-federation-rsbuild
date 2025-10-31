import React, {
  useEffect,
  useState,
  useMemo,
  Suspense,
  useCallback,
} from "react";
import "./ProviderComponent.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import {
  createInstance,
  ModuleFederation,
} from "@module-federation/enhanced/runtime";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./style.css";
const length = 5;

const Provider: React.FC = () => {
  const [curMF, serCurMf]: any = useState(null);
  const [curCmpt, setCmpt]: any = useState(null);
  const getRemote = async () => {
    return await new Promise((res, rej) => {
      setTimeout(() => {
        let innerMf = createInstance({
          name: "mf_host",
          remotes: [
            {
              name: "remote1",
              alias: "remote-1",
              entry: "http://localhost:3003/mf-manifest.json",
            },
            // {
            //   name: "remote2",
            //   alias: "remote-2",
            //   entry: "http://localhost:3002/mf-manifest.json",
            // },
          ],
          shared: {
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
        if (innerMf) {
          innerMf.loadRemote("remote1/child1").then((cmptObj: any) => {
            const CurRemote = cmptObj.default;
            setCmpt(CurRemote);
          });
        }
        res(innerMf);
      }, 500);
    });
  };
  useEffect(() => {
    let curMF = getRemote();
    serCurMf(curMF);
  }, []);
  const RemoteCmpt0 = useCallback(() => {
    return <>{curCmpt || "loading....."}</>;
  }, [curCmpt]);
  const RemoteCmpt1 = useMemo(() => {
    if (curMF) {
      const CurRemote1 = React.lazy(async () => {
        const handler = await curMF;
        return handler.loadRemote("remote1/child1").then((cmptObj: any) => {
          const CurRemote = cmptObj.default;
          return {
            default: CurRemote,
          };
        });
      });
      return CurRemote1;
    }
    return React.lazy(
      async () =>
        new Promise((res, rej) => {
          res({ default: <></> } as any);
        })
    );
  }, [curMF]);
  const RemoteCmpt2 = useMemo(() => {
    if (curMF) {
      const CurRemote2 = React.lazy(async () => {
        const handler = await curMF;
        return handler.loadRemote("remote1/child2").then((cmptObj: any) => {
          const CurRemote = cmptObj.default;
          return {
            default: CurRemote,
          };
        });
      });
      return CurRemote2;
    }
    return React.lazy(
      async () =>
        new Promise((res, rej) => {
          res({ default: <></> } as any);
        })
    );
  }, [curMF]);
  return (
    <div className="container">
      {RemoteCmpt0()}
      <div className="remote1">
        <Suspense fallback="loading remote1">
          <RemoteCmpt1 />
        </Suspense>
      </div>
      <div className="remote2">
        <Suspense fallback="loading remote2">
          <RemoteCmpt2 />
        </Suspense>
      </div>
      <div className="icon-container">
        <img
          src="https://module-federation.io/svg.svg"
          alt="logo"
          className="logo-image"
        />
      </div>
      <h1 className="title">Hello Module Federation 2.0</h1>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {Array.from(new Array(length)).map((e, i) => (
          <SwiperSlide key={i}>Slide {i + 1}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Provider;
