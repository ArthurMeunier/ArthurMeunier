<template>

    <v-carousel  class="carousel__bis">
      <v-carousel-item
      class ="carousel__box"
      v-for="audio in audios" :key="audio.id" :src="audio.image" contain max-height="400"
      >
      <v-btn v-on:click="isHidden = true" class="carousel__btn btn btn-primary btn-sm" loop="loop" @click.prevent="audio.isPlaying ? pause(audio) : play(audio)" :key="audio.id">
 
        {{ audio.isPlaying ? 'Pause' : `` }} {{ audio.name }}
      </v-btn>

      </v-carousel-item>
    </v-carousel>
    
</template>

<script>
export default {
  name: 'CarouselAmb',
  methods: {
    play (audio) {
      audio.file.volume = 0.4;
      audio.isPlaying = true;
      audio.file.loop = true;
      audio.file.play();
    },
    
    pause (audio) {
      audio.isPlaying = false;
      audio.file.pause();
    }
  },
  data() {
    return {
      toggle: true,
      audios: [
      {
        id: '1',
        name: 'ambiance Forêt',
        image: require('@/assets/sound/amb1.jpg'),
        file: new Audio(require('@/assets/sound/amb1.mp3'),),
        isPlaying: false,
      },
      {
        id: '2',
        name: 'ambiance Mer',
        image: require('@/assets/sound/amb2.jpg'),
        file: new Audio(require('@/assets/sound/amb2.mp3'),),
        isPlaying: false,
      },
      {
        id: '3',
        name: 'ambiance Grotte',
        image: require('@/assets/sound/amb3.jpg'),
        file: new Audio(require('@/assets/sound/amb3.mp3'),),
        isPlaying: false,
      },
      {
        id: '4',
        name: 'ambiance ciel',
        image: require('@/assets/sound/amb4.jpg'),
        file: new Audio(require('@/assets/sound/amb4.mp3'),),
        isPlaying: false,
      }
    ]
    };
  }
}
</script>

<style lang="scss" scoped>
.carousel {
  &__btn {
  margin: auto;
  position: relative;
  top: 13.5rem;
  }
  &__btnimg {
    width: 20px;
  }
  &__bis {
  border: 4px solid black;
  }
}
button {
  display: block;
  width: 12rem;
}
</style>
