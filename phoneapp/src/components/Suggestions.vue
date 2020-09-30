<template>
<div>
        <h1>Suggestions</h1>

    <div class="suggestions">
        <div class="suggestion">
            <h3 class="title">Helsinki senate square</h3>
            <img class="pic" src="../assets/senate.jpg" alt="senatesquare" width="300">
            <img class="stars" src="../assets/stars.png" alt="stars" width="200">
            <p class="info">The Senate Square presents Carl Ludvig Engel's architecture as a unique allegory of political, religious, scientific and commercial powers in the centre of Helsinki, Finland.</p>
            <button class="button" type="button">Buy ticket</button>

        </div>
        <div class="suggestion">
            <h3 class="title">Helsinki senate square</h3>
            <img class="pic" src="../assets/senate.jpg" alt="senatesquare" width="300">
            <img class="stars" src="../assets/stars.png" alt="stars" width="200">
            <p class="info">The Senate Square presents Carl Ludvig Engel's architecture as a unique allegory of political, religious, scientific and commercial powers in the centre of Helsinki, Finland.</p>
            
            <button class="button" type="button">Buy ticket</button>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "Suggestions",
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
    background-color: white;
    text-align: center;
    color: #333333;
    font-weight: 700;
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

