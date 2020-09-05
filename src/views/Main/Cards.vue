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
          body: "Implementación de una User Story",
          avatar: "mdi-vuetify",
          avatarColor: "primary darken-2",
          name: "Vuetify",
          date: "04/09/2020",
          toProject: { name: "ISW_TP6_Home" },
        },
      ],
    };
  },
};
</script>
