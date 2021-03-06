import Vue from "vue";
import * as TSX from "vue-tsx-support";
import { ElementAttrs } from "vue-tsx-support/types/base";
import { AnchorHTMLAttributes } from "vue-tsx-support/types/dom";
import LogoSvg from "@/components/LogoSvg";
import MyComponent from "@/components/MyComponent";
import VuetifyMixin from "@/mixin/vuetify";

export default TSX.componentFactory.mixin(VuetifyMixin).create({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      default: ""
    }
  },
  render() {
    const ecosystemList: ElementAttrs<AnchorHTMLAttributes>[] = [];
    this.ecosystem.forEach(e => {
      ecosystemList.push(
        <a key={e.href} href={e.href} class="subheading mx-3" target="_blank">
          ${e.text}
        </a>
      );
    });

    const whatsNextList: ElementAttrs<AnchorHTMLAttributes>[] = [];
    this.whatsNext.forEach((e, index) => {
      whatsNextList.push(
        <a key={e.href} href={e.href} class="subheading mx-3" target="_blank">
          ${e.text}
        </a>
      );
    });

    const importantLinksList: ElementAttrs<AnchorHTMLAttributes>[] = [];
    this.importantLinks.forEach((e, index) => {
      importantLinksList.push(
        <a key={e.href} href={e.href} class="subheading mx-3" target="_blank">
          ${e.text}
        </a>
      );
    });

    return (
      <v-container>
        <v-row class="text-center">
          <v-col cols="12">
            <MyComponent
              onOk={() => console.log("ok")}
              onError={p => console.log("ng", p.code, p.detail)}
            />
            <LogoSvg
              onClick={() => {
                this.increment();
              }}
            />
            <p>{this.counter}</p>
          </v-col>

          <v-col class="mb-4">
            <h1 class="display-2 font-weight-bold mb-3">Welcome to Vuetify</h1>

            <p class="subheading font-weight-regular">
              For help and collaboration with other Vuetify developers,
              <br />
              please join our online
              <a href="https://community.vuetifyjs.com" target="_blank">
                Discord Community
              </a>
            </p>
          </v-col>

          <v-col class="mb-5" cols="12">
            <h2 class="headline font-weight-bold mb-3">What's next?</h2>

            <v-row justify="center">{whatsNextList}</v-row>
          </v-col>

          <v-col class="mb-5" cols="12">
            <h2 class="headline font-weight-bold mb-3">Important Links</h2>

            <v-row justify="center">{importantLinksList}</v-row>
          </v-col>

          <v-col class="mb-5" cols="12">
            <h2 class="headline font-weight-bold mb-3">Ecosystem</h2>

            <v-row justify="center">{ecosystemList}</v-row>
          </v-col>
        </v-row>
      </v-container>
    );
  },
  computed: {
    counter() {
      return this.$store.direct.state.Covid19ApiStore.count;
    }
  },
  methods: {
    increment() {
      this.$store.direct.dispatch.Covid19ApiStore.increment();
    }
  },
  data: () => ({
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader"
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify"
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify"
      }
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com"
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com"
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify"
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs"
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify"
      }
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer"
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/layout/pre-defined"
      },
      {
        text: "Frequently Asked Questions",
        href: "https://vuetifyjs.com/getting-started/frequently-asked-questions"
      }
    ]
  })
});
