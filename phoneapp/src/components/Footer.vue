<template>
  <footer>
    <nav>
      <ul>
        <li>
          <p>Powever by ASL</p>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<style scoped>
/* Header */
footer {
  background-color: rgb(99, 99, 99);
  color: white;
  display: flex;
  /* position: absolute; */
  margin-top: 80px;
  bottom: 0;
  min-width: 100%;
  height: 70px;
}
nav {
  margin-left: auto; /* Meny högra kanten */
}
nav ul {
  margin: 0px 20px;
}
nav li {
  list-style: none; /* Bort med bollar */
  float: left; /* Horisontell meny */
}
</style>