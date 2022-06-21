<template>
    <div class="d-flex justify-content-between align-items-center my-carousel">
        <div class="button-carousel prev" @click="prevSlide">
            <span>prev</span>
        </div>
        <div v-for="(slide, id) in slides" :key="id" class="slide" :class="id === active ? 'active' : ''"
            :style="{ 'background-image': `url(${slide.back})` }">
            <img v-if="slide.img" :src="slide.img" alt="">
            <div v-else class="my-text-slide d-flex flex-column justify-content-center align-items-center">
                <h2>"</h2>
                <p>
                    {{ slide.textReview }}
                    <br>
                    <span>{{ slide.textEditorial }}</span>
                </p>
                <div class="d-flex justify-content-center align-items-center">
                    <div class="circle" :class="active === 0 ? 'active' : ''"></div>
                    <div class="circle" :class="active === 1 ? 'active' : ''"></div>
                    <div class="circle" :class="active === 2 ? 'active' : ''"></div>
                </div>
            </div>
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
            active: 0
        }
    },
    methods: {
        prevSlide() {
            if (this.active === 0) {
                this.active = 2;
            } else {
                this.active--;
            }
        },
        nextSlide() {
            if (this.active === 2) {
                this.active = 0;
            } else {
                this.active++;
            }
        }
    }
}
</script>

<style scoped lang="scss">
@import "../assets/style/vars.scss";

.my-carousel {
    padding-top: 20px;

    .button-carousel {
        width: 40px;
        height: 80px;
        background-color: $background1;
        display: flex;
        align-items: center;
        justify-content: center;

        &.prev {
            border-radius: 0 40px 40px 0;
            padding-right: 10px;

            span {
                transform: rotate(90deg);
                color: $text12;
            }
        }

        &.next {
            border-radius: 40px 0 0 40px;
            padding-left: 10px;

            span {
                transform: rotate(270deg);
                color: $background16;
            }
        }

        &:hover {
            cursor: pointer;
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

        .my-text-slide {
            width: 50%;
            min-width: 700px;
            text-align: center;

            h2 {
                font-size: 150px;
                margin-bottom: 0;
                color: $text6;
            }

            p {
                font-size: 25px;
                transform: translate(0, -80px);
                font-weight: 600;

                span {
                    color: $text12;
                    font-size: 14px;
                }
            }

            .circle {
                height: 10px;
                width: 10px;
                border-radius: 50%;
                background-color: $background9;
                transform: translate(0, -100px);
                margin: 0 5px;

                &.active {
                    background-color: $background12;
                }
            }
        }
    }
}
</style>