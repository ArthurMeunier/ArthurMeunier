<template>
  <v-app>
    <v-btn target="_blank" color="#2D2D2D" href="https://drive.google.com/file/d/1IawMroCmJxZ7kGrk1gT2DZx-ScA4H5-t/view?usp=sharing" class="cv__btn">Voir la version PDF</v-btn>
    <div class="cv">
      <v-flex xs12 sm12 md5 lg6 xl6 class="mt-4 pt-4">
        <h2 class="mb-4 pl-4 pt-2">ÉTUDES</h2>
        <v-card-text class="py-0">
          <v-timeline align-top dense>
            <v-timeline-item 
            v-for="line in lines.slice(0, 4)"
            v-bind:key="line.id" color="black" small>
              <v-layout pt-3>
                <v-flex xs4>
                  <div class="caption font-weight-bold black--text">{{line.date}}</div>
                </v-flex>
                <v-flex class="pl-2">
                  <strong>{{line.title}}</strong>
                  <div>{{line.place}}</div>
                  <div class="caption mb-2">{{line.description}}</div>
                </v-flex>
              </v-layout>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-flex>
      <v-flex xs12 sm12 md5 lg6 xl6 class="mt-4 pt-4">
        <h2 class="mb-4 pl-4 pt-2">TRAVAIL</h2>
        <v-card-text class="py-0">
          <v-timeline align-top dense>
            <v-timeline-item 
            v-for="line in lines.slice(4, 8)"
            v-bind:key="line.id" color="black" small>
              <v-layout pt-3>
                <v-flex xs4>
                  <div class="caption font-weight-bold black--text">{{line.date}}</div>
                </v-flex>
                <v-flex class="pl-2">
                  <strong>{{line.title}}</strong>
                  <div>{{line.place}}</div>
                  <div class="caption mb-2">{{line.description}}</div>
                </v-flex>
              </v-layout>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-flex> 
    </div>
    <v-divider></v-divider>
    <h2 class="cv__skillstitle mb-4 pl-4 pt-2">COMPÉTENCES</h2>
      <div class="cv__skills">
        <div class="cv__skill">
          <h3>SON</h3>
          <div class="cv__skillicons">
            <v-tooltip 
            v-for="icon in icons.slice(0, 7)"
            v-bind:key="icon.id" color="black" small bottom>
              <template #activator="{ on }">
            <img class="cv__skillicon" v-on="on" :src="icon.img">
              </template>
              <span>{{icon.text}}</span>
            </v-tooltip>
          </div>
        </div>
      
        <div class="cv__skill">
          <h3>VIDÉO</h3>
          <div class="cv__skillicons">
            <v-tooltip 
            v-for="icon in icons.slice(7, 13)"
            v-bind:key="icon.id" color="black" small bottom>
              <template #activator="{ on }">
            <img class="cv__skillicon" v-on="on" :src="icon.img">
              </template>
              <span>{{icon.text}}</span>
            </v-tooltip>
          </div>
        </div>

        <div class="cv__skill">
          <h3>WEB</h3>
          <div class="cv__skillicons">
            <div class="cv__skilliconsweb">
              <v-tooltip 
              v-for="icon in icons.slice(13, 20)"
              v-bind:key="icon.id" color="black" small bottom>
                <template #activator="{ on }">
              <img class="cv__skillicon" v-on="on" :src="icon.img">
                </template>
                <span>{{icon.text}}</span>
              </v-tooltip>
              <v-tooltip 
              v-for="icon in icons.slice(20, 26)"
              v-bind:key="icon.id" color="black" small bottom>
                <template #activator="{ on }">
              <img class="cv__skillicon" v-on="on" :src="icon.img">
                </template>
                <span>{{icon.text}}</span>
              </v-tooltip>
            </div>
          </div>
        </div>

        <div class="cv__skill">
          <h3>AUTRES</h3>
          <div class="cv__skillicons">
            <v-tooltip 
            v-for="icon in icons.slice(26, 32)"
            v-bind:key="icon.id" color="black" small bottom>
              <template #activator="{ on }">
            <img class="cv__skillicon" v-on="on" :src="icon.img">
              </template>
              <span>{{icon.text}}</span>
            </v-tooltip>
          </div>
        </div>

        
      </div>
      <v-divider></v-divider>

  </v-app>
</template>

<script>
export default {
  name: 'CV',
  data() {
    return {
      lines:
       [
        { 
          id: 1,
          date: '2021 - 2022',
          title: 'DÉVELOPPEUR WEB',
          place: 'OPENCLASSROOMS',
          description: `Téléformation en alternance avec l’entreprise Magik Éduk`, 
        },
        { 
          id: 2,
          date: '2015 - 2016',
          title: 'SOUND DESIGNER',
          place: 'ISTDS, Montréal',
          description: `Formation en conception sonore pour jeux vidéo et médias interactifs`, 
        },
        { 
          id: 3,
          date: '2013 - 2014',
          title: 'RÉALISATEUR AUDIOVISUEL',
          place: 'CIFACOM, Montreuil',
          description: `Formation en réalisation et montage audiovisuel`, 
        },
        { 
          id: 4,
          date: '2011 - 2013',
          title: 'TECHNICIEN SON',
          place: 'CIFACOM, Montreuil',
          description: `Brevet de technicien supérieur en audiovisuel, option son`, 
        },
        { 
          id: 5,
          date: '2018 - 2022',
          title: 'EMPLOYÉ - ASSOCIÉ',
          place: 'MAGIK ÉDUK',
          description: `Production d’une application d’apprentissage de la lecture`, 
        },
        { 
          id: 6,
          date: '2017 - 2018',
          title: 'RÉFÉRENCEUR WEB',
          place: 'INLEED',
          description: `Référencement pour des sites de PME`, 
        },
        { 
          id: 7,
          date: '2016 - 2017',
          title: 'WE ARE TESTERS',
          place: 'OPENCLASSROOMS',
          description: `Tests d’applications et de sites internet`, 
        },
        { 
          id: 8,
          date: '2015 - 2016',
          title: 'HÔTE - VENDEUR',
          place: 'FUTUROSCOPE',
          description: `Attraction ayant pour thème les nouvelles technologies`, 
        }
      ],
      icons: 
      [
        {
          id: 1,
          img: require('@/assets/icons/iconrec.png'),
          text: 'Prise de son',
        },
        {
          id: 2,
          img: require('@/assets/icons/iconmix.png'),
          text: 'Mixage',
        },
        {
          id: 3,
          img: require('@/assets/icons/iconsd.png'),
          text: 'Sound Design',
        },
        {
          id: 4,
          img: require('@/assets/icons/iconsono.png'),
          text: 'Sonorisation',
        },
        {
          id: 5,
          img: require('@/assets/icons/iconreaper.png'),
          text: 'Reaper',
        },
        {
          id: 6,
          img: require('@/assets/icons/iconpt.png'),
          text: 'Pro Tools',
        },
        {
          id: 7,
          img: require('@/assets/icons/iconwwise.png'),
          text: 'Wwise',
        },
        {
          id: 8,
          img: require('@/assets/icons/iconvrec.png'),
          text: 'Prise de vue',
        },
        {
          id: 9,
          img: require('@/assets/icons/iconreal.png'),
          text: 'Réalisation',
        },
        {
          id: 10,
          img: require('@/assets/icons/iconedit.png'),
          text: 'Montage',
        },
        {
          id: 11,
          img: require('@/assets/icons/iconresolve.png'),
          text: 'Resolve',
        },
        {
          id: 12,
          img: require('@/assets/icons/iconpr.png'),
          text: 'Premiere Pro',
        },
        {
          id: 13,
          img: require('@/assets/icons/iconae.png'),
          text: 'After Effects',
        },
        {
          id: 14,
          img: require('@/assets/icons/iconhtml.png'),
          text: 'HTML',
        },
        {
          id: 15,
          img: require('@/assets/icons/iconcss.png'),
          text: 'CSS',
        },
        {
          id: 16,
          img: require('@/assets/icons/iconsass.png'),
          text: 'SCSS',
        },
        {
          id: 17,
          img: require('@/assets/icons/iconjs.png'),
          text: 'Javascript',
        },
        {
          id: 18,
          img: require('@/assets/icons/iconvuejs.png'),
          text: 'Vue.js',
        },
        {
          id: 19,
          img: require('@/assets/icons/iconsql.png'),
          text: 'SQL',
        },
        {
          id: 20,
          img: require('@/assets/icons/iconvsc.svg'),
          text: 'Visual Studio Code',
        },
        {
          id: 21,
          img: require('@/assets/icons/iconseo.png'),
          text: 'SEO',
        },
        {
          id: 22,
          img: require('@/assets/icons/icontest.png'),
          text: 'Test',
        },
        {
          id: 23,
          img: require('@/assets/icons/iconandroid.png'),
          text: 'Android',
        },
        {
          id: 24,
          img: require('@/assets/icons/iconios.png'),
          text: 'iOS',
        },
        {
          id: 25,
          img: require('@/assets/icons/iconunity.png'),
          text: 'Unity',
        },
        {
          id: 26,
          img: require('@/assets/icons/iconunreal.png'),
          text: 'Unreal',
        },
        {
          id: 27,
          img: require('@/assets/icons/iconpoly.png'),
          text: 'Polyvalence',
        },
        {
          id: 28,
          img: require('@/assets/icons/iconsupport.png'),
          text: 'Assistance',
        },
        {
          id: 29,
          img: require('@/assets/icons/iconcrm.png'),
          text: 'CRM',
        },
        {
          id: 30,
          img: require('@/assets/icons/iconaccueil.png'),
          text: 'Accueil',
        },
        {
          id: 31,
          img: require('@/assets/icons/iconsale.png'),
          text: 'Vente',
        },
        {
          id: 32,
          img: require('@/assets/icons/iconvr.png'),
          text: 'V.R',
        },
      ],
    };
  }
}
</script>


<style lang="scss" scoped>
.cv {
  display: flex;
  &__btn {
    width: 33%;
    color: white;
    margin: auto;
    margin-top: 1rem;
  }
  &__skills {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  &__skill {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &__skillicons {
    margin-top: 1rem;
  }
  &__skilliconsweb {
    text-align: center;
  }
  &__skillicon {
    width: 20px;
    margin-right: 1rem;
  }

}

.v-application .pt-3 {
    padding-top: 0px !important;
}


@media screen and (max-width: 768px) {
  .layout {
    display: block;
  }

  .v-application .pl-2 {
    padding-left: 0!important;
  }

  .flex.xs4 {
    max-width: 5rem!important;
  }

 .cv {
   flex-direction: column;
   &__btn {
     width: 40%;
     font-size: 0.6rem;
   }
  &__skills {
    flex-direction: column;
    padding: 0.5rem;
  }
  &__skillstitle {
    margin-bottom: 0!important;
  }
  &__skillicons {
    display: flex;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }
  &__skillicon {
    width: 15px;
  }
 }
}


@media screen and (min-width:769px) and (max-width: 1337px) {
  .layout {
    display: block;
  }

  .v-application .pl-2 {
    padding-left: 0!important;
  }

  .flex.xs4 {
    max-width: 5rem!important;
  }

 .cv {
   justify-content: center;
   &__btn {
     width: 40%;
     font-size: 0.6rem;
   }
  &__skills {
    flex-direction: column;
    padding: 0.5rem;
  }
  &__skillstitle {
    margin-bottom: 0!important;
  }
  &__skillicons {
    display: flex;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }
  &__skillicon {
    width: 20px;
  }
 }
}

</style>
