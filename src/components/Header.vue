<template>
    <header>
        <Nav :navItems="navLink" />
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
            navLink: [
                {
                    icon: require('../assets/svg/svg-0.svg'),
                    text: 'HOME',
                    link: '#',
                    img: null
                },
                {
                    icon: null,
                    text: 'PAGES',
                    link: '#',
                    img: null
                },
                {
                    icon: null,
                    text: 'MENU',
                    link: '#',
                    img: null
                },
                {
                    icon: null,
                    text: 'logo',
                    link: null,
                    img: require('../assets/img/h5-logo-divided-header.png')
                },
                {
                    icon: null,
                    text: 'EVENT',
                    link: '#',
                    img: null
                },
                {
                    icon: null,
                    text: 'BLOG',
                    link: '#',
                    img: null
                },
                {
                    icon: null,
                    text: 'LANDING',
                    link: '#',
                    img: null
                }

            ],
            juboData: [
                {
                    back: require('../assets/img/h3-rev-img-1.png'),
                    img: require('../assets/img/h3-rev-img-2.png')
                },
                {
                    back: require('../assets/img/h3-rev-img-3.png'),
                    img: require('../assets/img/h3-rev-img-4.png')
                },
                {
                    back: require('../assets/img/h3-rev-img-5.png'),
                    img: require('../assets/img/h3-rev-img-6.png')
                }
            ]
        }
    }
}
</script>

<style scoped lang="scss">
header {
    background-image: url('../assets/img/h3-rev-bckgrnd-ing.jpeg');
    height: 700px;
}
</style>
