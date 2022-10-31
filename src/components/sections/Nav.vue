<script setup>
    import Logo from '@/assets/images/logo.svg'
</script>

<template>
    <header class="navigation">
        <nav>
            <ul>
                <li><a href="#about">{{ $t('nav.about') }}</a></li>
                <li><a href="#services">{{ $t('nav.services') }}</a></li>
                <li class="site-logo"><Logo class="site-logo__svg"/> </li>
                <li><a href="#pricing">{{ $t('nav.pricing') }}</a></li>
                <li><a href="#contact">{{ $t('nav.contact') }}</a></li>
            </ul>
        </nav>
    </header>
</template>

<style scoped lang="scss">
    .navigation {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        font-family: var(--font-metalsmith);

        ul {
            list-style: none;
            display: flex;
            font-size: 20px;
            justify-content: center;
            align-items: center;
            margin: 0;

            li {
                padding: 10px 50px;
                display: none;

                &.site-logo {
                    display: block;
                }

                @include respond-to("tablet-large") {
                    display: block;
                }
            }

            a {
                color: #fff;
            }
        }
    }

    .site-logo {
        padding: 0 30px;

        &__svg {
            width: 220px;
            /*height: 220px;*/
        }
    }

</style>