/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: "/",
    src: "/_dist_",
  },
  buildOptions: {
    baseUrl: "",
  },
  env: {
    API_URL: "AIzaSyCG_eZ6vxvWQS2WmI0UgWaxDGcvbf_T3Bg",
  },
  devOptions: { NODE_ENV: true },
};
