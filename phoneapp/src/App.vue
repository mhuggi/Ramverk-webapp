<template>
  <div id="app">
    <Header />
    <Explore />
    <Suggestions />
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
};
</script>

<style>
@import "./assets/style.css";
</style>
