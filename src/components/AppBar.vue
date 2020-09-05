<template>
  <v-app-bar app dark>
    <v-btn icon @click="goBack()"><v-icon>mdi-chevron-left</v-icon></v-btn>
    <v-toolbar-title
      class="title toolbarTitle"
      @click="goToHome()"
      v-if="$vuetify.breakpoint.smAndUp"
      >UTN 🎓</v-toolbar-title
    >
    <v-spacer v-if="$vuetify.breakpoint.smAndUp"></v-spacer>
    <v-btn text @click="darkMode()">{{ themeText }}</v-btn>
    <v-btn text href="https://lorenzofabro.com" target="_blank">
      WEB 💻
    </v-btn>
    <v-btn text @click="goToHome()">
      HOME 🏠
    </v-btn>
  </v-app-bar>
</template>

<style>
.toolbarTitle:hover {
  cursor: pointer;
}
</style>

<script>
export default {
  methods: {
    goBack() {
      if (this.$route.path === "/") return;
      this.$router.back();
    },
    goToHome() {
      if (this.$route.path === "/") return;
      this.$router.push({ name: "Home" });
    },
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
  computed: {
    themeText() {
      return this.$vuetify.theme.dark ? "light up! 💡" : "switch off 🌙";
    },
  },
};
</script>
