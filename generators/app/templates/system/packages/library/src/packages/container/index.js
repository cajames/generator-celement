import Container from './src/Container.vue'

Container.install = function(Vue) {
    Vue.component(Container.name, Container);
};

export default Container
