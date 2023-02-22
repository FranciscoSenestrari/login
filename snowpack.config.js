/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: "/" || "/home",
    src: "/_dist_",
  },
  env: {
    API_URL: "AIzaSyCG_eZ6vxvWQS2WmI0UgWaxDGcvbf_T3Bg",
    API_ID: "1:995175335328:web:958c6dc5ff6b4c3f42d0c5",
  },
  devOptions: { NODE_ENV: true },
};
/*
@type {import("snowpack").SnowpackUserConfig } 
module.exports = {
  mount: {
    public: "/"||"/home",
    src: "/_dist_",
  },
  buildOptions: {
    baseUrl: "",
    htmlFragments:
  },
  env: {
    API_URL: "AIzaSyCG_eZ6vxvWQS2WmI0UgWaxDGcvbf_T3Bg",
  },
  devOptions: { NODE_ENV: true },
};
 */
/**
 * module.exports = {
  mount: {
    public: "/home",
    src: "/_dist_",
  },
  buildOptions: {
    baseUrl: "/",
  },
  
  env: {
    API_URL: "AIzaSyCG_eZ6vxvWQS2WmI0UgWaxDGcvbf_T3Bg2",
    API_ID: "1:995175335328:web:958c6dc5ff6b4c3f42d0c5",
  },
  devOptions: { NODE_ENV: true },
  plugin: ["@snowpack/plugin-dotenv"],
};
routes: [
    {
      match: 'routes',
      src: '.*',
      dest: '/index.html',
    },
  ],
 */
