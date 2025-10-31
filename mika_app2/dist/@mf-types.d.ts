
    export type RemoteKeys = 'REMOTE_ALIAS_IDENTIFIER/child1' | 'REMOTE_ALIAS_IDENTIFIER/child2';
    type PackageType<T> = T extends 'REMOTE_ALIAS_IDENTIFIER/child2' ? typeof import('REMOTE_ALIAS_IDENTIFIER/child2') :T extends 'REMOTE_ALIAS_IDENTIFIER/child1' ? typeof import('REMOTE_ALIAS_IDENTIFIER/child1') :any;