<template>
  <header>
    <p>ASL</p>
    <nav>
      <ul>
        <li v-for="(s, i) in sites" :key="i">
          <div @click="currSiteChange(s.name)">{{s.name}}</div>
        </li>
      </ul>
    </nav>
    <a href>
      <img id="logo" src alt="headLogo" />
    </a>
  </header>
</template>
<script>
export default {
    name: "Header",
    props: {
        sites: Array
    },
    methods: {
        currSiteChange(s) {
            console.log("Change site to: " + s)
            this.$emit('site', s)
        }
    }

}
</script>


<style scoped>
/* Header */
header {
  border-bottom: 3px solid white;
  color: white;
  display: flex;
  align-items: center;
  padding: 6px 6px;
  margin-bottom: 80px;
}
header a {
  text-decoration: none; /* Remove underline */
  color: white;
}

/* Menyn */
nav {
  margin-left: auto; /* Meny högra kanten */
}
nav ul {
  padding-left: 0px;
  margin: 0px 20px;
}
nav li {
  list-style: none; /* Bort med bollar */
  float: left; /* Horisontell meny */
  padding: 10px; /* Space för hovereffekt */
  margin: 0px 5px; /* Space mellan länkar */
  border-radius: 5px; /* Hovereffekts runda kanter */
}
nav li:hover {
  background-color: hsla(18, 62%, 46%, 0.898); /* Hovereffekt */
}
</style>