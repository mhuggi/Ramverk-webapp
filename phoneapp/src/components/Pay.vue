<template>
    <div>
        <h1>Pay here</h1>
        <p>Your trip from {{params.start}} to {{params.dest}}</p>
        <button type="button">Pay here</button>
    </div>
</template>

<script>
export default {
    props: {
        params: Object,
    }

}
</script>