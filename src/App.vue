<template>
    <div id="app">
        <Header />
        <Main />
        <Footer />
    </div>
</template>

<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';


export default {
    name: 'App',
    components: {
        Header,
        Main,
        Footer
    }
}
</script>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#app {
    font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
