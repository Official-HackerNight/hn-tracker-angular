interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
  apiUrl: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'xV6vMg1bdA9p2ZwGAKXalQRTmn3Z0a7j',
  domain: 'hacker-night.auth0.com',
  callbackURL: 'http://localhost:4200/callback',
  apiUrl: 'http://localhost:3001'
};
