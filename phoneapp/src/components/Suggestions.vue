<template>

<div>
        <h1>Suggestions</h1>

    <div class="suggestions">
        <div class="suggestion" v-for="(s, i) in thisSugg" :key="i">
            <h3 class="title">{{ s.title}}</h3>
            <img class="pic" v-bind:src="require('../assets/' + s.pic + '')" alt="senatesquare" width="300">
            <img class="stars" v-bind:src="require('../assets/' + s.stars + '')" alt="stars" width="200">
            <p class="info">{{s.info}}</p>
            <form v-if="visible">
                <label for="adults">Adults:</label>
                    <select id="adults" name="adults">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                <label for="children">Children:</label>
                    <select id="children" name="children">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                <button @click.prevent="buyTickets()">Buy</button>
            </form>
            <button v-else @click="suggestButton()" class="button" type="button">Buy ticket</button>

        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "Suggestions",
    data: function() {
        return {
            visible: false
        }
    },
    props: {
        thisSugg: Array
    },
    methods: {
        suggestButton() {
            console.log("Suggest buton")
            this.visible = true
        },
        buyTickets() {
            console.log("Bought tickets")
        }
    }

}
</script>

<style scoped>
.suggestions {
    margin: auto;
    width: 60%;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    grid-auto-flow: row;
    justify-items: start;
    gap: 30px;
    padding: 10px;
}
.suggestion {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto auto;
    padding: 10px 0;
    text-align: center;
    color: #333333;
    margin: 0 auto;
    max-width: 600px;
    height: auto;
    background-color: white;

    font-weight: 700;
    padding: 1em;
    border: 1px solid #CCC;
    border-radius: 1em;
    color: black;

}

.pic {
    grid-column: 1;
    grid-row: 2;
    margin-left: 10px;
    margin-right: 10px;

}
.info {
    grid-row-start: 1;
    grid-row-end: 3;
    padding: 50px;
}
.title {
    grid-row: 1;
}
.button {
    margin-left: 50px;
    padding: 10px;
}
.stars {
    margin-left: auto;
    margin-right: auto;
}
</style>

