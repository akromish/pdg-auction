import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            primary: '#7b1443',
            secondary: '#143344',
            accent: '#133243',
            error: '#b71c1c',
        },
    },
});
