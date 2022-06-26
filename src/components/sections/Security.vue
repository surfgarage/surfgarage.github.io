<template>
    <article class="service security">
        <header class="service__header security__header">
            <div class="service__image security__image">
                <img src="images/board-lock.jpg">
            </div>
            <h2 class="service__title">
                is my board secure?
            </h2>
        </header>
        <ul class="security__items">
            <li class="security__item">
                <div class="security__item-img">
                    <img src="images/board-lock.jpg" alt="Board Locking System"/>
                </div>
                <div class="security__item-title">
                    Lock your board using our proprietary board locking system
                </div>
            </li>

            <li class="security__item">
                <div class="security__item-img">
                    <img src="images/cameras.jpg" alt="Security Alarm"/>
                </div>
                <div class="security__item-title">
                    Security Cameras & Alarm
                </div>
            </li>

            <li class="security__item">
                <div class="security__item-img">
                    <img src="images/lock.png" alt="Smart Lock"/>
                </div>
                <div class="security__item-title">
                    Enter and Exit using a unique security code
                </div>
            </li>
        </ul>
    </article>
</template>
<style scoped lang="scss">
    .security {
        display: grid;
        grid-template-columns: 1fr 2fr;
        max-width: 1024px;
        margin: 0 auto;
        padding-bottom: 20px;
        grid-auto-rows: 1fr;

        &__image {
            z-index: 1;
        }

        &__items {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 20px;
            background-color: #fff;
            padding: 60px 30px;
            margin: 0;
            color: var(--c-board-red);
        }

        &__item {

        }

        &__item-img {
            border: 3px solid var(--c-board-red);
            border-radius: 50%;
            overflow: hidden;
            width: 160px;
            height: 160px;
            margin: 0 auto 20px;

            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        &__item-title {
            text-align: center;
        }
    }
</style>