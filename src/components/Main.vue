<template>
    <main>
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
    </main>
</template>

<script>
export default {
    name: 'MainVue'
}
</script>

<style scoped lang="scss">
main {
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
}
</style>