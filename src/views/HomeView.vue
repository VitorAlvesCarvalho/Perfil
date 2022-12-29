<template>
  <div class="home">
    <div class="home__content">
      <div class="home__stack home__stack-css">
        <img width="100%" src="../assets/css.svg" />
      </div>
      <div class="home__stack home__stack-html">
        <img width="100%" src="../assets/html.svg" />
      </div>
      <div class="home__stack home__stack-js">
        <img width="100%" src="../assets/javascript.svg" />
      </div>
      <div class="home__stack home__stack-vue">
        <img width="100%" src="../assets/vue.svg" />
      </div>

      <div>
        <img class="home__img" width="90%" src="../assets/perfil.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped lang="scss">
.home {
  background: #120d1d;
  height: 100vh;
  padding: 100px;
  box-sizing: border-box;

  &__content {
    width: 300px;
    height: 300px;
    margin: auto;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__stack {
    display: flex;
    position: absolute;
    width: 60px;
    height: 60px;
    animation-duration: 10s;
    animation-iteration-count: infinite;
  }

  &__stack-css {
    top: 0;
    left: 0;
    animation-name: animation-css;
  }

  &__stack-html {
    top: 0;
    left: calc(100% - 40px);
    animation-name: animation-html;
  }

  &__stack-js {
    top: calc(100% - 40px);
    left: calc(100% - 40px);
    animation-name: animation-js;
  }

  &__stack-vue {
    top: calc(100% - 40px);
    left: 0;
    animation-name: animation-vue;
  }

  &__img {
    border: 4px solid #5b25b9;
    border-radius: 50%;
  }
}

@keyframes animation-css {
  0% {
    top: 0;
    left: 0;
  }

  50% {
    top: 0;
    left: calc(100% - 60px);
  }

  100% {
    top: 0;
    left: 0;
  }
}

@keyframes animation-html {
  0% {
    top: 0;
    left: calc(100% - 60px);
  }

  50% {
    top: calc(100% - 60px);
    left: calc(100% - 60px);
  }

  100% {
    top: 0;
    left: calc(100% - 60px);
  }
}

@keyframes animation-js {
  0% {
    top: calc(100% - 60px);
    left: calc(100% - 60px);
  }

  50% {
    top: calc(100% - 60px);
    left: 0;
  }

  100% {
    top: calc(100% - 60px);
    left: calc(100% - 60px);
  }
}

@keyframes animation-vue {
  0% {
    top: calc(100% - 60px);
    left: 0;
  }

  50% {
    top: 0;
    left: 0;
  }

  100% {
    top: calc(100% - 60px);
    left: 0;
  }
}
</style>
