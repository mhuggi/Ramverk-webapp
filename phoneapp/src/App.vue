<template>
  <div id="app">
    <Header />
    <Explore />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Explore from "./components/Explore";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Explore,
    Header,
    Footer,
  },
};
</script>

<style>
@import "./assets/style.css";
</style>
