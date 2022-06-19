<template>
    <header>
        <Nav />
        <section id="jumbotron">
            <Carousel :slides="juboData" />
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
            juboData: [
                {
                    back: '../assets/img/h3-rev-img-1.png',
                    img: '../assets/img/h3-rev-img-2.png'
                },
                {
                    back: '../assets/img/h3-rev-img-3.png',
                    img: '../assets/img/h3-rev-img-4.png'
                },
                {
                    back: '../assets/img/h3-rev-img-5.png',
                    img: '../assets/img/h3-rev-img-6.png'
                }
            ]
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
