<template>
    <nav class="d-flex justify-content-between align-items-center">
        <div class="order-online"><span class="">Order online</span></div>
        <ul>
            <li>
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
            <span>Cart</span>
            <span>Search</span>
        </div>
    </nav>
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
        span {
            display: flex;
            margin: 0 15px;
        }
    }
}
</style>