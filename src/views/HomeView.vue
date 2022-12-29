<template>
  <div class="home">
    <div class="home__animation">
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

    <div class="home__apresentation">
      <div>
        <span>{{ apresentationName }}</span>
        <span v-if="!isFullName" class="home__typing"></span>
      </div>

      <div>
        <span>{{ apresentationProfession }}</span>
        <span
          v-if="isFullName && !isFullProfession"
          class="home__typing"
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",

  data() {
    return {
      apresentation: {
        name: [],
        profession: [],
      },
      nameSet: "Vitor Alves de Carvalho",
      professionSet: "Desenvolvedor front-end",
    };
  },

  created() {
    this.setApresentation();
  },

  methods: {
    setApresentation() {
      if (this.isFullName && this.isFullProfession) return;

      setTimeout(() => {
        if (!this.isFullName) {
          this.setApresentationName();
        } else {
          this.setApresentationProfession();
        }

        this.setApresentation();
      }, 300);
    },

    setApresentationName() {
      this.apresentation.name.push(
        this.nameSet[this.apresentation.name.length]
      );
    },

    setApresentationProfession() {
      this.apresentation.profession.push(
        this.professionSet[this.apresentation.profession.length]
      );
    },
  },

  computed: {
    apresentationName() {
      return this.apresentation.name.join("");
    },

    apresentationProfession() {
      return this.apresentation.profession.join("");
    },

    isFullName() {
      return this.apresentation.name.length === this.nameSet.length;
    },

    isFullProfession() {
      return this.apresentation.profession.length === this.professionSet.length;
    },
  },
};
</script>

<style scoped lang="scss">
.home {
  background: #120d1d;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;

  &__animation {
    width: 300px;
    height: 300px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 480px) {
      width: 250px;
      height: 250px;
    }
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

  &__apresentation {
    margin-top: 60px;
    font-size: 48px;

    @media (max-width: 480px) {
      font-size: 28px;
    }
  }

  &__typing {
    display: inline-block;
    margin-left: 4px;
    height: 36px;
    width: 4px;
    background-color: white;
    animation-name: animation-typing;
    animation-duration: 1s;
    animation-iteration-count: infinite;

    @media (max-width: 480px) {
      height: 20px;
    }
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

@keyframes animation-typing {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
