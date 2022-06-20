<template>
    <main>
        <!-- phrases img -->
        <section class="d-flex" id="phrases-pizza">
            <div>
                <img src="../assets/img/h3-img-1.jpg" alt="">
            </div>
            <div>
                <img src="../assets/img/h3-img-2.jpg" alt="">
            </div>
            <div>
                <img src="../assets/img/h3-img-3.jpg" alt="">
            </div>
            <div>
                <img src="../assets/img/h3-img-4.jpg" alt="">
            </div>
        </section>
        <!-- carosello -->
        <section id="carousel">
            <Carousel />
            <div class="icon-absolute d-flex justify-content-center align-items-center">
                <img src="../assets/svg/svg-4.svg" alt="">
            </div>
        </section>
        <!-- special -->
        <section class="d-flex" id="specials">
            <div class="my-col d-flex justify-content-center align-items-center">
                <img src="../assets/img/h1-img-7n.png" alt="">
            </div>
            <div class="my-col">
                <div class="d-flex flex-column justify-content-center align-items-start" id="special-menu">
                    <h2>SPECIALS</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, eveniet quae nam</p>
                    <div class="d-flex">
                        <div>
                            <h3 class="prezzo">
                                $10
                            </h3>
                        </div>
                        <div class="prodotto">
                            <h3>COMBO PICCOLO</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor</p>
                        </div>
                    </div>
                    <div class="d-flex">
                        <div class="prezzo">
                            <h3>
                                $10
                            </h3>
                        </div>
                        <div class="prodotto">
                            <h3>COMBO PICCOLO</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor</p>
                        </div>
                    </div>
                    <div class="d-flex">
                        <div class="prezzo">
                            <h3>
                                $10
                            </h3>
                        </div>
                        <div class="prodotto">
                            <h3>COMBO PICCOLO</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor</p>
                        </div>
                    </div>
                    <div class="icon-absolute d-flex justify-content-center align-items-center">
                        <img src="../assets/svg/svg-4.svg" alt="">
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import Carousel from './Carousel.vue';
export default {
    name: "MainVue",
    components: { Carousel }
}
</script>

<style scoped lang="scss">
main {
    .icon-absolute {
        position: absolute;
        bottom: 20px;
        right: 20px;
        background-color: #f6f7f2;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        padding: 0;
    }

    #phrases-pizza {

        div {
            width: 25%;
            padding: 10px 5px;

            &:first-child {
                padding-left: 0;
            }

            &:last-child {
                padding-right: 0;
            }

            img {
                width: 100%;
                height: auto;
            }
        }
    }

    #carousel {
        background-color: #f6f7f2;
        position: relative;
    }

    #specials {

        .my-col {
            width: 50%;
            padding: 150px 0;

            &:first-child {
                background-image: url('../assets/img/h1-img-4.jpg');
            }

            #special-menu {
                position: relative;
                padding: 0 220px;

                h2 {
                    font-weight: 700;
                    font-size: 38px;
                }

                p {
                    color: #858585;
                    margin-bottom: 20px;
                }

                div {
                    .prezzo {
                        color: #AB4027;
                    }

                    h3 {
                        font-weight: 600;
                        font-size: 22px;
                    }

                    .prodotto {
                        padding-left: 20px;

                        p {
                            color: #8F8F8F;
                        }
                    }
                }
            }
        }
    }
}
</style>