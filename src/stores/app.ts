import { defineStore } from 'pinia';

export const useApp = defineStore({
  id: 'app',
  state: () => ({
    screenLoading: false,
  }),
  actions: {
    startScreenLoading() {
      this.screenLoading = true;
    },
    cancelScreenLoading() {
      this.screenLoading = false;
    },
  },
});
