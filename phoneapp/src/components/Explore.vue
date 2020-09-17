<!-- Helt bare-bone, int nå fancy CSS eller naathing
    /Merkel -->
<template>
  <div class="center">
    <h1>Explore All of Helsinki</h1>
    <form>
      <input class="gibSpace" type="text" />
    </form>
    <button class="button" type="button">Search</button>
    <br />

    <div class="navButtons">
      <button class="button" type="button">Find Routes</button>
      <button class="button" type="button">Tickets</button>
      <button class="button" type="button">Suggestions</button>
    </div>
  </div>
</template>

<style scoped>
.center {
  margin: auto;
  width: 60%;
}

.button {
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  padding: 10px;
  border-radius: 8px;
}

.navButtons {
  display: inline-block;
  margin-top: 13%;
}
</style>