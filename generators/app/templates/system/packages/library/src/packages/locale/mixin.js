import locale from './index';
const t = locale.t

export default {
  methods: {
    t(...args) {
      return t.apply(this, args);
    }
  }
};
