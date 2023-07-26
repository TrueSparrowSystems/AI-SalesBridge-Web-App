import pino from "pino";

// https://nextjs.org/docs/going-to-production#logging
// create pino logger

const logger = pino({
  browser: {
    serialize: true,
  },
  level: "debug",
  enabled: process.env.NODE_ENV !== "production",
  base: {
    env: process.env.NODE_ENV,
  },
});

export default logger;
