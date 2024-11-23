
export const SPG_API_HOST = "spotify-graph-api-4b00479b17ee.herokuapp.com";
export const SPG_API_PORT = NaN;
export const SPG_API_BASE_URL = (isNaN(SPG_API_PORT)) ? `https://${SPG_API_HOST}` : `http://${SPG_API_HOST}:${SPG_API_PORT}`;
export const VERSION = '0.1';
export const SESSION_ID_KEY = "session_id";