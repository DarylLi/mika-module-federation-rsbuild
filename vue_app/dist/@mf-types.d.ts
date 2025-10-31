
    export type RemoteKeys = 'REMOTE_ALIAS_IDENTIFIER/testcomponent' | 'REMOTE_ALIAS_IDENTIFIER/component';
    type PackageType<T> = T extends 'REMOTE_ALIAS_IDENTIFIER/component' ? typeof import('REMOTE_ALIAS_IDENTIFIER/component') :T extends 'REMOTE_ALIAS_IDENTIFIER/testcomponent' ? typeof import('REMOTE_ALIAS_IDENTIFIER/testcomponent') :any;