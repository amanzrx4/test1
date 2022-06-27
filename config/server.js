module.exports = ({ env }) => ({
  url: env("https://truck-driver.herokuapp.com/"),
  proxy: true,
  app: {
    keys: env.array("APP_KEYS", ["testKey1", "testKey2"]),
  },
});
