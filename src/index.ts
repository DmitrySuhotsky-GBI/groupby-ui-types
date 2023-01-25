export interface Auth {
  isAuthenticated: boolean;
  token?: string;
  // user?: ActiveUser;
  // externalProviders: Auth.ExternalProviderList;
  refreshToken?: string;
}