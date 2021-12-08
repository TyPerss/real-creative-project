<template>
  <div class="home">
    <div class="headerContent">
      <h1 class="welcomeMessage">Welcome to League Builder!</h1>
      <h3 class="welcomeMessage">This is a community sports league manager. Come here to find a league for your favorite sports and age groups, or to register your own!</h3>
    </div>
    <div class="supportedSports">
      <h3>Currently Supported Sports:</h3>
    </div>
    <section class="sportsImageGallery">
      <div class="sportImage" v-for="sport in this.$root.staticSportData" :key="sport.id">
        <h3>{{sport.name}}</h3>
        <img :src="sport.image" width="95%"/>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  data() {
    return {
      leagues: [],
    };
  },
};
</script>

<style scoped>
.headerContent {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

/* Masonry */
*,
*:before,
*:after {
  box-sizing: inherit;
}

.sportsImageGallery {
  column-gap: 1.5em;
  margin-left: 1em
}

.sportImage {
  margin: 0 0 1.5em;
  display: inline-block;
  width: 100%;
}

/* Masonry on large screens */
@media only screen and (min-width: 1024px) {
  .sportsImageGallery {
    column-count: 4;
  }
}

/* Masonry on medium-sized screens */
@media only screen and (max-width: 1023px) and (min-width: 768px) {
  .sportsImageGallery {
    column-count: 3;
  }
}

/* Masonry on small screens */
@media only screen and (max-width: 767px) and (min-width: 540px) {
  .sportsImageGallery {
    column-count: 2;
  }
}

</style>