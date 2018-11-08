import Vue from "vue";
import Vuex from "vuex";
import jokes from "./modules/jokes"

Vue.use(Vuex);

export default new Vuex.Store({
  //complicated stuff with namespace, 
  //need to use mapState helper to figure out the module naming, etc
  state: {
    jokes: "", //initialized values 
    jokeID: -1
  },
  mutations: {
    updateJoke (state, joke) {
          state.jokes = joke[0];
          state.jokeID = joke[1];
    }
  },
  getters: {
    getJoke (state) {
      return (state.jokes);
    }

  },
  
  modules: {
    jokes
  }
});
