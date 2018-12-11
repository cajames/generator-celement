import Library from "<%= libNpmName %>";
import "<%= themeNpmName %>/src/index.scss";

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router // the router instance for the app
}) => {
  // ...apply enhancements to the app
  Vue.use(Library);
};
