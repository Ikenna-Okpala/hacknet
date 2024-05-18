declare global {
  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string | undefined;
      PORT: string;
      NODE_ENV: string;
      DATABASE_URL: string;
    }
  }
}

export {};
