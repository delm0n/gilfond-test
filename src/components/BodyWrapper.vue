<template>
  <section class="wrapper">
    <div class="wrapper-side">
      <label class="label main-input">
        <span>Поиск сотрудников</span>
        <div class="input-container">
          <input
            type="text"
            :value="getInput"
            @input="setInputValue"
            @keyup.enter="enterClick()"
            placeholder="enter для поиска"
          />
        </div>
      </label>

      <label class="label">
        <span>Результаты</span>

        <div v-if="getAnswerTimeout" class="load">
          <div class="loader"></div>
        </div>

        <div v-if="!!getAnswer.length" class="result-container">
          <div
            v-for="(item, index) in getAnswer"
            :key="index"
            @click="user = item"
            class="result-item"
          >
            <div class="result-item__img">
              <img src="@/assets/img.png" alt="#" />
            </div>
            <div class="result-item__content">
              <b v-text="item.username"></b>
              <p v-text="item.email"></p>
            </div>
          </div>
        </div>

        <div v-else-if="!getAnswerTimeout" class="message-container">
          <p v-if="!getAnswerError" class="nothing">ничего не найдено</p>
          <p v-else class="error">произошла ошибка</p>
        </div>
      </label>
    </div>
    <user-page :user="user" class="wrapper-content" />
  </section>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import UserPage from "./UserPage.vue";

export default {
  components: { UserPage },
  data() {
    return {
      user: {},
    };
  },
  computed: {
    ...mapGetters([
      "getInput",
      "getAnswer",
      "getAnswerTimeout",
      "getAnswerError",
    ]),
  },
  methods: {
    ...mapActions(["search"]),
    ...mapMutations(["setInput"]),

    setInputValue(e) {
      this.setInput(e.target.value);
    },

    enterClick() {
      this.user = {};
      this.search();
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  margin: 25px 0;
  border: 1px solid rgb(222, 222, 221);
  border-radius: 10px;
  background: rgb(255, 255, 255);
  box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.1);
  min-height: 575px;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  &-side {
    padding: 25px 20px;
    padding-right: 30px;
    width: 100%;

    @media (min-width: 769px) {
      border-right: 1px solid rgb(224, 224, 224);
      max-width: 290px;
    }

    @media (max-width: 768px) {
      padding: 20px 15px;
    }

    .label {
      display: flex;
      flex-direction: column;
      gap: 14px;

      &:not(:last-child) {
        margin-bottom: 30px;
      }

      span {
        color: rgb(51, 51, 51);
        font-size: 16px;
        font-weight: 600;
        line-height: 140%;
      }
    }

    .result-item {
      display: flex;
      align-items: center;
      gap: 15px;
      border-radius: 10px;
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
      background: rgb(255, 255, 255);
      cursor: pointer;
      overflow: hidden;
      // transition: all 0.3s;

      &:hover {
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
        background: rgb(224, 224, 224);
        .result-item__img {
          background: rgb(255, 255, 255);
        }
      }

      &:not(:last-child) {
        margin-bottom: 18px;
      }

      &__img {
        border-right: 1px solid rgb(224, 224, 224);
        display: flex;
        align-items: center;
        flex-shrink: 0;

        img {
          max-width: 70px;
          aspect-ratio: 1/1;
          width: 100%;
        }
      }

      &__content {
        padding-right: 15px;
        font-size: 14px;
        word-break: break-all;
        line-height: 17px;

        b {
          color: rgb(51, 51, 51);
          display: block;
          margin-bottom: 5px;
          font-weight: 600;
        }

        p {
          color: rgb(118, 120, 125);
          font-weight: 400;
        }
      }
    }

    .message-container {
      p {
        color: rgb(118, 120, 125);

        font-size: 14px;
        font-weight: 400;
        line-height: 17px;

        &.error {
          color: $color-main;
        }
      }
    }
  }

  &-content {
    padding: 30px 20px;
    @media (max-width: 768px) {
      padding: 20px 15px;
    }
  }
}
</style>