<template>
<div>
    <h1>Routes</h1>
    <div class="formContainer">
            <form action="routes.html">
                <h3>Find a route</h3>
                <hr>
                <ul id="routesForm">
                    <li class="routeOpt">
                        <label for="from">From</label><br>
                        <input type="text" id="from" name="from"><br>
                        <div id="currentLoc">
                            <input type="checkbox" name="currentLoc" value="current">
                            <label for="current">Use my current location</label>
                        </div> 
                    </li>
                    <li class="routeOpt">
                        <label for="destination">To</label><br>
                        <input type="text" id="destination" name="destination">
                    </li>
                    <li class="routeOpt">
                        <label for="appt-time">Departure time</label><br>
                        <input id="appt-time" type="time" name="appt-time" value="12:00">
                    </li>
                    <li class="routeOpt">
                        <div class="radioDiv">
                            <input type="radio" id="today" name="departureDay" value="today">
                            <label for="today">Today</label>  
                        </div>
                        <div class="radioDiv">
                            <input type="radio" id="tomorrow" name="departureDay" value="tomorrow" >
                            <label for="tomorrow">Tomorrow</label>  
                        </div>
                        <div class="radioDiv">
                            <input type="radio" id="other" name="departureDay" value="other">
                            <label for="other">Other</label>
                        </div>
                    </li>
                    <li class="routeOpt">
                        <button type="submit">Search</button>
                    </li>
                </ul>
            </form>
        </div>
    </div>
</template>  

<style scoped>

button {
    background-color: #bd572d;
    border: #bd572d solid 0px;
    color: white;
    width: 100px;
    height: 40px;
    padding: 10px 20px;
    border-radius: 8px;
    margin: 4px 2px;
    cursor: pointer;
  }
  button:hover {
    background-color: hsla(18, 62%, 46%, 0.898);
  }

  

/* Textbox (framsidans sökbox) */
input[type=text], select {
    width: auto;
    padding: 12px;
    /*margin: 5px 0 22px 0;*/
    /*display: inline-block;*/
    border: 1px solid rgb(3, 3, 3);
    border-radius: 8px;
    box-sizing: border-box;
    background-color: rgb(245, 245, 245);
  }


  .formContainer {
    margin: 0 auto;
    width: 600px;
    background-color: white;
    /* Form outline */
    padding: 1em;
    border: 1px solid #CCC;
    border-radius: 1em;
    color: black;
  }

  #routesForm {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  #time {
    width: 40px;
  }

  input[type=time] {
    width: auto;
    padding: 12px;
    /*margin: 5px 0 22px 0;*/
    /*display: inline-block;*/
    border: 1px solid rgb(3, 3, 3);
    border-radius: 8px;
    box-sizing: border-box;
  }

  .radioDiv {
    display: inline;
    margin: 15px;
  }

  .routeOpt {
    margin: 20px;
  }


  #from, #destination, #appt-time {
      margin-top: 8px;
  }

  #currentLoc {
      margin-top: 8px;
  }

  #ASLMap {
      width: 1100px;
      height: 750px;
  }
</style>
