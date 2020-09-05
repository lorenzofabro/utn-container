<template>
  <v-app
    style="font-family: ProximaNova !important;"
    :style="{ background: $vuetify.theme.themes[theme].background }"
  >
    <AppBar />
    <v-main>
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
import AppBar from "@/components/AppBar";
import Footer from "@/components/Footer";
export default {
  components: { AppBar, Footer },
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },
};
</script>
