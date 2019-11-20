import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
import { AxiosResponse } from 'axios';

Vue.use(Vuex);
const Persist = new VuexPersistence({
  key: 'rsv4-assignment',
  storage: window.localStorage,
});
export default new Vuex.Store({
  state: {
  },
  mutations: {
    logout(state: any) {
      state.token = '';
      state.refresh = '';
      state.tokenMeta = {};
      state.tokenPayload = {};
      state.isRefreshing = false;
      state.refreshPromise = undefined;
    },
    setAuthToken(state: any, newToken: string): void {
      state.token = newToken;
      const tokenSplit = newToken.split('.');
      state.tokenMeta = JSON.parse(atob(tokenSplit[0]));
      state.tokenPayload = JSON.parse(atob(tokenSplit[1]));
    },
    setRefreshToken(state: any, newToken: string): void {
      state.refresh = newToken;
    },
    setRefreshChain(state: any, promise: Promise<AxiosResponse>) {
      state.isRefreshing = true;
      state.refreshPromise = promise;
    },
    clearRefresh(state: any) {
      state.isRefreshing = false;
      state.refreshPromise = undefined;
    },
  },
  actions: {
  },
  modules: {
  },
  plugins: [Persist.plugin],
});
