<template>
  <div>
    <v-scroll-y-transition mode="out-in">
      <router-view></router-view>
    </v-scroll-y-transition>
    <UserStoryButton />
  </div>
</template>

<script>
import UserStoryButton from "@/views/ISW_TP6/UserStoryButton.vue";
export default {
  components: { UserStoryButton },
};
</script>
