<template>
        <header class="navigation">
            <nav>
                <ul>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#services">Services</a></li>
                    <li class="site-logo"><Logo class="site-logo__svg"/> </li>
                    <li><a href="#prices">Prices</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
</template>

<style scoped lang="scss">
    .navigation {
        display: none;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        font-family: "Metalsmith";

        ul {
            list-style: none;
            display: flex;
            font-size: 20px;
            justify-content: center;
            align-items: center;
            margin: 0;

            li {
                padding: 10px 50px;
            }

            a {
                color: #fff;
            }
        }
        @include respond-to("tablet-large") {
            display: block;
        }
    }

    .site-logo {
        padding: 0 30px;

        &__svg {
            width: 200px;
            height: 200px;
        }
    }

</style>