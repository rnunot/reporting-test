<template>
  <v-form @submit.prevent="$router.push({ name: 'Home' })">
    <v-text-field
      label="login"
      name="login"
      type="text"
      background-color="#25292F"
      flat
      solo
    />

    <v-text-field
      id="password"
      label="password"
      name="password"
      type="password"
      background-color="#25292F"
      flat
      solo
    />

    <v-btn color="primary" type="submit">Login</v-btn>
  </v-form>
</template>
