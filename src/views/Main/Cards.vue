<template>
  <v-container>
    <v-row>
      <v-col v-for="(i, key) in items" v-bind:key="key">
        <Card
          :icon="i.icon"
          :title="i.title"
          :color="i.color"
          :body="i.body"
          :avatar="i.avatar"
          :avatarColor="i.avatarColor"
          :name="i.name"
          :date="i.date"
          :toProject="i.toProject"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Card from "@/components/Card";
export default {
  components: { Card },
  data() {
    return {
      items: [
        {
          icon: "mdi-file-code",
          title: "ISW - TP6",
          color: "primary",
          body: "User story implementation",
          avatar: "mdi-vuetify",
          avatarColor: "primary darken-2",
          name: "Vuetify",
          date: "2020",
          toProject: { name: "ISW_TP6_Home" },
        },
        {
          icon: "mdi-file-code",
          title: "AED - TP3",
          color: "purple darken-2",
          body: "NASA's Software",
          avatar: "mdi-language-python",
          avatarColor: "purple darken-4",
          name: "Python",
          date: "2015",
          toProject: { name: "AED_TP3_Home" },
        },
        {
          icon: "mdi-file-code",
          title: "AED - TP2",
          color: "pink darken-2",
          body: "Python Games",
          avatar: "mdi-language-python",
          avatarColor: "pink darken-4",
          name: "Python",
          date: "2015",
          toProject: { name: "AED_TP2_Home" },
        },
        {
          icon: "mdi-file-code",
          title: "AED - TP1",
          color: "orange darken-2",
          body: "Point Game",
          avatar: "mdi-language-python",
          avatarColor: "orange darken-4",
          name: "Python",
          date: "2015",
          toProject: { name: "AED_TP1_Home" },
        },
      ],
    };
  },
};
</script>
