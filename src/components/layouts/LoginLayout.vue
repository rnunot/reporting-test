<template>
  <v-app>
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="10" sm="6" md="4">
            <v-row align="center" justify="center">
              <v-img
                alt="App logo"
                contain
                src="@/assets/logo.png"
                width="150"
                class="shrink mb-5"
              />
            </v-row>

            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'LoginLayout',
};
</script>

<style></style>
