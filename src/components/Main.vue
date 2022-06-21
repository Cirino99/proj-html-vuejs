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
            <img class="img-photo-people" src="../assets/img/h1-team-4a.jpg" alt="">
            <img class="img-photo-people" src="../assets/img/h1-team-3a.jpg" alt="">
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
        <!-- choose flavor -->
        <section id="choose-flavor">
            <div class="d-flex justify-content-center align-items-center choose-flavor-txt">
                <div class="d-flex flex-column text-center" id="text-choose-flavor">
                    <span>CHOOSE YOUR FLAVOR</span>
                    <h2>THE BEST PIZZA MENU IN TOWN</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit minima repellendus, nostrum, maxime
                        quaerat aliquam aperiam culpa fuga quasi, commodi sed quae officiis architecto nobis. Pariatur
                        neque
                        qui natus delectus.</p>
                </div>
                <div class="icon-absolute d-flex justify-content-center align-items-center">
                    <img class="img-icon-absolute" src="../assets/svg/svg-4.svg" alt="">
                </div>
            </div>
            <div class="d-flex justify-content-between align-items-center choose-flavor-img">
                <div class="card-pizza d-flex flex-column text-center align-items-center">
                    <img src="../assets/img/h3-product-img-1a-100x100.png" alt="">
                    <h5>BISMARK</h5>
                    <h5><span>$5.00</span> $30.00</h5>
                </div>
                <div class="card-pizza d-flex flex-column text-center align-items-center">
                    <img src="../assets/img/h3-product-img-2a-150x150.png" alt="">
                    <h5>FIORI DI ZUCCA</h5>
                    <h5>$7.00 - $50.00</h5>
                </div>
                <div class="card-pizza d-flex flex-column text-center align-items-center">
                    <img src="../assets/img/h3-product-img-6a-100x100.png" alt="">
                    <h5>VALDOSTANA</h5>
                    <h5>$55.00</h5>
                </div>
                <div class="card-pizza d-flex flex-column text-center align-items-center">
                    <img src="../assets/img/h3-product-img-4a-150x150.png" alt="">
                    <h5>PIZZA TARTUFATA</h5>
                    <h5>$45.00</h5>
                </div>
                <div class="card-pizza d-flex flex-column text-center align-items-center">
                    <img src="../assets/img/h3-product-img-5a-150x150.png" alt="">
                    <h5>FRANCESCANA</h5>
                    <h5>$25.00</h5>
                </div>
                <div class="card-pizza d-flex flex-column text-center align-items-center">
                    <img src="../assets/img/h3-product-img-3a-150x150.png" alt="">
                    <h5>CAMPAGNOLA</h5>
                    <h5>$50.00 - $95.00</h5>
                </div>
                <div id="icona-choose-flavor">
                    <img src="../assets/svg/svg-10.svg" alt="">
                </div>
            </div>
        </section>
        <!-- delish deals -->
        <section class="d-flex" id="delish-deals">
            <div class="my-col">
                <div class="d-flex flex-column justify-content-center align-items-start" id="location-deals">
                    <span>MADE WITH LOVE</span>
                    <h2>DELISH PIZZA DEALS</h2>
                    <div class="d-flex luogo-data">
                        <div class="data">
                            <p>
                                <span class="day">
                                    02
                                </span>
                                NOV
                            </p>
                        </div>
                        <div class="luogo">
                            <p>TRADITIONAL NEAPOLITAN PIES IN KYOTO PIZZA MERCATO <br>
                                <span>
                                    <font-awesome-icon class="here" icon="fa-solid fa-location-dot" />204 E. Pizzetta
                                    Tommaso
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class="d-flex luogo-data">
                        <div class="data">
                            <p>
                                <span class="day">
                                    03
                                </span>
                                NOV
                            </p>
                        </div>
                        <div class="luogo">
                            <p>TERARAZZA PATIO DINING SPACE OPENING THIS WEEKEND <br>
                                <span>
                                    <font-awesome-icon class="here" icon="fa-solid fa-location-dot" />204 E. Pizzetta
                                    Tommaso
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class="d-flex luogo-data">
                        <div class="data">
                            <p>
                                <span class="day">
                                    04
                                </span>
                                NOV
                            </p>
                        </div>
                        <div class="luogo">
                            <p>SIENNA PRIVATE DINING ROOM WITH STEPHANE BRUNN <br>
                                <span>
                                    <font-awesome-icon class="here" icon="fa-solid fa-location-dot" />204 E. Pizzetta
                                    Tommaso
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="my-col">
                <img src="../assets/img/h3-img-5a.jpg" alt="">
                <div id="icona-delish-deals">
                    <img src="../assets/svg/svg-9.svg" alt="">
                </div>
            </div>
        </section>
        <!-- book table -->
        <section class="d-flex justify-content-center align-items-center" id="book-table">
            <div class="book-detail">
                <input type="text" placeholder="1 person">
                <font-awesome-icon class="icon-book" icon="fa-solid fa-user-group" />
            </div>
            <h4>
                FOR
            </h4>
            <div class="book-detail">
                <input type="text" placeholder="11/29/2020">
                <font-awesome-icon class="icon-book" icon="fa-regular fa-calendar" />
            </div>
            <h4>
                AT
            </h4>
            <div class="book-detail">
                <input type="text" placeholder="7:00 pm">
                <font-awesome-icon class="icon-book" icon="fa-regular fa-clock" />
            </div>
            <span class="d-flex justify-content-center align-items-center" id="reserve">
                BOOK A TABLE
            </span>
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
        padding: 0 !important;

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
        min-height: 300px;
    }

    #choose-flavor {
        margin: 10px 0;

        .choose-flavor-txt {
            padding-top: 70px;
            padding-bottom: 40px;
            position: relative;

            #text-choose-flavor {
                width: 35%;

                span {
                    color: #d2401e;
                    font-size: 13px;
                    font-weight: 600;
                }

                h2 {
                    font-size: 30px;
                    font-weight: 600;
                    margin: 15px 0;
                }

                p {
                    color: #767676;
                }
            }
        }

        .choose-flavor-img {
            padding-top: 40px;
            padding-bottom: 70px;
            position: relative;

            .card-pizza {
                width: calc(100% / 6);

                img {
                    width: 240px;
                    height: auto;
                }

                h5 {
                    font-size: 18px;
                    font-weight: 600;
                    color: #b68a2c;

                    &:last-child {
                        color: #d2401e;

                        span {
                            color: #cdcdcd;
                            text-decoration: line-through;
                        }
                    }
                }
            }

            #icona-choose-flavor {
                background-color: #ee2852;
                width: 40px;
                height: 40px;
                padding: 0 !important;
                display: flex;
                justify-content: center;
                align-items: center;
                position: absolute;
                bottom: 0;
                right: 0;

                img {
                    width: 70%;
                    height: auto;
                }
            }
        }
    }

    #delish-deals {
        .my-col {
            width: 50%;
            position: relative;

            &:last-child {
                img {
                    width: 100%;
                    height: auto;
                }
            }

            #location-deals {
                position: relative;
                padding: 100px 220px;
                background-image: url('../assets/img/h3-rev-bckgrnd-ing.jpeg');

                span {
                    color: #d2401e;
                    font-size: 12px;
                }

                h2 {
                    font-weight: 700;
                    font-size: 38px;
                    color: white;
                }

                .luogo-data {
                    margin-top: 20px;
                    padding-bottom: 20px;
                    border-bottom: dotted 2px #ffa500;

                    &:last-child {
                        border-bottom: none;
                        padding-bottom: 0;
                    }

                    .data {

                        p {
                            color: white;
                            font-size: 20px;
                            margin-top: -15px;

                            .day {
                                font-weight: 600;
                                font-size: 55px;
                                color: #AB4027;
                            }
                        }
                    }

                    .luogo {
                        padding-left: 20px;

                        p {
                            color: white;
                            font-size: 20px;

                            span {
                                color: #d2401e;
                                font-size: 12px;

                                .here {
                                    margin-right: 10px;
                                }
                            }
                        }
                    }
                }
            }

            #icona-delish-deals {
                background-color: white;
                width: 40px;
                height: 40px;
                padding: 0 !important;
                display: flex;
                justify-content: center;
                align-items: center;
                position: absolute;
                top: 0;
                right: 0;

                img {
                    width: 50%;
                    height: auto;
                }
            }
        }
    }

    #book-table {
        margin: 10px 0;
        padding: 120px 0;
        background-image: url('../assets/img/h3-background-img-3.jpg');
        background-repeat: no-repeat;
        background-size: auto 100%;

        .book-detail {
            position: relative;

            input {
                padding: 15px;
                border: solid 1px black;
            }

            .icon-book {
                position: absolute;
                top: 50%;
                right: 0;
                width: 20px;
                height: auto;
                transform: translate(-50%, -50%);
                color: #ffa323;
            }
        }

        h4 {
            font-size: 18px;
            color: white;
            margin: 0 20px;
        }

        #reserve {
            height: 56px;
            width: 200px;
            background-color: #d2401e;
            font-size: 14px;
            color: white;
            margin-left: 50px;

            &:hover {
                cursor: pointer;
            }
        }
    }
}
</style>