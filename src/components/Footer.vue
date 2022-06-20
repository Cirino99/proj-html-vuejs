<template>
    <footer class="d-flex">
        <div class="d-flex flex-column justify-content-between" id="footer-text">
            <div class="d-flex" id="footer-time">
                <div class="my-col">
                    <h5>FIND OUR RESTAURANT</h5>
                    <ul>
                        <li>
                            1614 E. Bell Rd #104 <br>
                            Salerno, AZ 85022 <br>
                            (602) 867-1010
                        </li>
                        <li>
                            204 E. Pizzetta Tommaso <br>
                            Sorrento, AZ 85022 <br>
                            (358) 867-1010
                        </li>
                        <li>
                            Vale Puglia 54 <br>
                            Torre Del Grego, AZ 85022 <br>
                            (359) 867-1010
                        </li>
                        <li>
                            Corso Itali AA <br>
                            Naples, AZ 85022 <br>
                            (989) 867-1010
                        </li>
                    </ul>
                </div>


                <div class="my-col">
                    <h5>FIND OUR RESTAURANT</h5>
                    <ul>
                        <li>
                            <strong>MONDAY</strong><br>
                            <span>Kitchen Closed</span>
                        </li>
                        <li>
                            <strong>TUSEDAY UNTIL FRIDAY</strong><br>
                            9:00-22:00
                        </li>
                        <li>
                            <strong>SATURDAY</strong><br>
                            Saturday 11am to midnight
                        </li>
                        <li>
                            <strong>SUNDAY</strong><br>
                            9:00-22:00
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
                        THE DON PEPPE CREW FIRST AND FOREMOST VALUES AN AUTHENTIC, WELL BAKED SLICE OF PIZZA.
                    </h4>

                </div>
            </div>
            <div class="d-flex justify-content-between align-items-end" id="footer-created">
                <p>Create with &#x2764; by <span>Qode Interactive</span></p>
                <!-- img mancante -->
                <!-- <img src="../assets/svg/svg-3.svg" alt=""> -->
            </div>
        </div>
        <div id="footer-img">
        </div>

    </footer>
</template>

<script>
export default {
    name: 'FooterVue'
}
</script>

<style scoped lang="scss">
footer {
    background-color: black;
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
                    color: #B68A2C;
                    font-size: 16px;
                    font-weight: 600;
                }

                h4 {
                    color: white;
                    font-size: 20px;
                    font-weight: 600;
                    line-height: 35px;
                }

                strong {
                    color: #B68A2C;
                }

                ul {
                    padding: 0;

                    li {
                        margin-top: 20px;
                        list-style-type: none;
                        color: #8f8f8f;
                        font-size: 14px;

                        span {
                            color: #D2401E;
                        }
                    }
                }

                .brand {
                    margin-left: 10px;
                    color: white;
                }
            }
        }

        #footer-created {
            padding-bottom: 50px;
            font-size: 14px;

            p {
                color: #B68A2C;

                span {
                    color: #339966;
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