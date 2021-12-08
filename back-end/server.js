const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/leagues', {
  useNewUrlParser: true
});

const leagueSchema = new mongoose.Schema({
  name: String,
  sport: String,
  gender: String,
  seasons: [String],
  division: String,
  indoor: String
});

const League = mongoose.model('League', leagueSchema);

app.post('/api/leagues', async (req, res) => {
  const league = new League({
    name: req.body.name,
    sport: req.body.sport,
    gender: req.body.gender,
    seasons: req.body.seasons,
    division: req.body.division,
    indoor: req.body.indoor,
  });
  try {
    await league.save();
    res.send(league);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get('/api/leagues', async (req, res) => {
  try {
    let leagues = await League.find();
    res.send(leagues);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/leagues/:id', async (req, res) => {
  try {
    await League.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put('/api/leagues/:id', async (req, res) => {
  try {
    let league = await League.findOne({
      _id: req.params.id
    });
    league.name = req.body.name
    league.sport = req.body.sport
    league.gender = req.body.gender,
    league.seasons = req.body.seasons,
    league.division = req.body.division,
    league.indoor = req.body.indoor
    await league.save()
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(3000, () => console.log('Server listening on port 3000!'));