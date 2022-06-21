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
            <Carousel :slides="carouselData" />
            <div class="icon-absolute d-flex justify-content-center align-items-center">
                <img class="img-icon-absolute" src="../assets/svg/svg-4.svg" alt="">
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
                                $20
                            </h3>
                        </div>
                        <div class="prodotto">
                            <h3>COMBO MEZZO</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor</p>
                        </div>
                    </div>
                    <div class="d-flex">
                        <div class="prezzo">
                            <h3>
                                $30
                            </h3>
                        </div>
                        <div class="prodotto">
                            <h3>COMBO GRANDE</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor</p>
                        </div>
                    </div>
                    <div class="icon-absolute d-flex justify-content-center align-items-center">
                        <img class="img-icon-absolute" src="../assets/svg/svg-4.svg" alt="">
                    </div>
                </div>
            </div>
        </section>
        <!-- mosaic -->
        <section id="mosaico">
            <div id="mosaico-top"></div>
            <div id="mosaico-center">
                <h2>
                    GO AHEAD AND <br>
                    BUILD YOUR <br>
                    OWN PIZZA <br>
                    WE WON'T <br>
                    JUDGE! <br>
                </h2>
                <div class="icon-absolute d-flex justify-content-center align-items-center">
                    <img class="img-icon-absolute" src="../assets/svg/svg-4.svg" alt="">
                </div>
            </div>
            <div id="mosaico-bottom"></div>
        </section>
        <!-- photo people -->
        <section id="photo-people">
            <img class="img-photo-people" src="../assets/img/h1-team-1a-700x700.jpg" alt="">
            <img class="img-photo-people" src="../assets/img/h1-team-2a.jpg" alt="">
            <img class="img-photo-people" src="../assets/img/h1-team-3a.jpg" alt="">
            <img class="img-photo-people" src="../assets/img/h1-team-4a.jpg" alt="">
            <div class="icon-absolute d-flex justify-content-center align-items-center">
                <img class="img-icon-absolute" src="../assets/svg/svg-4.svg" alt="">
            </div>
        </section>
        <!-- labels -->
        <section class="d-flex justify-content-center align-items-center flex-wrap" id="labels">
            <img src="../assets/img/h1-clients-img-4.png" alt="label">
            <img src="../assets/img/h1-clients-img-3.png" alt="label">
            <img src="../assets/img/h1-clients-img-1.png" alt="label">
            <img src="../assets/img/h1-clients-img-2.png" alt="label">
            <img src="../assets/img/h1-clients-img-5.png" alt="label">
        </section>
    </main>
</template>

<script>
import Carousel from './Carousel.vue';
export default {
    name: "MainVue",
    components: { Carousel },
    data() {
        return {
            carouselData: [
                {
                    back: require('../assets/img/carousel-main.jpg'),
                    textReview: '"FORGET THE TRENDY PIZZA SHOPS, THIS HIDDEN SPOT MAKES THE BEST NEW YORK-STYLE PIZZA SLICE IN NAPLES"',
                    textEditorial: 'WASHINGTON POST 2018'
                },
                {
                    back: require('../assets/img/carousel-main.jpg'),
                    textReview: '"FORGET THE TRENDY PIZZA SHOPS, THIS HIDDEN SPOT MAKES THE BEST NEW YORK-STYLE PIZZA SLICE IN NAPLES"',
                    textEditorial: 'WASHINGTON POST 2018'
                },
                {
                    back: require('../assets/img/carousel-main.jpg'),
                    textReview: '"FORGET THE TRENDY PIZZA SHOPS, THIS HIDDEN SPOT MAKES THE BEST NEW YORK-STYLE PIZZA SLICE IN NAPLES"',
                    textEditorial: 'WASHINGTON POST 2018'
                }
            ]
        }
    }
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
        width: 40px;
        height: 40px;
        padding: 0;

        .img-icon-absolute {
            width: auto;
            height: 50%;
        }
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
        margin: 10px 0;

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

    #mosaico {

        height: 600px;

        #mosaico-top {
            background-image: url('../assets/img/h3-background-img.jpg');
            background-repeat: repeat;
            background-size: calc(100% - 300px);
            background-position: 50% 100%;
            height: 25%;
            background-attachment: local;
        }

        #mosaico-center {
            background-image: url('../assets/img/h3-background-img.jpg');
            background-repeat: repeat;
            background-size: calc(100% - 300px);
            background-position: 50% 0%;
            height: 50%;
            position: relative;

            h2 {
                font-size: 60px;
                font-weight: 600;
                color: white;
                margin-left: 20%;
                transform: translate(0, -10%);
            }
        }

        #mosaico-bottom {
            background-image: url('../assets/img/h3-background-img.jpg');
            background-repeat: repeat;
            background-size: calc(100% - 300px);
            background-position: 50% 65%;
            height: 25%;
        }
    }

    #photo-people {
        margin: 10px 0;
        position: relative;

        .img-photo-people {
            width: 25%;
            height: auto;
        }
    }

    #labels {
        background-color: #f6f7f2;
        height: 300px;
    }
}
</style>