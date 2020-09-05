import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true,
        themes: {
            light: {
                background: "#EBEBEB"
            },
            dark: {
                background: "#000000"
            }
        },
    },
});
