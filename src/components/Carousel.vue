<template>
    <div class="d-flex justify-content-between align-items-center">
        <div class="button-carousel prev">
            <span>prev</span>
        </div>
        <div class="slide">
            <img src="../assets/img/h3-rev-img-2.png" alt="">
        </div>
        <div class="button-carousel next">
            <span>next</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CarouselVue'
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
        background-image: url('../assets/img/h3-rev-img-1.png');
        width: 100%;
        display: flex;
        background-repeat: no-repeat;
        background-position: center;
        justify-content: center;
    }
}
</style>