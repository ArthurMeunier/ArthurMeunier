<template>
  <v-row
    align="center"
    justify="center"
    class="video__cards"
  >
    <v-card
              v-for="(video, index) in videos"
         v-bind:key="index"
      class="video__card" 
      height="300"
      width="250"
    >
      <div class="video__youtube">
          <iframe class="video__iframe" :src="video.url" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <v-btn
          color="success"
          class="mt-12"
          v-on:click="showOverlay(video, index)">
        >
          Show Overlay
        </v-btn>

        <v-overlay  
          :absolute="absolute"
          :value="video.overlay"
          @click="video.overlay = false"
        >
          <p>HELLO</p>
          <v-icon @click="video.overlay = false">mdi-close</v-icon>        </v-overlay>

    </v-card>
  </v-row>
</template>
<script>
export default {
  name: 'Son',
    data: () => ({
      absolute: true,
      videos: [
        { id: '1', title: 'Video001', url: 'https://www.youtube.com/embed/D7eDlkJ3IJ0', description: 'Video Numero Uno', overlay: false},
        { id: '2', title: 'Video002', url: 'https://www.youtube.com/embed/MZcTP3-ARFQ', description: 'Video Numero Dos', overlay: false},
      ]
    }),
    methods: {
      showOverlay(video, index) {
        this.videos.map((a) => a.overlay = false);
        this.videos[index].overlay = true;
      }
    }
}
</script>


<style lang="scss" scoped>
.video {
  &__cards {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 5%;
  }
  &__card {
    width: 20rem;
    height: auto;
  }
  &__iframe {
    width: 100%;
  }
}

</style>
