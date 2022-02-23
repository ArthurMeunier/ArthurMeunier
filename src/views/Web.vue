<template>
  <div class="web">
    <v-expansion-panels v-model="panel" focusable>
      <v-expansion-panel v-model="panel" class="web__panel" v-for="(item,i) in 1" :key="i">
        <v-expansion-panel-header>
          <div class="web__panelheader">
            <img class="web__panelimg" src="../assets/logos/logooc.png">
            <div class="web__paneltitle">[2021 - 2022]</div>
          </div>
        </v-expansion-panel-header>
     
        <v-expansion-panel-content>

        <div class="web__intro">
          <v-card-text class="web__introtxt">Projets réalisés lors de la formation <a href="https://openclassrooms.com/fr/paths/556-developpeur-web">Développeur Web</a> d'<a href="https://openclassrooms.com/fr/">Openclassrooms</a> effectuée en alternance avec l'entreprise <a href="https://www.magikeduk.fr/">Magik Éduk</a></v-card-text>
        </div>  

        <div class="web__cards">
        <v-card class="web__card"
        v-for="project in projects.slice(0, 3)"
        v-bind:key="project.id"
        >
          <v-card-title class="web__title">{{project.title}}</v-card-title>
          <div class="web__image">
            <v-img class="web__img" :src="project.image"></v-img>
          </div>
            <v-card-text class="web__subtitle">{{project.subtitle}}</v-card-text>
            <div class="web__bottom">
              <v-card-text class="web__skills">Compétences :
                <div class="web__icons">
                  <v-tooltip left>
                    <template #activator="{ on }">
                    <img v-on="on" class="web__icon" :src="project.icon1">
                    </template>
                    <span>{{project.icontext1}}</span>
                  </v-tooltip> 
                  <v-tooltip bottom>
                    <template #activator="{ on }">
                    <img v-on="on" class="web__icon" :src="project.icon2">
                    </template>
                    <span>{{project.icontext2}}</span>
                  </v-tooltip> 
                  <v-tooltip bottom>
                    <template #activator="{ on }">
                    <v-img class="web__icon" v-on="on" :src="project.icon3"></v-img>
                    </template>
                    <span>{{project.icontext3}}</span>
                  </v-tooltip>
                </div>
              </v-card-text>
              <div class="web__link">
                <v-tooltip bottom>
                  <template #activator="{ on }">
                    <a v-bind:href="project.link" target="_blank">
                      <v-img v-on="on" class="web__icon" src="../assets/icons/icongithub.png"></v-img>
                    </a>
                  </template>
                  <span>{{linktext}}</span>
                </v-tooltip>
                <v-tooltip bottom>
                  <template #activator="{ on }">
                    <a v-bind:href="project.demo" target="_blank">
                      <v-img class="web__icon2" v-on="on" v-bind:href="project.demo" :src="project.iconweb"></v-img>
                    </a>
                  </template>
                  <span>{{linkdemo}}</span>
                </v-tooltip>
              </div>
            </div>
        </v-card>
      </div>

      <div class="web__cards">
        <v-card class="web__card"
        v-for="project in projects.slice(3, 6)"
        v-bind:key="project.id"
        >
          <v-card-title class="web__title">{{project.title}}</v-card-title>
          <div class="web__image">
            <v-img class="web__img" :src="project.image"></v-img>
          </div>
            <v-card-text class="web__subtitle">{{project.subtitle}}</v-card-text>
            <div class="web__bottom">
              <v-card-text class="web__skills">Compétences :
                <div class="web__icons">
                  <v-tooltip left>
                    <template #activator="{ on }">
                    <img v-on="on" class="web__icon" :src="project.icon1">
                    </template>
                    <span>{{project.icontext1}}</span>
                  </v-tooltip> 
                  <v-tooltip bottom>
                    <template #activator="{ on }">
                    <img v-on="on" class="web__icon" :src="project.icon2">
                    </template>
                    <span>{{project.icontext2}}</span>
                  </v-tooltip> 
                  <v-tooltip bottom>
                    <template #activator="{ on }">
                    <v-img class="web__icon" v-on="on" :src="project.icon3"></v-img>
                    </template>
                    <span>{{project.icontext3}}</span>
                  </v-tooltip>
                </div>
              </v-card-text>
              <div class="web__link">
                <v-tooltip bottom>
                  <template #activator="{ on }">
                    <a v-bind:href="project.link" target="_blank">
                      <v-img v-on="on" class="web__icon" src="../assets/icons/icongithub.png"></v-img>
                    </a>
                  </template>
                  <span>{{linktext}}</span>
                </v-tooltip>
                <v-tooltip bottom>
                  <template #activator="{ on }">
                    <a v-bind:href="project.demo" target="_blank">
                      <v-img class="web__icon2" v-on="on" v-bind:href="project.demo" :src="project.iconweb"></v-img>
                    </a>
                  </template>
                  <span>{{linkdemo}}</span>
                </v-tooltip>
              </div>
            </div>
        </v-card>
      </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels> 
  </div>


</template>

<script>
export default {
  name: 'Video',
  data() {
    return {
      panel: 0,
      linkdemo: 'DÉMO',
      linktext: 'GITHUB',
      projects: [
        { 
          id: 1,
          title: 'Reservia',
          image: require('@/assets/web/oc1.jpg'),
          link: 'https://github.com/ArthurMeunier/ArthurMeunier_2_18022021',
          demo: 'https://arthurmeunier.github.io/ArthurMeunier_2_18022021/',
          subtitle: `Projet n°1 : Transformer une maquette en site web`, 
          icon1: require('@/assets/icons/iconhtml.png'),
          icon2: require('@/assets/icons/iconcss.png'),
          iconweb: require('@/assets/icons/iconweb.png'),
          icontext1: 'HTML', 
          icontext2: 'CSS',
        },
        {
          id: 2,
          title: 'Ohmyfood',
          image: require('@/assets/web/oc2.png'),
          link: 'https://github.com/ArthurMeunier/ArthurMeunier_3_11052021',
          demo: 'https://arthurmeunier.github.io/ArthurMeunier_3_11052021/',
          subtitle: `Projet n°2 : Dynamiser une page avec des animations`,
          icon1: require('@/assets/icons/iconhtml.png'),
          icon2: require('@/assets/icons/iconcss.png'),
          icon3: require('@/assets/icons/iconsass.png'),
          iconweb: require('@/assets/icons/iconweb.png'),
          icontext1: 'HTML', 
          icontext2: 'CSS',
          icontext3: 'SCSS'
        },
        {
          id: 3,
          title: 'La chouette agence',
          image: require('@/assets/web/oc3.jpg'),
          link: 'https://github.com/ArthurMeunier/ArthurMeunier_4_Rework_23062021',
          demo: 'https://arthurmeunier.github.io/ArthurMeunier_4_Rework_23062021/',
          subtitle: `Projet n°3 : Optimiser un site web existant`, 
          icon1: require('@/assets/icons/iconhtml.png'),
          icon2: require('@/assets/icons/iconcss.png'),
          icon3: require('@/assets/icons/iconseo.png'),
          iconweb: require('@/assets/icons/iconweb.png'),
          icontext1: 'HTML', 
          icontext2: 'CSS',
          icontext3: 'SEO'
        },
        { 
          id: 4,
          title: 'Orinoco',
          image: require('@/assets/web/oc4.jpg'),
          link: 'https://github.com/ArthurMeunier/ArthurMeunier_5_24082021',
          subtitle: `Projet n°4 : Construire un site e-commerce`, 
          icon1: require('@/assets/icons/iconhtml.png'),
          icon2: require('@/assets/icons/iconcss.png'),
          icon3: require('@/assets/icons/iconjs.png'),
          icontext1: 'HTML', 
          icontext2: 'CSS',
          icontext3: 'Javascript'
        },
        {
          id: 5,
          title: 'Hot Takes',
          image: require('@/assets/web/oc5.jpg'),
          link: 'https://github.com/ArthurMeunier/ArthurMeunier_6_26102021',
          subtitle: `Projet n°5 : Construire une API sécurisée`,
          icon1: require('@/assets/icons/iconsql.png'),
          icon2: require('@/assets/icons/iconjs.png'),
          icontext1: 'SQL', 
          icontext2: 'JS'
        },
        {
          id: 6,
          title: 'Groupomania',
          link: 'https://github.com/ArthurMeunier/ArthurMeunier_7_15112021',
          image: require('@/assets/web/oc6.png'),
          subtitle: `Projet n°6 : Créer un réseau social d'entreprise`,
          icon1: require('@/assets/icons/iconvuejs.png'),
          icon2: require('@/assets/icons/iconsql.png'),
          icontext1: 'Vue.js', 
          icontext2: 'SQL',
        },
      ]
    };
  }
}
</script>

<style lang="scss" scoped>
.web {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: auto;
  &__panel {
   margin-top: 2rem;
  }
  &__panelheader {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__paneltitle {
    margin-left: 2rem;
  }
  &__panelimg {
    width: 100px;
    object-fit: cover!important;
    flex:none!important;
  }
  &__cards {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 4rem;
  }
  &__header {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    margin: 1rem 2rem 0rem 3rem;
    height: 5rem;
    font-weight: bold;
    font-style: italic;
    font-size: x-large;
    margin-top: 1rem;
  }
  &__headertitle {
    font-style: none!important;
    margin-right: 1rem;
  }
  &__intro {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    width: 75%;
  }
  &__introimg {
    margin-top: 0.5rem!important;
    width: 225px;
    margin: auto;
  }
  &__introtxt {
    text-align: center;
    font-size: medium;
    font-weight: 500;
    margin-bottom: 1rem;
  }
  &__introtxt a {
    color: black;
    font-weight: bold;
    text-decoration-color: black!important;
  }
  &__titlebis {
    font-size: medium;
    margin-left: 2rem;
  }
  &__headerimg {
    width: 200px;
    object-fit: cover!important;
    flex:none!important;
  }
  &__card {
    width: 27%;
    transform: scale(1);
    transition: 250ms ease-in-out;
  }
  &__card:hover {
    transform: scale(1.1);
    transition: 250ms ease-in-out;
  }
  &__title {
    font-weight: bold;
    display: flex;
    justify-content: center;
 
   background-color: #2D2D2D;

    color: white;
  }
  &__image {
    object-fit: cover;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__img {
    height: 8rem;
    width: 100%;
  }
  &__subtitle {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4rem;
    font-weight: bold;
    font-size: small;
    text-align: center;
    color: white!important;
    padding: 0;
    background-color: #464343;
    margin-bottom: 0.5rem;
  }
  &__bottom {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;

  }
  &__skills {
    font-weight: bold;
    font-weight: 600;
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
    margin-bottom: 1rem;
  }
  &__icons {
    margin-left: 1rem;
    width: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__icon {
    width: 20px;
    object-fit: cover;
    margin-right: 1rem;
  }
  &__icon2 {
    width: 16px;
  }
  &__link {
    display: inline-block;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0;
    cursor: pointer;
  }
  &__linkimg {
    width: 35px;
  }
  &__linktext {
    font-size: 0.75rem;
    font-style: italic;
  }
}



.v-expansion-panel {
  background-color: rgb(167, 167, 167);
}

.v-expansion-panel-header {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  padding: 0;
  height: 4rem;
}

.v-expansion-panel-content::v-deep .v-expansion-panel-content__wrap {
  padding: 1rem;
}

.v-item-group {
  width: 75rem;
}

.v-tooltip {
  position: relative;
  display: block !important;
  z-index: 1000000;
  color: red!important;
  margin-right: 0.2rem;
}






@media screen and (max-width: 768px) {
  .web {
    width: 85%;
    margin: auto;
    &__panelimg {
      width: 75px;
    }
    &__title {
      font-size: medium;
    }
    &__intro {
      width: 85%;
    }
    &__introtxt {
      font-size: small;
    }
    &__cards {
      flex: 0;
      flex-direction: column;
      margin-bottom: 0;
    }
    &__card {
      width: 100%;
      margin-bottom: 3rem;
    }
    &__card:hover {
      transform: none;
    }
    &__subtitle {
      font-size: small;
      padding: 1rem;
    }
  }

  .v-expansion-panel-header {
    font-size: small;
  }

  .v-expansion-panel-content {
    font-size: small;
  }
}

@media screen and (min-width:481px) and (max-width: 768px) {
  .web {
    &__introtxt {
      font-size: 14px;
    }
    &__bottom {
      flex-direction: row;
    }
    &__skills {
      margin-bottom: 0;
    }
  }
}

@media screen and (min-width:769px) and (max-width: 1024px) {
  .web {
    width: 90%;
    margin: auto;
    &__panelimg {
      width: 75px;
    }
    &__title {
      font-size: medium;
    }
    &__intro {
      width: 85%;
    }
    &__introtxt {
      font-size: 16px;
    }
    &__cards {
      flex: 0;
      margin-bottom: 0;
    }
    &__card {
      width: 31%;
      margin-bottom: 3rem;
    }
    &__card:hover {
      transform: none;
    }
    &__subtitle {
      font-size: small;
      padding: 1rem;
    }
    &__bottom {
      padding: 0.2rem;
    }
    &__skills {
      font-size: small;
    }
    &__link {
      margin-bottom: 0.5rem;
    }
  }

  .v-expansion-panel-header {
    font-size: medium;
  }

  .v-expansion-panel-content {
    font-size: small;
  }
}
</style>
