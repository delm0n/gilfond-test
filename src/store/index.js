import { createStore } from "vuex";

export default createStore({
  state: {
    input: "",
    answer: [],
    answerTimeout: false,
    answerError: false,
  },

  getters: {
    getInput(state) {
      return state.input;
    },

    getAnswer(state) {
      console.log(state.answer);
      return state.answer;
    },

    getAnswerTimeout(state) {
      return state.answerTimeout;
    },

    getAnswerError(state) {
      return state.answerError;
    },
  },

  mutations: {
    setInput(state, value) {
      state.input = value;
    },

    setAnswer(state, value) {
      state.answer = value;
      console.log(state.answer);
    },
  },

  actions: {
    async search(context) {
      try {
        context.state.answerTimeout = true;
        context.state.answer = [];

        // arr - массив значий из инпута через запятую
        let arr = context.getters.getInput.split(",");

        // arrId - массив id, arrUs - массив username
        let arrId = [];
        let arrUs = [];

        arr.forEach((el, index) => {
          !isNaN(Number(el))
            ? arrId.push("id=" + el.trim())
            : arrUs.push(
                "username=" +
                  el.trim()[0].toUpperCase() +
                  el.trim().slice(1).toLowerCase()
              );
        });

        let arrayAnswer = [];
        if (!!arrId.length) {
          // если в инпут были введены id
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/users?" + arrId.join("&")
          );
          const answ = await response.json();
          arrayAnswer.push(...answ);
        }

        if (!!arrUs.length) {
          // если в инпут были введены username
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/users?" + arrUs.join("&")
          );
          const answ = await response.json();
          arrayAnswer.push(...answ);
        }

        // если id и username ссылаются на один и тот же объект
        const unique = arrayAnswer.filter(
          (obj, idx, arr) => idx === arr.findIndex((t) => t.id === obj.id)
        );

        context.commit("setAnswer", unique);
      } catch (error) {
        context.state.answerError = true;
      } finally {
        context.state.answerTimeout = false;
      }
    },
  },
  modules: {},
});
