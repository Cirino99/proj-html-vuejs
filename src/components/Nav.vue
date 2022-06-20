<template>
    <div class="container-md">
        <nav class="d-flex justify-content-between align-items-center">
            <div class="order-online"><span class="">ORDER ONLINE</span></div>
            <ul>
                <li v-for="(item, i) in navItems" :key="i">
                    <div v-if="item.img === null">
                        <img v-if="item.icon !== null" :src="item.icon" alt="">
                        <a :href="item.link">{{ item.text }}</a>
                    </div>
                    <img v-else :src="item.img" :alt="item.text">
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
    name: 'NavVue',
    props: {
        navItems: Array
    }
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

            &:first-child {
                img {
                    width: 25px;
                    height: auto;
                }
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