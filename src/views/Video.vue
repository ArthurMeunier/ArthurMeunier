<template>
  <div class="video">
    <v-expansion-panels v-model="panel" multiple focusable>
      <v-expansion-panel v-model="panel" class="video__panel" v-for="(item,i) in 1" :key="i">
        <v-expansion-panel-header>
          <div class="video__panelheader">
            <img class="video__panelimg" src="../assets/logos/logome.png">
            <div class="video__paneltitle">[2018 - 2022]</div>
          </div>
        </v-expansion-panel-header>
     
        <v-expansion-panel-content>
          <div class="video__intro">
            <v-card-text class="video__introtxt">Vidéos réalisées pour la communication de<a target="_blank" href="https://www.graphonemo.fr/">Graphonémo</a>. D'autres vidéos sont visibles sur la chaîne<a target="_blank" href="https://www.youtube.com/channel/UCqJsdD_RYlc007ME8XTGMBw/videos">Youtube</a></v-card-text>
          </div>  
          <div class="video__cards">
            <v-card class="video__card"
            v-for="video in videos.slice(0, 3)"
            v-bind:key="video.id"
            >
              <div class="video__youtube">
                <iframe class="video__iframe" :src="video.url" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>


              <v-expansion-panels focusable>
                <v-expansion-panel v-for="(item,i) in 1" :key="i">
                  <v-expansion-panel-header class="video__title">{{video.title}}</v-expansion-panel-header>
                  <v-expansion-panel-content class="video__description">
                    <div class="video__text">{{video.description}}</div>
                    <div class="video__skills">Compétences :
                      <div class="video__icons">
                        <v-tooltip bottom>
                          <template #activator="{ on }">
                          <v-img class="video__icon" v-on="on" :src="video.icon1"></v-img>
                          </template>
                          <span>{{video.icontext1}}</span>
                        </v-tooltip> 
                        <v-tooltip bottom>
                          <template #activator="{ on }">
                          <v-img class="video__icon" v-on="on" :src="video.icon2"></v-img>
                          </template>
                          <span>{{video.icontext2}}</span>
                        </v-tooltip> 
                      </div>
                    </div>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels> 
            </v-card>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>



    <div class="video__panel2">
      <v-expansion-panel v-model="panel" class="video__panel" v-for="(test,b) in 1" :key="b">
        <v-expansion-panel-header>
          <div class="video__panelheader">
            <img class="video__panelimg" src="../assets/logos/logocifacom.png">
            <div class="video__paneltitle">[2013 - 2014]</div>
          </div>
        </v-expansion-panel-header>
     
        <v-expansion-panel-content>
          <div class="video__intro">
          <v-card-text class="video__introtxt">Vidéos réalisées lors du Bachelor réalisateur audiovisuel à <a target="_blank" href="https://www.cifacom.com/ecole-audiovisuel/bachelor-audiovisuel">Cifacom</a></v-card-text>
          </div>  
          <div class="video__cards">
            <v-card class="video__card"
            v-for="video in videos.slice(3, 6)"
            v-bind:key="video.id"
            >
              <div class="video__youtube">
                <iframe class="video__iframe" :src="video.url" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>


              <v-expansion-panels focusable>
                <v-expansion-panel v-for="(item,i) in 1" :key="i">
                  <v-expansion-panel-header class="video__title">{{video.title}}</v-expansion-panel-header>
                  <v-expansion-panel-content class="video__description">
                    <div class="video__text">{{video.description}}</div>
                    <div class="video__skills">Compétences :
                      <div class="video__icons">
                        <v-tooltip bottom>
                          <template #activator="{ on }">
                          <v-img class="video__icon" v-on="on" :src="video.icon1"></v-img>
                          </template>
                          <span>{{video.icontext1}}</span>
                        </v-tooltip> 
                        <v-tooltip bottom>
                          <template #activator="{ on }">
                          <v-img class="video__icon" v-on="on" :src="video.icon2"></v-img>
                          </template>
                          <span>{{video.icontext2}}</span>
                        </v-tooltip> 
                        <v-tooltip bottom>
                          <template #activator="{ on }">
                          <v-img class="video__icon" v-on="on" :src="video.icon3"></v-img>
                          </template>
                          <span>{{video.icontext3}}</span>
                        </v-tooltip> 
                        <v-tooltip bottom>
                          <template #activator="{ on }">
                          <v-img class="video__icon" v-on="on" :src="video.icon4"></v-img>
                          </template>
                          <span>{{video.icontext4}}</span>
                        </v-tooltip> 
                      </div>
                    </div>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels> 
            </v-card>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </div>
    </v-expansion-panels> 
  </div>


</template>

<script>
export default {
  name: 'Video',
  data() {
    return {
      panel: [0, 1],
      iconyt: require('@/assets/icons/iconyt.png'),
      videos:
       [
        { 
          id: 1,
          title: 'Graphonémo - Trailer',
          url: 'https://www.youtube.com/embed/EpYAdDO34tc',
          description: `Vidéo de présentation pour la fiche de l'application sur le Play Store et l'App Store.`, 
          icon1: require('@/assets/icons/iconresolve.png'),
          icon2: require('@/assets/icons/iconedit.png'),
          icontext1: 'Resolve', 
          icontext2: 'Montage'
        },
        {
          id: 2,
          title: 'Graphonémo - Numérique et Papier-Crayon',
          url: 'https://www.youtube.com/embed/pNSwGMscqxQ',
          description: 'Vidéo de présentation des produits de Magik Eduk.', 
          icon1: require('@/assets/icons/iconresolve.png'),
          icon2: require('@/assets/icons/iconedit.png'),
          icontext1: 'Resolve', 
          icontext2: 'Montage'
        },
        {
          id: 3,
          title: 'Graphonémo - Présentation',
          url: 'https://www.youtube.com/embed/D7eDlkJ3IJ0',
          description: 'Vidéo de présentation à destination des professionnels.', 
          icon1: require('@/assets/icons/iconresolve.png'),
          icon2: require('@/assets/icons/iconedit.png'),
          icontext1: 'Resolve', 
          icontext2: 'Montage'
        },
        { 
          id: 4,
          title: 'SLG',
          url: 'https://www.youtube.com/embed/vUYiLiss6Cs',
          description: `Projet personnel de fin d'année du Bachelor Réalisateur Audiovisuel (CIFACOM, 2014).
                        "Portrait d'un jeune artiste";
                         S'inscrit dans un web-documentaire intitulé Hors-Cadre, réalisé par la promotion du Bachelor.`, 
          icon1: require('@/assets/icons/iconreal.png'),
          icon2: require('@/assets/icons/iconvrec.png'),
          icon3: require('@/assets/icons/iconmic.png'),
          icon4: require('@/assets/icons/iconedit.png'),
          icontext1: 'Réalisation', 
          icontext2: 'Prise de vue',
          icontext3: 'Prise de son',
          icontext4: 'Montage',
        },
        {
          id: 5,
          title: 'Date Limite',
          url: 'https://www.youtube.com/embed/qKaVSPeh_Po',
          description: `Réalisé durant la semaine de module Publicité, du Bachelor Réalisateur Audiovisuel (CIFACOM, 2014).
          Prix coup de cœur du jury pour le concours Food Right Now.`, 
          icon1: require('@/assets/icons/iconreal.png'),
          icon2: require('@/assets/icons/iconmic.png'),
          icon3: require('@/assets/icons/iconpr.png'),
          icontext1: 'Réalisation', 
          icontext2: 'Prise de son',
          icontext3: 'Premiere Pro',
        },
        {
          id: 6,
          title: 'Art Robotique',
          url: 'https://www.youtube.com/embed/oKgsQ52tGXA',
          description: `Réalisé durant la semaine de module Magazine TV, du Bachelor Réalisateur Audiovisuel (CIFACOM, 2014).`, 
          icon1: require('@/assets/icons/iconreal.png'),
          icon2: require('@/assets/icons/iconvrec.png'),
          icon3: require('@/assets/icons/iconmic.png'),
          icon4: require('@/assets/icons/iconpr.png'),
          icontext1: 'Réalisation', 
          icontext2: 'Prise de vue',
          icontext3: 'Prise de son',
          icontext4: 'Premiere Pro',
        },
      ]
    };
  }
}
</script>

<style lang="scss" scoped>
.video {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: auto;
  &__panel {
   margin-top: 2rem;
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
  &__panelimg {
    width: 100px;
    object-fit: cover!important;
    flex:none!important;
  }
    &__intro {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    width: 75%;
  }
  &__introtxt {
    text-align: center;
    font-size: medium;
    font-weight: 500;
    margin-bottom: 1rem;
    display: block;
  }
  &__introicon {
    width: 30px;
  }
  &__introtxt a {
    color: black;
    font-weight: bold;
    text-decoration-color: black!important;
    margin-left: 0.2rem;
  }
  &__cards {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
  }
  &__card {
    background-color: #2D2D2D!important;
    width: 30%;
  }
  &__header {
    border: 8px solid black;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: grey;
    margin: 0 auto;
    width: 30rem;
    height: 5rem;
    font-weight: bold;
    font-style: italic;
    margin-top: 1rem;
    border-style: dashed solid;
  }
  &__card {
    padding: 0;
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
  &__skills {
    margin-top: 1rem;
    font-weight: bold;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  &__icons {
    margin-left: 0.5rem;
    width: 1Rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__icon {
    margin-right: 1rem;
  }
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

.v-expansion-panel-content::v-deep .mdi-chevron-down::before {
  color:white;
}

.v-tooltip {
  display: block;
}




@media screen and (max-width: 768px) {
  .video {
    width: 85%;
    margin: auto;
    &__panelimg {
      width: 75px;
    }
    &__intro {
      width: 85%;
    }
    &__introtxt {
      font-size: small;
      display: block;
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
      font-size: smaller;
    }
    &__description {
      font-size: small;
    }
  }

  .v-expansion-panel-header {
    font-size: small;
  }
}

@media screen and (min-width:481px) and (max-width: 768px) {
  .video {
    &__introtxt {
      font-size: 14px;
      display: block;
    }
    &__text {
      font-size: 15px;
    }
  }

    .v-expansion-panel-header {
    font-size: medium;
  }
}

@media screen and (min-width:769px) and (max-width: 1024px) {
  .video {
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
      display: block;
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
      font-size: 15px;
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
    padding: 0.5rem;
  }

  .v-expansion-panel-content {
    font-size: small;
  }
}
</style>
