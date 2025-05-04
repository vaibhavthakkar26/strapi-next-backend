export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('fe0bc5bf6b4f2b042b2556ff07880e6e'),
  },
});
