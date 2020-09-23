<template>
<div id="main">

    <div class="formContainer" v-show="showRoute">
            <form action="RoutesFound.vue">
            <h3>Find a route</h3>
            <hr>
            <ul id="routesForm">
                <li class="routeOpt">
                   <label for="from" v-show="visible">From</label><br>
                    <input type="text" id="from" name="from" v-model="form.from" v-show="visible"><br>
                    <div id="currentLoc">
                        <input type="checkbox" name="currentLoc" value="current" v-model="form.currentLocation" @click="visible = !visible">
                        <label for="current">Use my current location</label>
                    </div> 
                </li>
                <li class="routeOpt">
                    <label for="destination">To</label><br>
                    <input type="text" id="destination" name="destination" v-model="form.destination">
                </li>
                <li class="routeOpt">
                    <label for="appt-time">Departure time</label><br>
                    <input id="appt-time" type="time" name="appt-time" v-model="form.time" value="12:00">
                </li>
                <li class="routeOpt">
                    <div class="radioDiv">
                        <input type="radio" id="today" name="departureDay" value="today" checked v-model="form.day">
                        <label for="today">Today</label>  
                    </div>
                    <div class="radioDiv">
                        <input type="radio" id="tomorrow" name="departureDay" value="tomorrow" v-model="form.day">
                        <label for="tomorrow">Tomorrow</label>  
                    </div>
                    <div class="radioDiv">
                        <input type="radio" id="other" name="departureDay" value="other" v-model="form.day">
                        <label for="other">Other</label>
                    </div>
                </li>
                <li class="routeOpt">
                    <button type="submit" @click.prevent="showRoute = !showRoute">Search</button>
                </li>
            </ul>
        </form>
        </div>

        <!-- RoutesFound börjar här -->

        <div class="formContainer" v-show="!showRoute">
          <h3>We found a suitable route to {{form.destination}}</h3>
          <div id="wrapper">
              <div id="routeSelected">
                <h3>Your selection</h3>
                <ul id="routesForm">
                    <li class="routeOpt">
                        <p v-if="!form.currentLocation">From: <strong>{{form.from}}</strong></p>
                        <p v-else>From: <strong>Your location</strong></p>
                        <p>To: <strong>{{form.destination}}</strong></p>
                        <p>Time: <strong>{{form.time}}</strong></p>
                        <p>Day: <strong>{{form.day}}</strong></p>
                    </li>
                    <li class="routeOpt">
                    <button type="submit">Buy</button>
                </li>
                </ul>
              </div>
                <div id="itineraryMap">
                    <img src="../assets/routesNew.png" alt="ItineraryMap" id="ASLMap">
                </div> 
            </div>
      </div>

      
    </div>
</template>  

<script>
    export default {
        name: "Routes",
        data: function(){
            return{
              form : 
              {
                from: '',
                currentLocation: false,
                destination: '',
                time: '12:00',
                day: ''
              },
              visible: true,
              showRoute: true
            }
        },
        methods: {
          sendForm: function() {window.location.href = 'RoutesFound.vue';}
        }
    }
</script>


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
    max-width: 600px;
    height: auto;
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


/* RoutesFound Styling */

  #itineraryMap{
    overflow: hidden;
}

  #ASLMap {
      max-width: 100%;
      height: auto;
  }

  #routeSelected {
    float:left;
    color: white;
    background-color: #3899ec;
  }

  #wrapper {
    width: auto;
    overflow: hidden;
    display: flex;
  }

</style>
