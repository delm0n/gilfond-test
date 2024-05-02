<template>
  <header>
    <h1>Жилфонд</h1>
    <p>пользователь</p>
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  flex-wrap: wrap;

  h1 {
    color: $color-main;
    font-size: 32px;
    font-weight: 700;
    word-wrap: break-word;
    line-height: 39px;
  }

  p {
    color: rgb(51, 51, 51);
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
  }
}
</style>