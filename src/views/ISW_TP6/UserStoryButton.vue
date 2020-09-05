<template>
  <div>
    <v-dialog v-model="dialogInfo" max-width="1024px">
      <v-card outlined>
        <v-img :src="userStory" shrink></v-img>
      </v-card>
    </v-dialog>
    <v-speed-dial
      v-model="fab"
      bottom
      right
      fixed
      class="mb-16"
      direction="top"
    >
      <template v-slot:activator>
        <v-btn v-model="fab" color="blue darken-2" dark fab>
          <v-icon v-if="fab">mdi-close</v-icon>
          <v-icon v-else>mdi-arrow-up</v-icon>
        </v-btn>
      </template>
      <v-btn fab dark small color="yellow darken-3" @click="dialogInfo = true">
        <v-icon>mdi-information</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="pink darken-2"
        v-if="actualRoute"
        @click="$router.go($router.currentRoute)"
      >
        <v-icon>mdi-cart</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="grey darken-2"
        v-if="!actualRoute"
        @click="goToCart"
      >
        <v-icon>mdi-home</v-icon>
      </v-btn>
    </v-speed-dial>
  </div>
</template>

<script>
import UserStory from "@/assets/ISW_TP6/userstory.png";
export default {
  data() {
    return {
      userStory: UserStory,
      dialogInfo: false,
      fab: false,
    };
  },

  methods: {
    goToCart() {
      this.$router.push({ name: "ISW_TP6_Home" });
    },
  },

  computed: {
    actualRoute() {
      return this.$route.path === "/isw/tp6/";
    },
  },
};
</script>
