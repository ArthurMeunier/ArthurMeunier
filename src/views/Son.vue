<template>
  <div class="soundmain">
    <v-expansion-panels v-model="panel" multiple focusable>
      <v-expansion-panel v-model="panel" class="sound__panel" v-for="(item,i) in 1" :key="i">
        <v-expansion-panel-header>
          <div class="sound__panelheader">
            <div class="sound__panelimage">
              <img class="sound__panelimg" src="../assets/logos/logographo.png">
            </div>
            <div class="sound__paneltitle">[2018 - 2022]</div>
          </div>
        </v-expansion-panel-header>
     
        <v-expansion-panel-content>
          <div class="sound__intro">
            <v-card-text class="sound__introtxt">Responsable du son pour <a target="_blank" href="https://www.graphonemo.fr/">Graphonémo</a>, une application d'apprentissage de la lecture disponible sur <a target="_blank" href="https://play.google.com/store/apps/details?id=com.magikeduk.graphonemo&hl=fr&gl=US">Android</a> et <a target="_blank" href="https://apps.apple.com/fr/app/apprendre-%C3%A0-lire-graphon%C3%A9mo/id1457617216">iOS</a></v-card-text>
            <div class="sound__skills">Compétences :
              <div class="sound__icons">
                <v-tooltip right>
                  <template #activator="{ on }">
                  <v-img class="sound__icon" v-on="on" :src="icon1"></v-img>
                  </template>
                  <span>{{icontext1}}</span>
                </v-tooltip> 
                <v-tooltip right>
                  <template #activator="{ on }">
                  <v-img class="sound__icon" v-on="on" :src="icon2"></v-img>
                  </template>
                  <span>{{icontext2}}</span>
                </v-tooltip> 
                <v-tooltip right>
                  <template #activator="{ on }">
                  <v-img class="sound__icon" v-on="on" :src="icon3"></v-img>
                  </template>
                  <span>{{icontext3}}</span>
                </v-tooltip> 
                <v-tooltip right>
                  <template #activator="{ on }">
                  <v-img class="sound__icon" v-on="on" :src="icon4"></v-img>
                  </template>
                  <span>{{icontext4}}</span>
                </v-tooltip> 
              </div>
            </div>
          </div>
          <v-app class="carousel">
            <div class="carousel__wrap">
              <div class="carousel__box">
                <v-card-title class="carousel__title">Effets [SFX]</v-card-title>
                <CarouselSFX class="carousel__main" />
              </div>
                             
              <div class="carousel__box2">
                <v-card-title class="carousel__title">Ambiances [AMB]</v-card-title>
                <CarouselAmb class="carousel__bis" />
              </div>
            </div>
          </v-app>    

          <div class="video__cards">
            <v-card class="video__card"
            v-for="magikvideo in magikvideos.slice(0, 3)"
            v-bind:key="magikvideo.id"
            >
              <div class="video__youtube">
                <iframe class="video__iframe" :src="magikvideo.url" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>


              <v-expansion-panels focusable>
                <v-expansion-panel v-for="(item,i) in 1" :key="i">
                  <v-expansion-panel-header class="video__title">{{magikvideo.title}}</v-expansion-panel-header>
                  <v-expansion-panel-content class="video__description">
                    <div class="video__text">{{magikvideo.description}}</div>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels> 
            </v-card>
          </div>  
        </v-expansion-panel-content>
      </v-expansion-panel>

      <div class="sound__panel2">
        <v-expansion-panel class="sound__panel" v-for="(item,i) in 1" :key="i">
          <v-expansion-panel-header>
            <div class="sound__panelheader">
              <div class="sound__panelimage">
                <img class="sound__panelimg2" src="../assets/logos/logoistds.png">
              </div>
              <div class="sound__paneltitle">[2013 - 2014]</div>
            </div>
          </v-expansion-panel-header>
      
          <v-expansion-panel-content>
            <div class="sound__intro">
              <v-card-text class="sound__introtxt">Projets réalisés lors de la formation Sound Designer pour jeux vidéo et média interactifs à l'<a target="_blank" href="https://ecole-istds.com/">ISTDS</a> à Montréal</v-card-text>
              <div class="sound__skills">Compétences :
                <div class="sound__icons">
                  <v-tooltip bottom>
                    <template #activator="{ on }">
                    <v-img class="sound__icon" v-on="on" :src="icon5"></v-img>
                    </template>
                    <span>{{icontext5}}</span>
                  </v-tooltip> 
                  <v-tooltip bottom>
                    <template #activator="{ on }">
                    <v-img class="sound__icon" v-on="on" :src="icon6"></v-img>
                    </template>
                    <span>{{icontext6}}</span>
                  </v-tooltip> 
                  <v-tooltip bottom>
                    <template #activator="{ on }">
                    <v-img class="sound__icon" v-on="on" :src="icon7"></v-img>
                    </template>
                    <span>{{icontext7}}</span>
                  </v-tooltip> 
                  <v-tooltip bottom>
                    <template #activator="{ on }">
                    <v-img class="sound__icon" v-on="on" :src="icon8"></v-img>
                    </template>
                    <span>{{icontext8}}</span>
                  </v-tooltip> 
                </div>
              </div>
            </div>
            <div class="video__cardswrap">
              <div class="video__cards">
                <v-card class="video__card"
                v-for="istdsvideo in istdsvideos.slice(0, 3)"
                v-bind:key="istdsvideo.id"
                >
                  <div class="video__youtube">
                    <iframe class="video__iframe" :src="istdsvideo.url" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>


                  <v-expansion-panels focusable>
                    <v-expansion-panel v-for="(item,i) in 1" :key="i">
                      <v-expansion-panel-header class="video__title">{{istdsvideo.title}}</v-expansion-panel-header>
                      <v-expansion-panel-content class="video__description">
                        <div class="video__text">{{istdsvideo.description}}</div>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels> 
                </v-card>
              </div>



              <div class="video__cards">
                <v-card class="video__card"
                v-for="istdsvideo in istdsvideos.slice(3, 6)"
                v-bind:key="istdsvideo.id"
                >
                  <div class="video__youtube">
                    <iframe class="video__iframe" :src="istdsvideo.url" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>


                  <v-expansion-panels focusable>
                    <v-expansion-panel v-for="(item,i) in 1" :key="i">
                      <v-expansion-panel-header class="video__title">{{istdsvideo.title}}</v-expansion-panel-header>
                      <v-expansion-panel-content class="video__description">
                        <div class="video__text">{{istdsvideo.description}}</div>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels> 
                </v-card>
              </div>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </div>
    </v-expansion-panels> 
  </div>
</template>

<script>
import CarouselAmb from "../components/CarouselAmb.vue";
import CarouselSFX from "../components/CarouselSFX.vue";


export default {
  name: 'Son',
  components: {
    CarouselAmb,
    CarouselSFX
  },
  data() {
    return {
      panel: [0, 1],
      icon1: require('@/assets/icons/iconmic.png'),
      icon2: require('@/assets/icons/iconmix.png'),
      icon3: require('@/assets/icons/iconreaper.png'),
      icon4: require('@/assets/icons/iconunity.png'),
      icontext1: 'Prise de son', 
      icontext2: 'Mixage',
      icontext3: 'Reaper',
      icontext4: 'Unity',

      icon5: require('@/assets/icons/iconsd.png'),
      icon6: require('@/assets/icons/iconwwise.png'),
      icon7: require('@/assets/icons/iconpt.png'),
      icon8: require('@/assets/icons/iconunreal.png'),
      icontext5: 'Sound Design', 
      icontext6: 'Wwise',
      icontext7: 'Pro Tools',
      icontext8: 'Unreal',
      magikvideos:
       [
        { 
          id: 1,
          title: 'Graphonémo - Introduction',
          url: 'https://www.youtube.com/embed/91iPsbVx0zI',
          description: `Montage et mixage sonore pour la vidéo d'introduction de Graphonémo`, 
        },
        {
          id: 2,
          title: 'Graphonémo - Témoignages',
          url: 'https://www.youtube.com/embed/EBFcJ_8Fjv0',
          description: `Enregistrement, montage et mixage de témoignages d'élèves joueurs`, 
        },
        {
          id: 3,
          title: 'Graphonémo - Voix',
          url: 'https://www.youtube.com/embed/9N3XxcirGno',
          description: `Enregistrement et mixage des voix de l'application`, 
        }
      ],
      istdsvideos:
       [
        { 
          id: 1,
          title: 'Unreal Engine 4 - Temple',
          url: 'https://www.youtube.com/embed/MssfYW1deHM',
          description: `Projet de fin de formation : création et intégration de sons dans Unreal Engine 4`, 
        },
        {
          id: 2,
          title: 'Unreal Engine 4 - Demo',
          url: 'https://www.youtube.com/embed/rIYlSZOVbXY',
          description: `Découverte et implémentation de différentes mécaniques sonores dans Unreal Engine 4`, 
        },
        {
          id: 3,
          title: 'Wwise - Météo',
          url: 'https://www.youtube.com/embed/i6dSYCfxPcc',
          description: `Création d'un système d'ambiance modulable dans Wwise`, 
        },
        { 
          id: 4,
          title: 'Trailer - CS:GO',
          url: 'https://www.youtube.com/embed/ogNKhmq6Z18',
          description: `Montage et mixage sonore d'un trailer déjà existant`, 
        },
        {
          id: 5,
          title: 'Trailer - Hitman',
          url: 'https://www.youtube.com/embed/Qgnv_2taDzM',
          description: `Montage et mixage sonore d'un trailer déjà existant`, 
        },
        {
          id: 6,
          title: 'Gameplay - Silent Hills',
          url: 'https://www.youtube.com/embed/z8IvaDnFBeU',
          description: `Montage et mixage sonore d'une séquence du jeu Silent Hills`, 
        }
      ]
    };
  }
}
</script>


<style lang="scss" scoped>
.carousel {
  margin: auto;
  margin-top: 2rem;
  &__wrap {
    display: flex;
    justify-content: space-between;
    margin: 0rem 2rem 0rem 2rem;
    min-height: 0vh!important;
  }
  &__box {
    width: 35%!important;
  }
  &__box2 {
    width: 60%!important;
  }
  &__title {
    font-weight: bold;
    display: flex;
    justify-content: center;
    background-color: #2D2D2D!important;
    color: white;
  }
  &__main {
    border: 4px solid black;
    height: 20rem!important;
  }
  &__bis {
    border: 4px solid black;
    width: 100%!important;
    height: 20rem!important;
  }
}

.soundmain {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 90%;
  margin: auto;
}

.sound {
  &__panel {
  margin-top: 2rem;
  margin-bottom: 1px;
  }
  &__panel2 {
  align-items: center;
  width: 100%;
  margin: auto;
  }
  &__panelheader {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__paneltitle {
    margin-left: 2rem;
  }
  &__panelimage {
    width: 10%;
  }
  &__panelimg {
    width: 100px;
    object-fit: cover!important;
    flex: none!important;
  }
  &__panelimg2 {
    width: 50px;
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
  }
  &__introtxt a {
    color: black;
    font-weight: bold;
    text-decoration-color: black!important;
  }
  &__skills {
    margin-top: 1rem;
    font-weight: bold;
    font-weight: 600;
    display: flex;
    align-items: center;
    margin: auto;
  }
  &__icons {
    height: 2rem;
    margin-left: 5rem;
    width: 1Rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__icon {
    margin-right: 1rem;
  }
}

.video {
  &__cards {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 2rem;
  }
  &__card {
    background-color: #2D2D2D!important;
    width: 30%;
  }
  &__youtube {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
  &__iframe {
    height: 15rem;
    width: 100%;
    padding: 0;
  }
  &__title {
    background-color: #2D2D2D;
    color: white;
  }
  &__text {
    text-align: center;
  }
}



.v-expansion-panel-content::v-deep .mdi-chevron-down::before {
  color:white;
}


.mdi-chevron-down::before {
    color: white;
}

.v-window__container {
  height: 15rem;
}

.v-carousel {
    background-color: #756c6c;
}

 .v-carousel__item {
   height: 20rem;
 }

.v-item-group {
  width: 75rem;
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

.v-tooltip {
  display: block;
}




@media screen and (max-width: 768px) {
  .soundmain {
    width: 85%;
    margin: auto;
  }

  .video {
    &__panelimg {
      width: 75px;
    }
    &__introtxt {
      font-size: small;
      display: block;
    }
    &__cards {
      flex: 0;
      flex-direction: column;
      margin-top: 0;
    }
    &__card {
      width: 100%;
      margin-bottom: 3rem;
    }
    &__card:hover {
      transform: none;
    }
    &__subtitle {
      font-size: smaller;
    }
    &__description {
      font-size: small;
    }
  }

  .sound {
    &__panelimage {
      width: auto;
    }
    &__panelimg {
      width: 75px;
    }
    &__panelimg2 {
      width: 40px;
    }
    &__intro {
      width: 85%;
      margin-bottom: 2rem;
    }
    &__introtxt {
      font-size: small;
      display: block;
    }
    &__skills {
      font-size: small;
      flex-direction: column;
      margin: auto;
    }
    &__icons {
      margin-left: 0;
    }
  }

  .carousel__wrap {
    flex-direction: column;
    margin: 0;
  }

  .carousel__box {
    width: 100%!important;
    margin-bottom: 3rem;
  }

  .carousel__box2 {
    width: 100%!important;
    margin-bottom: 2rem;
  }

  .carousel__title {
    font-size: medium;
  }
  
  .v-expansion-panel-header {
    font-size: small;
  }
}


@media screen and (min-width:481px) and (max-width: 768px) {
  .sound {
    &__introtxt {
      font-size: 14px;
      display: block;
    }
  }

  .video__text {
      font-size: 15px;
  }

  .v-expansion-panel-header {
    font-size: medium;
  }
}


@media screen and (min-width:769px) and (max-width: 1024px) {
  .sound {
    &__introtxt {
      font-size: 16px;
      display: block;
    }
    &__panelheader {
      display: flex;
      justify-content: center;
    }
    &__panelimage {
      margin-right: 1rem;
    }
  }

  .video__text {
      font-size: 16px;
  }

  .v-expansion-panel-header {
    font-size: medium;
  }
}
</style>
