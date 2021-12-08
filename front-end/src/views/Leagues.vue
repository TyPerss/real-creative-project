<template>
  <div class="leagues">
    <div class="filterHeader">
      <h3>Select a Sport to Filter By</h3>
      <div class="filterButtons">
        <select v-model="filterLeagueSport">
          <option disabled value="">Select a Sport</option>
          <option v-for="sport in sportOptions" v-bind:key="sport.id"> {{sport}} </option>
        </select>
        <button @click="filterReset()">Reset Filter</button>
      </div>
    </div>
    <div class="leagueContent">
      <section class="league-gallery">
        <div class="league" v-for="league in filteredLeagues" :key="league.id">
          <div class="leagueDataGrid">
            <h3><b>League Name:</b> {{league.name}}</h3>
            <p class="sport"><b>Sport:</b> {{league.sport}}</p>
            <p><b>Gender:</b> {{league.gender}}</p>
            <div class="seasons">
              <p><b>Seasons Active:</B> </p>
              <p v-for="season in league.seasons" v-bind:key="season.id">{{season}} </p>
            </div>
            <p><b>Division:</b> {{league.division}}</p>
            <p><b>Location:</b> {{league.indoor}}</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "Leagues",
  data() {
    return {
      leagues: [],
      filterLeagueSport: "",
      sportOptions: ['Soccer', 'Volleyball', 'Water Polo', 'Softball', 'Baseball','Rugby',
      'Cricket', 'Pickleball', 'Tennis', 'Swimming', 'Basketball', 'Football']
    };
  },
  created() {
    this.getLeagues();
  },
  computed: {
    filteredLeagues() {
      let leagues = this.leagues.filter(league =>
        league.sport.toLowerCase().startsWith(this.filterLeagueSport.toLowerCase())
      );
      return leagues.sort((a,b) => a.name > b.name);
    }
  },
  methods: {
    async getLeagues() {
      try {
        let response = await axios.get("/api/leagues");
        this.leagues = response.data;
        return true;
      } catch (error) {
        return false;
      }
    },
    filterReset() {
      this.filterLeagueSport = ""
    }
  },
};
</script>

<style scoped>
.league h2 {
  font-style: bold;
}

/* Masonry */
*,
*:before,
*:after {
  box-sizing: inherit;
}

.league-gallery {
  column-gap: 1.5em;
}

.league {
  margin: 0 0 1.5em;
  padding: 5px;
  display: inline-block;
  width: 95%;
  border: 3px solid orange;
  word-break:break-word;
}

/* Masonry on large screens */
@media only screen and (min-width: 1024px) {
  .league-gallery {
    column-count: 4;
  }
}

/* Masonry on medium-sized screens */
@media only screen and (max-width: 1023px) and (min-width: 768px) {
  .league-gallery {
    column-count: 3;
  }
}

/* Masonry on small screens */
@media only screen and (max-width: 767px) and (min-width: 540px) {
  .league-gallery {
    column-count: 2;
  }
}

.leagueDataGrid {
  display: flex;
  flex-direction: column;
}
.seasons {
  display: flex;
  gap: 6px;
}

.filterButtons {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}
.leagues {
  margin-left: 5px;
  margin-right: 5px;
}
</style>