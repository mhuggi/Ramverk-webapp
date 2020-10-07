<template>
  <div id="app">
    <Header @site="changeSite" :sites="headerSites" />
    <div v-if="currSite === 'Explore'">    
      <Explore />
    </div>
    <div v-else-if="currSite === 'Suggestions'">    
    <Suggestions :thisSugg="suggestions"/>
    </div>
    <div v-else-if="currSite === 'Routes'">    
    <Routes />
    </div>
    <div v-else-if="currSite === 'Navigation'">
    <Navigation />
    </div>    
    <div v-else-if="currSite === 'Pay'">
    <Pay :params="getParams()"/>
    </div>    


  </div>
</template>

<script>
import Header from "./components/Header";
import Suggestions from './components/Suggestions'
import Explore from './components/Explore'
import Routes from './components/Routes'
import Pay from './components/Pay'

export default {
  name: "App",
  components: {
    Header,
    Suggestions,
    Explore,
    Routes,
    Pay
  },
  methods: {
    changeSite(s) {
      this.currSite = s;
    },
    getParams() {
    let uri = window.location.href.split('?');
    if (uri.length == 2)
    {
      let vars = uri[1].split('&');
      let getVars = {};
      let tmp = '';
      vars.forEach(function(v){
        tmp = v.split('=');
        if(tmp.length == 2)
        getVars[tmp[0]] = tmp[1];
      });
      if (getVars.start && getVars.dest) {
        this.currSite = "Pay"
      return ({
        start: getVars.start,
        dest: getVars.dest
      })

      }
    }
    }

  },
  mounted: function() {
  {
    let uri = window.location.href.split('?');
    if (uri.length == 2)
    {
      let vars = uri[1].split('&');
      let getVars = {};
      let tmp = '';
      vars.forEach(function(v){
        tmp = v.split('=');
        if(tmp.length == 2)
        getVars[tmp[0]] = tmp[1];
      });
        if (getVars.start && getVars.dest) {
          this.currSite = "Pay"
        }

    }

  }
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

      ],
      headerSites: [
        {
          name: "Explore"
        },
        {
          name: "Routes"
        },
        {
          name: "Suggestions"
        }
      ],
      currSite: "Explore"
    }
  }
};
</script>

<style>
@import "./assets/style.css";
</style>
