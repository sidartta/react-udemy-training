/**
 * Logs to console if in development mode
 * @param args parameters passed to `console.log`
 */

export const verbose = (...args) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(...args);
  }
};
