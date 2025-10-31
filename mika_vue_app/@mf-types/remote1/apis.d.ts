
    export type RemoteKeys = 'remote1/testcomponent' | 'remote1/component';
    type PackageType<T> = T extends 'remote1/component' ? typeof import('remote1/component') :T extends 'remote1/testcomponent' ? typeof import('remote1/testcomponent') :any;