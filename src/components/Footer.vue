<template>
    <footer class="d-flex">
        <div class="d-flex flex-column justify-content-between" id="footer-text">
            <div class="d-flex" id="footer-time">
                <div class="my-col">
                    <h5>{{ listRestaurant.title }}</h5>
                    <ul>
                        <li v-for="(restaurant, id) in listRestaurant.restaurants" :key="id">
                            {{ restaurant.via }}<br>
                            {{ restaurant.city }}<br>
                            {{ restaurant.phone }}
                        </li>
                    </ul>
                </div>
                <div class="my-col">
                    <h5>{{ listHours.title }}</h5>
                    <ul>
                        <li v-for="(hour, id) in listHours.hours" :key="id + 4">
                            <strong>{{ hour.day }}</strong><br>
                            <span v-if="hour.time === null">{{ hour.work }}</span>
                            {{ hour.time }}
                        </li>
                    </ul>
                    <span>
                        <strong>FOLLOW US:</strong>
                        <font-awesome-icon icon="fa-brands fa-twitter" class="brand" />
                        <font-awesome-icon icon="fa-brands fa-facebook-f" class="brand" />
                        <font-awesome-icon icon="fa-brands fa-instagram-square" class="brand" />
                        <font-awesome-icon icon="fa-brands fa-linkedin-in" class="brand" />
                    </span>
                </div>
                <div class="my-col">
                    <h4>
                        {{ phraseFooter }}
                    </h4>
                </div>
            </div>
            <div class="d-flex justify-content-between align-items-end" id="footer-created">
                <p>Create with &#x2764; by <span>Qode Interactive</span></p>
                <img src="../assets/img/footer-bottom-img.png" alt="">
            </div>
        </div>
        <div id="footer-img">
        </div>

    </footer>
</template>

<script>
export default {
    name: 'FooterVue',
    data() {
        return {
            listRestaurant: {
                title: 'FIND OUR RESTAURANT',
                restaurants: [
                    {
                        via: '1614 E. Bell Rd #104',
                        city: 'Salerno, AZ 85022',
                        phone: '(602) 867-1010'
                    },
                    {
                        via: '204 E. Pizzetta Tommaso',
                        city: 'Sorrento, AZ 85022',
                        phone: '(358) 867-1010'
                    },
                    {
                        via: 'Vale Puglia 54',
                        city: 'Torre Del Grego, AZ 85022',
                        phone: '(359) 867-1010'
                    },
                    {
                        via: 'Corso Itali AA',
                        city: 'Naples, AZ 85022',
                        phone: '(989) 867-1010'
                    }
                ]
            },
            listHours: {
                title: 'WORKING HOURS',
                hours: [
                    {
                        day: 'MONDAY',
                        work: 'Kitchen Closed',
                        time: null
                    },
                    {
                        day: 'TUSEDAY UNTIL FRIDAY',
                        time: '9:00-22:00'
                    },
                    {
                        day: 'SATURDAY',
                        time: 'Saturday 11am to midnight'
                    },
                    {
                        day: 'SUNDAY',
                        time: '9:00-22:00'
                    }
                ]
            },
            phraseFooter: 'THE DON PEPPE CREW FIRST AND FOREMOST VALUES AN AUTHENTIC, WELL BAKED SLICE OF PIZZA.'
        }
    }
}
</script>

<style scoped lang="scss">
@import "../assets/style/vars.scss";

footer {
    background-image: url('../assets/img/h3-rev-bckgrnd-ing.jpeg');
    height: 650px;

    #footer-text {
        width: 50%;
        padding: 0 50px;

        #footer-time {
            padding-top: 100px;
            padding-right: 60px;

            .my-col {
                width: calc(100% / 3);

                h5 {
                    color: $text7;
                    font-size: 16px;
                    font-weight: 600;
                }

                h4 {
                    color: $text1;
                    font-size: 20px;
                    font-weight: 600;
                    line-height: 35px;
                }

                strong {
                    color: $text7;
                }

                ul {
                    padding: 0;

                    li {
                        margin-top: 20px;
                        list-style-type: none;
                        color: $text8;
                        font-size: 14px;

                        span {
                            color: $text12;
                        }
                    }
                }

                .brand {
                    margin-left: 10px;
                    color: $text1;
                }
            }
        }

        #footer-created {
            padding-bottom: 50px;
            font-size: 14px;

            p {
                color: $text7;

                span {
                    color: $text9;
                }
            }
        }
    }

    #footer-img {
        width: 50%;
        height: 100%;
        background-image: url('../assets/img/footer-img-1.jpg');
        background-position: center;
    }
}
</style>