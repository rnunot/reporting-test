<template>
  <v-app class="app-layout">
    <v-navigation-drawer width="200" v-model="drawer" app id="app-navigation">
      <div class="d-flex justify-center pa-5">
        <v-img
          alt="App logo"
          contain
          src="@/assets/logo.png"
          width="80"
          class="shrink"
        />
      </div>

      <v-list flat nav class="text-center">
        <v-list-item-group color="grey">
          <v-list-item
            v-for="item in items"
            :key="item.routeName"
            :to="{ name: item.routeName }"
            v-slot="active"
            active-class="white--text"
          >
            <v-list-item-title class="pa-5">
              <v-icon large>{{ item.icon }}</v-icon>
              <div v-show="active">{{ item.label }}</div>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app class="hidden-lg-and-up">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>

    <v-main>
      <v-container fluid class="fill-height">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'AppLayout',

  data() {
    return {
      drawer: true,
      items: [
        {
          routeName: 'Home',
          icon: 'mdi-home',
          label: 'Home',
        },
        {
          routeName: 'Login',
          icon: 'mdi-login-variant',
          label: 'Login',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import '~vuetify/src/styles/styles.sass';

#app-navigation .theme--dark.v-list-item:not(.v-list-item--active) {
  &,
  & .v-icon {
    color: map-get($grey, base) !important;
  }
}
</style>
