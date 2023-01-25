export interface Auth {
    isAuthenticated: boolean;
    token?: string;
    refreshToken?: string;
}
