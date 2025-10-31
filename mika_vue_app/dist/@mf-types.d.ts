
    export type RemoteKeys = 'REMOTE_ALIAS_IDENTIFIER/app' | 'REMOTE_ALIAS_IDENTIFIER/child';
    type PackageType<T> = T extends 'REMOTE_ALIAS_IDENTIFIER/child' ? typeof import('REMOTE_ALIAS_IDENTIFIER/child') :T extends 'REMOTE_ALIAS_IDENTIFIER/app' ? typeof import('REMOTE_ALIAS_IDENTIFIER/app') :any;