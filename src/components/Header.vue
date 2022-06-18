<template>
    <header>
        <Nav />
        <section id="jumbotron">
            <Carousel />
        </section>
    </header>
</template>

<script>
import Nav from './Nav.vue';
import Carousel from './Carousel.vue';
export default {
    name: "HeaderVue",
    components: { Nav, Carousel },
    data() {
        return {
            navItem: [
                {
                    text: '',
                    icon: '',
                    img: null
                },
                {
                    text: '',
                    icon: null,
                    img: null
                },
                {
                    text: '',
                    icon: null,
                    img: null
                },
                {
                    text: null,
                    icon: null,
                    img: ''
                },
                {
                    text: '',
                    icon: null,
                    img: null
                },
                {
                    text: '',
                    icon: null,
                    img: null
                },
                {
                    text: '',
                    icon: null,
                    img: null
                }
            ],
            jubotron: []

        }

    }
}
</script>

<style scoped lang="scss">
header {
    background-color: black;
    height: 700px;
}
</style>
