
    export type RemoteKeys = 'remote/caonima' | 'remote/nimabii';
    type PackageType<T> = T extends 'remote/nimabii' ? typeof import('remote/nimabii') :T extends 'remote/caonima' ? typeof import('remote/caonima') :any;