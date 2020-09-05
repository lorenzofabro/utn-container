<template>
  <v-app-bar app dark>
    <v-toolbar-title class="title toolbarTitle" @click="goToHome()"
      >UTN</v-toolbar-title
    >
    <v-spacer></v-spacer>
    <v-btn text @click="darkMode()">{{ themeText }}</v-btn>
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
