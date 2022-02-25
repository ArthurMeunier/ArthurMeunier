<template>
  <header class="header">
    <div class="header__top">
      <div class="header__name">ARTHUR MEUNIER</div>
      <div class="header__right">
        <v-btn to="/CV" class="header__cv">CV</v-btn>
        <v-btn :href="`mailto:arthur.meunier@gmail.com`" class="header__contact">CONTACT</v-btn>
      </div>
    </div>

    <ul class="header__nav">
      <li class="header__navitem">
        <v-btn to="/Son" class="header__navlink active">SON</v-btn>
      </li>
      <li class="header__navitem">
        <v-btn to="/Video" class="header__navlink">VIDÉO</v-btn>
      </li>
      <li class="header__navitem">
        <v-btn to="/Web" class="header__navlink">WEB</v-btn>
      </li>
    </ul>        
  </header>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    toVideo() {
      this.$router.push("/Video");
    },
  data() {
    return {
      email: 'arthur.meunier@gmail.com',
    };
  }
  }
}
</script>

<style lang="scss" scoped>
.header {
  background-color: black;
  color: white;
  &__top {
    display: flex;
    justify-content: space-between;
  }
  &__right {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem 4rem 1rem 0rem;
  }
  &__cv {
    font-weight: bold;
    font-size: large;
    color: white!important;
    background-color: black!important;
    width: 8rem;
  }
  &__contact {
    background-color: black!important;
    color: white!important;
    font-size: 0.7rem!important;
    width: 8rem;
  }
  &__name {
    display: flex;
    align-items: center;
    font-size: 2.5rem;
    font-weight: 500;
    padding: 1rem 0rem 1rem 4rem;
  }
  &__nav {
    font-weight: 500;
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    margin: 0;
    padding: 0;
  }
  &__navitem {
    display: flex;
    justify-content: center;
    border: 1px solid gray;
    width: 100%;
    height: 4rem;
  }
  &__navlink {
    text-decoration: none;
    color:white!important;
    width: 100%;
    height: 100%!important;
    background-color: black!important;
  }
}



@media screen and (max-width:1024px) {
  .header {
    &__name {
      font-size: 1.8rem;
      padding: 1.5rem;
    }
    &__right {
      padding: 0;
    }
  }
}
</style>
