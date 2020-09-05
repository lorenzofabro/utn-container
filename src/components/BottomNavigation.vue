<template>
  <v-bottom-navigation app dark grow class="d-flex d-md-none">
    <v-btn @click="darkMode()">
      <v-icon>{{ themeIcon }}</v-icon>
    </v-btn>

    <v-btn href="https://lorenzofabro.com">
      <v-icon>mdi-web</v-icon>
    </v-btn>

    <v-btn @click="goToHome()">
      <v-icon>mdi-home</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  methods: {
    goToHome() {
      if (this.$route.path === "/") return;
      this.$router.push({ name: "Home" });
    },
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
  computed: {
    themeIcon() {
      return this.$vuetify.theme.dark
        ? "mdi-white-balance-sunny"
        : "mdi-weather-night";
    },
  },
};
</script>
