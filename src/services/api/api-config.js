/**
 * The default configuration for the app.
 */
export const DEFAULT_API_CONFIG = {
  url: process.env.REACT_APP_API_URL || '',
  timeout: 10 * 1000,
  apiPageSize: 50
}
