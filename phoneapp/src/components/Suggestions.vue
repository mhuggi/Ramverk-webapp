<template>
<div>
        <h1>Suggestions</h1>

    <div class="suggestions">
        <div id="suggestion">
            <h3>Helsinki senate square</h3>
            <img class="pic" src="../assets/senate.jpg" alt="senatesquare" width="300">
            <p class="info">The Senate Square presents Carl Ludvig Engel's architecture as a unique allegory of political, religious, scientific and commercial powers in the centre of Helsinki, Finland.</p>


        </div>

    </div>
</div>
</template>

<style scoped>
.suggestion {
    display: grid;
    grid-template-columns: 350px 600px;
    grid-template-rows: 350px 350px;
    grid-auto-flow: column;
    justify-items: start;
}
.pic {
    grid-column: 1;
    grid-row: 1;
}
.info {
    grid-column: 2;
    grid-row: 2;
}
</style>