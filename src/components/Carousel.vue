<template>
    <div class="d-flex justify-content-between align-items-center">
        <div class="button-carousel prev" @click="prevSlide">
            <span>prev</span>
        </div>
        <!-- <div v-for="(slide, id) in slides" :key="id" class="slide" :class="id === 0 ? 'active' : ''"
            :style="{ 'background-image': `url(${slide.back})` }">
            <img :src="require(slide.img)" alt="">
        </div> -->
        <div class="slide slide1" :class="active === 1 ? 'active' : ''">
            <img src="../assets/img/h3-rev-img-2.png" alt="">
        </div>
        <div class="slide slide2" :class="active === 2 ? 'active' : ''">
            <img src="../assets/img/h3-rev-img-4.png" alt="">
        </div>
        <div class="slide slide3" :class="active === 3 ? 'active' : ''">
            <img src="../assets/img/h3-rev-img-6.png" alt="">
        </div>
        <div class="button-carousel next" @click="nextSlide">
            <span>next</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CarouselVue',
    props: {
        slides: Array
    },
    data() {
        return {
            active: 1
        }
    },
    methods: {
        prevSlide() {
            if (this.active === 1) {
                this.active = 3;
            } else {
                this.active--;
            }
        },
        nextSlide() {
            if (this.active === 3) {
                this.active = 1;
            } else {
                this.active++;
            }
        }
    }
}
</script>

<style scoped lang="scss">
div {
    margin-top: 20px;

    .button-carousel {
        width: 40px;
        height: 80px;
        background-color: white;
        color: #d2401e;
        display: flex;
        align-items: center;
        justify-content: center;

        &.prev {
            border-radius: 0 40px 40px 0;
            padding-right: 10px;

            span {
                transform: rotate(90deg);
            }
        }

        &.next {
            border-radius: 40px 0 0 40px;
            padding-left: 10px;

            span {
                transform: rotate(270deg);
            }
        }
    }

    .slide {
        width: 100%;
        background-repeat: no-repeat;
        background-position: center;
        justify-content: center;
        display: none;
        height: 480px;

        &.slide1 {
            background-image: url('../assets/img/h3-rev-img-1.png');
        }

        &.slide2 {
            background-image: url('../assets/img/h3-rev-img-3.png');
        }

        &.slide3 {
            background-image: url('../assets/img/h3-rev-img-5.png');
        }

        &.active {
            display: flex;
        }
    }
}
</style>