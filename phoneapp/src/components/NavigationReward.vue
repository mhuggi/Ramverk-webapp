<template>
<div>
  <body>
    <h2>Your Rewards</h2>
    <div class="piechart"></div>
  </body>

  <button class="button" type="button">Claim Rewards</button>
</div>
</template>


<style>
.piechart {
  margin-top: 300px;
  display: block;
  position: absolute;
  width: 400px;
  height: 400px;
  border: #bd2d58 solid 6px;
  border-radius: 50%;
  background-image: conic-gradient(blue 0 260deg, white 0);
}

body,
.piechart {
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  background-color: #bd572d;
  border: #bd572d solid 0px;
  color: white;
  width: 150px;
  height: 50px;
  padding: 10px 10px;
  border-radius: 8px;
  margin: 4px 4px;
}
button:hover {
  background-color: hsla(18, 62%, 46%, 0.898);
}
.button {
  margin-top: 500px;
  margin-left: 0%;
  padding: 5px;
  border-radius: 5px;
}
</style> 
