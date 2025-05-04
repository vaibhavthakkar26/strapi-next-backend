export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS',["+f6q1L4m5Cb0+6Wp+u1sU2j8zJfI6pX95Q==","ZGVjYXVseGRhcnMgdGVzdCBkYXRhIGVuY29kaW5nCg=="]),
  },
});
