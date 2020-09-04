<template>
  <v-card
    class="mx-auto"
    :color="color"
    max-width="400"
    :href="linkToProject"
    target="_blank"
  >
    <v-card-title>
      <v-icon large left>
        {{ icon }}
      </v-icon>
      <span class="title font-weight-light">{{ title }}</span>
    </v-card-title>

    <v-card-text class="headline font-weight-bold">
      {{ body }}
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar :color="avatarColor">
          <v-icon>{{ avatar }}</v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ name }}</v-list-item-title>
        </v-list-item-content>

        <v-row align="center" justify="end">
          <v-icon class="mr-1">mdi-calendar-range</v-icon>
          <span class="subheading mr-2">{{ date }}</span>
        </v-row>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: [
    "color",
    "icon",
    "title",
    "body",
    "name",
    "avatar",
    "date",
    "avatarColor",
    "linkToProject",
  ],
};
</script>
