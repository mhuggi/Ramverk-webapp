<template>
  <div id="app">
    <Header />
    <Explore />
    <Suggestions :thisSugg="suggestions"/>
    <Routes />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Suggestions from './components/Suggestions'
import Explore from './components/Explore'
import Routes from './components/Routes'

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Suggestions,
    Explore,
    Routes
  },
  data: function() {
    return {
      suggestions: [
        {
          title: "Helsinki senate square",
          pic: "senate.jpg",
          stars: "stars.png",
          info: "The Senate Square presents Carl Ludvig Engel's architecture as a unique allegory of political, religious, scientific and commercial powers in the centre of Helsinki, Finland."
        },
        {
          title: "Helsinki Central Station",
          pic: "train.jpg",
          stars: "stars.png",
          info: "Helsinki Central Station is the main station for commuter rail and long-distance trains departing from Helsinki, Finland. The station is used by approximately 400,000 people per day, of which about 200,000 are passengers."
        },
        {
          title: "Kaivopuisto",
          pic: "kaivo.jpg",
          stars: "stars.png",
          info: "Kaivopuisto (Swedish: Brunnsparken), or in spoken language,Brunsan, is one of the oldest and best known parks in central Helsinki, Finland, and also a neighbourhood of about 500 inhabitants where the park is located."
        }

      ]
    }
  }
};
</script>

<style>
@import "./assets/style.css";
</style>
