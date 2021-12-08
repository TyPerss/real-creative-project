<template>
  <div class="admin">
    <div class="adminHead">
      <h1 class="adminHeading">Add Sport League</h1>
    </div>
    <div class="add">
      <div class="sportForm">
        <div class="typedInput">
          <input v-model="name" placeholder="League Name" />
          <select v-model="sport">
            <option disabled value="">Select a Sport</option>
            <option v-for="sport in sportOptions" v-bind:key="sport.id"> {{sport}} </option>
          </select>
        </div>
        <div class="genderInput">
          <h2>Is this a male, female, or coed league?</h2>
          <input type="radio" id="sportAddMale" name="sportGender" value="Male" v-model="gender">
            <label for="sportAddMale"> Male</label>
          <input type="radio" id="sportAddFemale" name="sportGender" value="Female" v-model="gender">
            <label for="sportAddFemale"> Female</label>
          <input type="radio" id="sportAddCoed" name="sportGender" value="Coed" v-model="gender">
            <label for="sportAddCoed"> Coed</label>
        </div>
        <div class="seasonInput">
          <h2>Which seasons does this league play during?</h2>
          <input type="checkbox" id="addSeasonFall" name="sportSeason" value="Fall" v-model="seasons">
            <label for="addSeasonFall"> Fall</label>
          <input type="checkbox" id="addSeasonWinter" name="sportSeason" value="Winter" v-model="seasons">
            <label for="addSeasonWinter"> Winter</label>
          <input type="checkbox" id="addSeasonSpring" name="sportSeason" value="Spring" v-model="seasons">
            <label for="addSeasonSpring"> Spring</label>
          <input type="checkbox" id="addSeasonSummer" name="sportSeason" value="Summer" v-model="seasons">
            <label for="addSeasonSummer"> Summer</label>
        </div>
        <div class="divisionInput">
          <h2>Which division is this league?</h2>
          <input type="radio" id="addDivisionOpen" name="sportDivision" value="Open" v-model="division">
            <label for="addDivisionOpen"> Open (18+)</label>
          <input type="radio" id="addDivisionMasters" name="sportDivision" value="Masters" v-model="division">
            <label for="addDivisionMasters"> Masters (40+)</label>
          <input type="radio" id="addDivisionSeniors" name="sportDivision" value="Seniors" v-model="division">
            <label for="addDivisionSeniors"> Seniors (65+)</label>
        </div>
        <div class="indoorInput">
          <h2>Is this an indoor or outdoor league?</h2>
          <input type="radio" id="addSportIndoor" name="sportIndoor" value="Indoor" v-model="indoor">
            <label for="addSportIndoor"> Indoor</label>
          <input type="radio" id="addSportOutdoor" name="sportIndoor" value="Outdoor" v-model="indoor">
            <label for="addSportOutdoor"> Outdoor</label>
        </div>
        <button @click="addLeague">Add</button>
        <div class="postedData" v-if="addedLeague">
          <div class="postedDataHeader">
            <h2>You've added the following to the League database:</h2>
          </div>
          <div class="postedDataGrid">
            <h3>League Name: {{addedLeague.name}}</h3>
            <p class="sport">Sport: {{addedLeague.sport}}</p>
            <p>Gender: {{addedLeague.gender}}</p>
            <div class="seasons">
              <p>Seasons Active: </p>
              <p v-for="season in this.addedLeague.seasons" v-bind:key="season.id">{{season}} </p>
            </div>
            <p>Division: {{addedLeague.division}}</p>
            <p>Location: {{addedLeague.indoor}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="adminHead">
      <h1 class="adminHeading">Modify Sport League</h1>
    </div>
    <div class="modify">
      <div class="modifyForm">
        <input v-model="findLeagueName" placeholder="Search for a League">
        <div class="suggestions" v-if="suggestions.length > 0">
          <div class="suggestion" v-for="s in suggestions" :key="s.id" @click="selectLeague(s)">{{s.name}}</div>
        </div>
      </div>
      <div class="selectedInfo" v-if="findLeague">
        <input v-model="findLeague.name" />
        <select v-model="findLeague.sport">
          <option disabled value="">Select a Sport</option>
          <option v-for="sport in sportOptions" v-bind:key="sport.id"> {{sport}} </option>
        </select>
        <div class="genderInput">
          <input type="radio" id="sportAddMale" name="sportGender" value="Male" v-model="findLeague.gender">
            <label for="sportAddMale"> Male</label>
          <input type="radio" id="sportAddFemale" name="sportGender" value="Female" v-model="findLeague.gender">
            <label for="sportAddFemale"> Female</label>
          <input type="radio" id="sportAddCoed" name="sportGender" value="Coed" v-model="findLeague.gender">
            <label for="sportAddCoed"> Coed</label>
        </div>
        <div class="seasonInput">
          <input type="checkbox" id="addSeasonFall" name="sportSeason" value="Fall" v-model="findLeague.seasons">
            <label for="addSeasonFall"> Fall</label>
          <input type="checkbox" id="addSeasonWinter" name="sportSeason" value="Winter" v-model="findLeague.seasons">
            <label for="addSeasonWinter"> Winter</label>
          <input type="checkbox" id="addSeasonSpring" name="sportSeason" value="Spring" v-model="findLeague.seasons">
            <label for="addSeasonSpring"> Spring</label>
          <input type="checkbox" id="addSeasonSummer" name="sportSeason" value="Summer" v-model="findLeague.seasons">
            <label for="addSeasonSummer"> Summer</label>
        </div>
        <div class="divisionInput">
          <input type="radio" id="addDivisionOpen" name="sportDivision" value="Open" v-model="findLeague.division">
            <label for="addDivisionOpen"> Open (18+)</label>
          <input type="radio" id="addDivisionMasters" name="sportDivision" value="Masters" v-model="findLeague.division">
            <label for="addDivisionMasters"> Masters (40+)</label>
          <input type="radio" id="addDivisionSeniors" name="sportDivision" value="Seniors" v-model="findLeague.division">
            <label for="addDivisionSeniors"> Seniors (65+)</label>
        </div>
        <div class="indoorInput">
          <input type="radio" id="addSportIndoor" name="sportIndoor" value="Indoor" v-model="findLeague.indoor">
            <label for="addSportIndoor"> Indoor</label>
          <input type="radio" id="addSportOutdoor" name="sportIndoor" value="Outdoor" v-model="findLeague.indoor">
            <label for="addSportOutdoor"> Outdoor</label>
        </div>
      </div>
      <div class="actions" v-if="findLeague">
        <button @click="deleteLeague(findLeague)">Delete</button>
        <button @click="editLeague(findLeague)">Save Changes</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "Admin",
  data() {
    return {
      name: "",
      sport: "",
      gender: "",
      seasons: [],
      division: "",
      indoor: "",
      leagues: [],
      findLeagueName: "",
      findLeague: null,
      addedLeague: null,
      sportOptions: ['Soccer', 'Volleyball', 'Water Polo', 'Softball', 'Baseball','Rugby',
      'Cricket', 'Pickleball', 'Tennis', 'Swimming', 'Basketball', 'Football']
    };
  },
  computed: {
    suggestions() {
      let leagues = this.leagues.filter(league =>
        league.name.toLowerCase().startsWith(this.findLeagueName.toLowerCase())
      );
      return leagues.sort((a,b) => a.name > b.name);
    }
  },
  created() {
    this.getLeagues();
  },
  methods: {
    async addLeague() {
      try {
        let leagueData = await axios.post('/api/leagues', {
          name: this.name,
          sport: this.sport,
          gender: this.gender,
          seasons: this.seasons,
          division: this.division,
          indoor: this.indoor
        });
        this.addedLeague = leagueData.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getLeagues() {
      try {
        let response = await axios.get("/api/leagues");
        this.leagues = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    selectLeague(league) {
      this.findLeagueName = "";
      this.findLeague = league;
    },
    async deleteLeague(league) {
      try {
        await axios.delete("/api/leagues/" + league._id);
        this.findLeague = null;
        this.getLeagues();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async editLeague(league) {
      try {
        await axios.put("/api/leagues/" + league._id, {
          name: this.findLeague.name,
          sport: this.findLeague.sport,
          gender: this.findLeague.gender,
          seasons: this.findLeague.seasons,
          division: this.findLeague.division,
          indoor: this.findLeague.indoor,
        });
        this.findLeague = null;
        this.getLeagues();
        return true;
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>


<style scoped>

.admin {
  margin: 10px;
}

.typedInput {
  display: flex;
  min-height: 20px;
}
.typedInput input {
  max-height: 20px;
  margin-right: 10px;
}

label {
  margin-right: 20px;
}

button {
  margin-top: 20px;
}

.postedDataGrid {
  display: flex;
  flex-direction: column;
}
.seasons {
  display: flex;
  gap: 10px;
}
.modifyForm {
  display: flex;
  flex-direction: column;
  max-width: 250px;
}
.suggestions {
  margin-top: 10px;
  max-height: 100px;
  overflow-y: scroll;
  border: 1px solid black;
}
.suggestion:hover{
background-color:rgb(127, 201, 214);
user-select: none;
}
.selectedInfo {
  margin-top: 20px;
}
</style>