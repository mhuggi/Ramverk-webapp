<template>
<div id="main">
    <div class="formContainer" v-show="showRoute">
            <form action="#">
            <h3>Find a route</h3>
            <hr>
            <ul id="routesForm">
                <li class="routeOpt">
                    <transition name="slide-fade">
                    <div   v-if="show">
                    <label for="from" class="desc" v-show="hideFromInput">From</label><br>
                    <input type="text" id="from" placeholder="Departure" name="from" v-model="form.from" v-show="hideFromInput"><br>
                    </div>
                    </transition>

                    <div id="currentLoc">
                        <input type="checkbox" name="currentLoc" value="current" v-model="form.currentLocation" @click="show = !show">
                        <label for="current">Use my current location</label><br>
                    </div> 
                </li>
                <li class="routeOpt">
                    <label for="destination" class="desc">To</label><br>
                    <input type="text" id="destination" placeholder="Destination" name="destination" v-model="form.destination">
                </li>
                <li class="routeOpt">
                    <label for="appt-time" class="desc">Departure time</label><br>
                    <input id="appt-time" type="time" name="appt-time" v-model="form.time" value="12:00">
                </li>
  
                <li class="routeOpt">
                    <div class="radioDiv">
                        <input type="radio" id="today" name="departureDay" value="today" checked v-model="form.day"  @click="changeDate = true">
                        <label for="today">Today</label>  
                    </div>
                    <div class="radioDiv">
                        <input type="radio" id="tomorrow" name="departureDay" value="tomorrow" v-model="form.day"  @click="changeDate = true">
                        <label for="tomorrow">Tomorrow</label>  
                    </div>
                    <div class="radioDiv">
                        <input type="radio" id="other" name="departureDay" value="other" @click="changeDate = false">
                        <label for="other">Other</label>
                    </div>
                </li>
                <transition name="fade">
                <li class="routeOpt" v-if="!changeDate">
                    <label for="deptDate" class="desc">Select a date</label><br>
                    <input id="deptDate" type="date"  name="deptDate" v-model="form.date">
                </li>
                </transition>

                <li class="routeOpt">
                    <button type="submit" @click.prevent="showRoute = !showRoute">Search</button>
                </li>
            </ul>
        </form>
        </div>

        <!-- RoutesFound börjar här -->
        <div v-show="!showRoute">
          <!-- First option -->
           <h3>Suitable routes to {{form.destination}}</h3>
          <div class="bestRouteOpt">
         
          <div id="wrapper">
              <div id="routeSelected">
                <h3>Details</h3>
                <ul id="routesForm">
                    <li class="routeOpt">
                        <p v-if="!form.currentLocation">From: <strong>{{form.from}}</strong></p>
                        <p v-else>From: <strong>Your location</strong></p>
                        <p>To: <strong>{{form.destination}}</strong></p>
                        <p>Departure: <strong>{{form.time}}</strong></p>
                        <p v-if="!form.day">Date: <strong>{{form.date}}</strong></p>
                        <p v-else>Day: <strong>{{form.day}}</strong></p>    
                    </li>
                    <li class="routeOpt">
                    <button type="submit">Buy</button>
                </li>
                </ul>
              </div>
                <div id="itineraryMap">
                    <img src="../assets/routesNew.png" alt="ItineraryMap" id="ASLMap">
                    <button class="editSelection" type="submit" @click.prevent="showRoute = true">Edit selections</button>
                </div> 
            </div>
            </div>


          <!-- Second option -->
          <div class="bestRouteOpt">
          <div id="wrapper">
              <div id="routeSelected">
                <h3>Details</h3>
                <ul id="routesForm">
                    <li class="routeOpt">
                        <p v-if="!form.currentLocation">From: <strong>{{form.from}}</strong></p>
                        <p v-else>From: <strong>Your location</strong></p>
                        <p>To: <strong>{{form.destination}}</strong></p>
                        <p>Departure: <strong>{{randomTime()}}</strong></p>
                        <p v-if="!form.day">Date: <strong>{{form.date}}</strong></p>
                        <p v-else>Day: <strong>{{form.day}}</strong></p>    
                    </li>
                    <li class="routeOpt">
                    <button type="submit">Buy</button>
                </li>
                </ul>
              </div>
                <div id="itineraryMap">
                    <img src="../assets/routesNew.png" alt="ItineraryMap" id="ASLMap">
                    <button class="editSelection" type="submit" @click.prevent="showRoute = true">Edit selections</button>
                </div> 
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
                day: '',
                date: ''
              },
              hideFromInput: true,
              changeDate: true,
              showRoute: true,
              isHidden: true,
              show: true
            }
        },
        methods: {
          //sendForm: function() {window.location.href = 'RoutesFound.vue';},
          randomTime: function() {
          var hrs = this.form.time.slice(0,2);
          var mins = Math.round(Math.random()*60);    
          var mFormat = (mins<10 ? "0" : "");
          return String(hrs + ":" + mFormat+mins);
          }
        }
    }

</script>


<style scoped>

hr {
  border: 1px solid grey;
  box-shadow:2px 2px 2px rgb(196, 196, 196);
}

input:focus, textarea:focus, select:focus{
        outline: none;
}

button {
    background-color: #bd572d;
    border: #bd572d solid 0px;
    color: white;
    width: 200px;
    height: 40px;
    padding: 10px 20px;
    border: 0px;
    border-radius: 8px;
    margin: 4px 2px;
    cursor: pointer;
    outline:none;
  }
  button:hover {
    background-color: hsla(18, 62%, 46%, 0.898);
    transform:scale(0.99,0.99);
    -webkit-transform:scale(0.99,0.99);
    -moz-transform:scale(0.99,0.99);
  }

  .editSelection {
    background-color: #3899ec;
    color: white;
    width: 150px;
    height: 40px;
    padding: 5px 10px;
    border: 0px;
    border-radius: 8px;
    margin: 4px 2px;
    cursor: pointer;
    outline:none;
  }

  .editSelection:hover {
    background-color: hsla(208, 83%, 57%, 0.898);
    transform:scale(0.99,0.99);
    -webkit-transform:scale(0.99,0.99);
    -moz-transform:scale(0.99,0.99);
  }

  

/* Textbox (framsidans sökbox) */
input[type=text], select {
    width: 200px;
    padding: 12px;
    /*margin: 5px 0 22px 0;*/
    /*display: inline-block;*/
    border: 0px;
    border-radius: 8px;
    box-sizing: border-box;
    background-color: rgb(245, 245, 245);
  }

  input[type=]:hover {
    background-color: rgb(228, 228, 228);
  }


  .desc {
    font-size: smaller;
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
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
    width: 200px;
    padding: 12px;
    /*margin: 5px 0 22px 0;*/
    /*display: inline-block;*/
    border: 0px;
    border-radius: 8px;
    box-sizing: border-box;
    background-color: rgb(245, 245, 245);
  }

  input[type=date] {
    width: 200px;
    padding: 12px;
    /*margin: 5px 0 22px 0;*/
    /*display: inline-block;*/
    border: 0px;
    border-radius: 8px;
    box-sizing: border-box;
    background-color: rgb(245, 245, 245);
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

 .fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease-in-out;
}

.fade-enter, .fade-leave-active {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all .4s ease;
}
.slide-fade-leave-active {
  transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(50px);
  opacity: 0;
}


/* RoutesFound Styling */

.bestRouteOpt {
  margin: 0 auto;
  max-width: 600px;
  height: auto;
  background-color: white;
  /* Form outline */
  padding: 1em;
  border: 1px solid #CCC;
  border-radius: 1em;
  color: black;
  margin-top: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

  #itineraryMap{
    overflow: hidden;
}

  #ASLMap {
      max-width: 100%;
      height: auto;
  }

  #routeSelected {
    float:left;
    color: rgb(0, 0, 0);
    background-color: #ffffff;
  }

  #wrapper {
    width: auto;
    overflow: hidden;
    display: flex;
  }

#pp {
  margin-bottom: 5px;
}




</style>
