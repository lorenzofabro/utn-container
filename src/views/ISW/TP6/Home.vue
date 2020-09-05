<template>
  <div>
    <h1 class="text-center mt-2">
      <span
        class="text--darken-2"
        :class="{ 'yellow--text': $vuetify.theme.dark }"
        >DELIVERY</span
      ><span
        :class="{
          'yellow--text': $vuetify.theme.dark,
          'text--lighten-2': $vuetify.theme.dark,
          'grey--text': !$vuetify.theme.dark,
          'text--darken-2': !$vuetify.theme.dark,
        }"
        >EAT</span
      >🍔
    </h1>
    <v-scroll-y-transition mode="out-in">
      <router-view></router-view>
    </v-scroll-y-transition>
    <UserStoryButton />
  </div>
</template>

<script>
import UserStoryButton from "@/views/ISW/TP6/UserStoryButton.vue";
export default {
  components: { UserStoryButton },
};
</script>
