import Vue from "vue";
import * as TSX from "vue-tsx-support";
import VuetifyMixin from "@/mixin/vuetify";

export default TSX.componentFactory.mixin(VuetifyMixin).create({
  name: "App",
  render() {
    return (
      <v-app>
        <v-app-bar app color="primary" dark>
          <div class="d-flex align-center">
            <v-img
              alt="Vuetify Logo"
              class="shrink mr-2"
              contain
              src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
              transition="scale-transition"
              width="40"
            />

            <v-img
              alt="Vuetify Name"
              class="shrink mt-1 hidden-sm-and-down"
              contain
              min-width="100"
              src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
              width="100"
            />
          </div>

          <v-spacer></v-spacer>

          <v-btn
            href="https://github.com/vuetifyjs/vuetify/releases/latest"
            target="_blank"
            text
          >
            <span class="mr-2">Latest Release</span>
            <v-icon>mdi-open-in-new</v-icon>
          </v-btn>
          <v-btn to="/about" text>
            <span class="mr-2">about</span>
            <v-icon>mdi-open-in-new</v-icon>
          </v-btn>
          <v-btn to="/" text>
            <span class="mr-2">Home</span>
            <v-icon>mdi-open-in-new</v-icon>
          </v-btn>
        </v-app-bar>

        <v-content>
          <router-view></router-view>
        </v-content>
      </v-app>
    );
  },

  data: () => ({
    //
  }),
});
