<template>
  <div v-if="!!user.id" class="user">
    <div class="user-image">
      <img src="@/assets/image.png" alt="user image" />
    </div>

    <div class="user-content">
      <p class="user-content__name" v-text="user.name"></p>
      <p class="user-content__email">
        email: <span v-text="user.email"></span>
      </p>
      <p class="user-content__phone">
        phone: <span v-text="user.phone"></span>
      </p>

      <p class="user-content__about">О себе:</p>
      <p class="user-content__about-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  </div>
  <div v-else class="empty">
    <p>Выберите сотрудника, чтобы посмотреть его профиль</p>
  </div>
</template>

<script>
export default {
  props: {
    user: Object,
  },
};
</script>

<style lang="scss" scoped>
.empty {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: rgb(118, 120, 125);
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  width: 100%;
  flex-grow: 1;
}

.user {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  width: 100%;

  @media (max-width: 993px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  &-content {
    &__name,
    &__about {
      color: rgb(0, 0, 0);
      font-size: 16px;
      font-weight: 600;
      line-height: 140%;
      margin-bottom: 10px;
    }

    &__about {
      margin: 20px 0 25px;

      &-text {
        color: rgb(118, 120, 125);
        font-size: 14px;
        font-weight: 400;
        line-height: 17px;
      }
    }

    &__email,
    &__phone {
      font-size: 14px;
      color: rgb(0, 0, 0);
      line-height: 140%;
      margin-bottom: 10px;
      font-weight: 600;

      span {
        font-weight: 400;
      }
    }
  }

  &-image {
    img {
      max-width: 100%;
    }
  }
}
</style>