import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    URL: "http://localhost:8000",
    key: "",
    username: "",
  },

  mutations: {
    CHANGE_KEY(state, newKey) {
      state.key = newKey;
    },
    CHANGE_USERNAME(state, newUsername) {
      state.username = newUsername;
    },
  },
  actions: {
    login(context, userInput) {
      return axios
        .post(`${context.state.URL}/accounts/login/`, userInput)
        .then((response) => {
          if (response.status === 200) {
            context.commit("CHANGE_KEY", response.data.key);
            context.commit("CHANGE_USERNAME", userInput.username);
            return true;
          }
        })
        .catch((error) => {
          console.error(error);
          return false;
        });
    },
    logout(context) {
      return axios
        .post(
          `${context.state.URL}/accounts/logout/`,
          `Token ${context.state.key}`
        )
        .then((response) => {
          if (response.status === 200) {
            context.commit("CHANGE_KEY", "");
            return true;
          }
        })
        .catch((error) => {
          console.error(error);
          return false;
        });
    },
  },
});
