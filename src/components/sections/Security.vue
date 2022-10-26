<template>
    <section id="security" class="section about-security section--bg">
        <div class="section__container">
            <div class="about-security__info about-info">
                <h2 class="about-info__title">{{security.title}}</h2>
                <div class="about-info__subtitle">{{security.subtitle}}</div>
            </div>
            <div class="about-security__tiles about-tiles">
                <article v-for="tile in security.tiles" class="about-tile">
                    <div :class="['about-tile__icon', `about-tile__icon--${tile.name}`]">
                        <component :is="tile.icon" />
                    </div>
                    <h3 class="about-tile__title">{{tile.title}}</h3>
                </article>
            </div>
        </div>
    </section>
</template>