<template>
  <v-app style="font-family: ProximaNova !important">
    <v-app-bar app>
      <v-toolbar-title class="title">UTN PROJECTS</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon href="https://lorenzofabro.com" target="_blank">
        <v-icon>mdi-home</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main class="mt-5">
      <v-scroll-y-transition mode="out-in">
        <router-view></router-view>
      </v-scroll-y-transition>
    </v-main>

    <Footer />
  </v-app>
</template>

<style>
@font-face {
  font-family: "ProximaNova";
  src: url("~@/assets/ProximaNova-Regular.otf");
}
</style>

<script>
import Footer from "./views/Footer";
export default {
  name: "App",
  components: { Footer },
};
</script>
