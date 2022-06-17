<template>
    <header>
        <div class="container-md">
            <Nav />
        </div>
    </header>
</template>

<script>
import Nav from './Nav.vue';
export default {
    name: "HeaderVue",
    components: { Nav }
}
</script>

<style scoped lang="scss">
header {
    background-color: black;
    height: 500px;
}
</style>
