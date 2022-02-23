<template>
  <div class="video">
    <div class="video__header">Réalisées pour Magik Eduk</div>
    <div class="video__cards">
      <v-card class="video__card"
      v-for="(video,i) in videos"
      :key="i"
      :loading="loading">
        <div class="video__youtube">
          <iframe class="video__iframe" :src="video.url" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>


        <v-expansion-panels focusable>
          <v-expansion-panel v-for="(item,i) in 1" :key="i">
            <v-expansion-panel-header>{{video.title}}</v-expansion-panel-header>
            <v-expansion-panel-content class="video__description">
              <div class="video__text">{{video.description}}</div>
              <div class="video__skills">Compétences :
                <div class="video__icons">
                  <v-tooltip bottom>
                      <template #activator="{ on }">
                      <v-img v-on="on" :src="video.icon"></v-img>
                      </template>
                    <span>{{video.icontext}}</span>
                  </v-tooltip> 
                </div>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels> 
      </v-card>
    </div>



        <div class="video__cards">
      <v-card class="video__card"
      v-for="(video,i) in videos"
      :key="i"
      :loading="loading">
        <div class="video__youtube">
          <iframe class="video__iframe" :src="video.url" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>


        <v-expansion-panels focusable>
          <v-expansion-panel v-for="(item,i) in 1" :key="i">
            <v-expansion-panel-header>{{video.title}}</v-expansion-panel-header>
            <v-expansion-panel-content class="video__description">
              <div class="video__text">{{video.description}}</div>
              <div class="video__skills">Compétences :
                <div class="video__icons">
                  <v-tooltip bottom>
                      <template #activator="{ on }">
                      <v-img v-on="on" :src="video.icon"></v-img>
                      </template>
                    <span>{{video.icontext}}</span>
                  </v-tooltip> 
                </div>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels> 
      </v-card>
    </div>    
  </div>


</template>

<script>
export default {
  name: 'Video',
  data() {
    return {
      videos: [
        { title: 'Video001', url: 'https://www.youtube.com/embed/D7eDlkJ3IJ0', description: 'Vidéo de présentation à destination des professionnels. Cette vidéo est plutôt conçue pour présenter le projet simplement à des assemblées. Elle se présente comme un powerpoint animé.',  icon: require('@/assets/iconresolve.png'), icontext: 'Resolve'},
        { title: 'Video002', url: 'https://www.youtube.com/embed/MZcTP3-ARFQ', description: 'Video Numero Dos'},
        { title: 'Video003', url: 'https://www.youtube.com/embed/MZcTP3-ARFQ', description: 'Video Numero Tres'},
      ]
    };
  }
}
</script>

<style lang="scss" scoped>
.BLOCK {
  background-color: red;
  height: 20rem;
}


.video {
  &__cards {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    margin: 2% 0% 0% 0%;
  }
  &__card {
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
  &__skills {
    margin-top: 1rem;
    font-weight: bold;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__icons {
    width: 1Rem;
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
}

.v-expansion-panel-content::v-deep .v-expansion-panel-content__wrap {
  padding: 1rem;
}

.v-tooltip {
  position: relative;
  display: block !important;
  z-index: 1000000;
  color: red!important;
}
</style>
