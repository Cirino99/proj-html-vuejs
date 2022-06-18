<template>
    <div class="container-md">
        <nav class="d-flex justify-content-between align-items-center">
            <div class="order-online"><span class="">Order online</span></div>
            <ul>
                <li>
                    <img class="icon-svg" src="../assets/svg/svg-0.svg" alt="">
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Pages</a>
                </li>
                <li>
                    <a href="#">Menu</a>
                </li>
                <li>
                    <img src="../assets/img/h5-logo-divided-header.png" alt="">
                </li>
                <li>
                    <a href="#">Event</a>
                </li>
                <li>
                    <a href="#">Bloag</a>
                </li>
                <li>
                    <a href="#">Landing</a>
                </li>
            </ul>
            <div class="search d-flex">
                <div class="d-flex cart">
                    <span id="cart-number">0</span>
                    <img src="../assets/svg/svg-1.svg" alt="">
                    <span>Cart</span>
                </div>
                <div class="d-flex">
                    <img src="../assets/svg/svg-1.svg" alt="">
                    <span>Search</span>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'NavVue'
}
</script>

<style scoped lang="scss">
nav {
    padding-top: 25px;
    color: white;

    .order-online {
        padding: 10px 25px;
        background-color: #d2401e;
    }

    ul {
        margin-bottom: 0;

        li {
            display: inline-block;
            margin: 0 20px;

            .icon-svg {
                width: 25px;
                height: auto;
            }

            a {
                text-decoration: none;
                color: white;
            }

            img {
                width: 160px;
                height: auto;
            }
        }
    }

    .search {

        .cart {
            position: relative;

            #cart-number {
                position: absolute;
                display: flex;
                width: 15px;
                height: 15px;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                background-color: white;
                color: #d2401e;
                font-size: 10px;
                top: 0;
                left: -5px;
                margin: 0;
            }
        }

        span {
            display: flex;
            margin: 0 15px;
        }
    }
}
</style>