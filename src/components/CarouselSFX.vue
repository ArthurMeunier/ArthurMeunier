<template>

    <v-carousel class="carousel__main">
      <v-carousel-item
      class ="carousel__box"
      v-for="audio in audios" :key="audio.id"  >

        <div class="sound">
          <img class="sound__img" :src="audio.image">
                <v-btn v-on:click="isHidden = true" class="sound__btn btn btn-primary btn-sm" loop="loop" @click.prevent="audio.isPlaying ? pause(audio) : play(audio)" :key="audio.id">
                  <img class="sound__btnimg" src="../assets/icons/iconsd.png">
                </v-btn>
        </div>





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
        image: require('@/assets/sound/card1.png'),
        file: new Audio(require('@/assets/sound/card1.wav'),),
        isPlaying: false,
      },
      {
        id: '2',
        image: require('@/assets/sound/card2.png'),
        file: new Audio(require('@/assets/sound/card2.wav'),),
        isPlaying: false,
      },
      {
        id: '3',
        image: require('@/assets/sound/card3.png'),
        file: new Audio(require('@/assets/sound/card3.wav'),),
        isPlaying: false,
      },
      {
        id: '4',
        image: require('@/assets/sound/card4.png'),
        file: new Audio(require('@/assets/sound/card4.wav'),),
        isPlaying: false,
      }
    ]
    };
  }
}
</script>

<style lang="scss" scoped>

.sound {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  height: 15rem;
  background-color: #756c6c;
  &__img {
  width: 125px;
  object-fit: cover;
  }
  &__btn {
    position: absolute;
    bottom: 13.5rem;
    margin-bottom: 2rem;
    z-index: 1;
  }
  &__btnimg {
    width: 20px;
  }
}


</style>
