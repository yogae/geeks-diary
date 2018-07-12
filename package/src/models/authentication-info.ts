export enum AuthenticationTypes {
    BASIC = 'BASIC',
    OAUTH2_TOKEN = 'OAUTH2_TOKEN',
}


export interface AuthenticationInfo {
    readonly type: AuthenticationTypes;
    readonly authorizationHeader: string;
    readonly providerName: string;

    /** User info */
    readonly userName: string;
    readonly displayName: string;
    readonly email?: string;
}
