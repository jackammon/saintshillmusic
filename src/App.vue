<template>
  <v-app id="app">
    <v-app-bar
      absolute
      flat
      color="rgba(0, 0, 0, 0.0)"
      class="nav"
      style="padding-right: 15px;"
    >
      <v-tabs
        background-color="transparent"
        color="black"
        grow
        hide-slider
        v-model="currentTab"
      >
        <v-tab class="jck-size logo" to="/" variant="text" @click="drawer = false" :style="!drawer ? 'color: black' : 'color: #fffdf9 !important'">JCK</v-tab>
        <v-spacer style="width: 80%"></v-spacer>
      </v-tabs>

      <v-btn icon variant="plain" class="hidden-md-and-up" @click="drawer = !drawer" :color="!drawer ? 'black' : '#fffdf9'" style="left: 4px;">
        <v-icon>{{drawer ? 'mdi-close' : 'mdi-menu'}}</v-icon>
      </v-btn>

      <v-btn
          class="btn-size hidden-sm-and-down"
          :prepend-icon="drawer ? 'mdi-close' : 'mdi-menu'"
          variant="text"
          @click="drawer = !drawer" 
          :color="!drawer ? 'black' : '#fffdf9'"
          border
          style="margin-top: 3px;"
        >
        MENU
        </v-btn>
    </v-app-bar>

    <NavDrawer :isOpen="drawer" @update:isOpen="drawer = $event" />

    <!-- floating nav footer -->
    <div v-if="drawer" class="floating-footer">
      jck.codes 
    </div>

    <v-main class="pa-0 fill-height">
      <v-container class="fill-height app-padding" fluid style="padding-top: 56px;">
        <v-row align="center" justify="center">
          <v-col class="text-center">
            <router-view/>  
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-btn
      icon
      variant="plain"
      size="large"
      :color="!drawer ? 'black' : '#fffdf9'"
      href="http://www.linkedin.com/in/jackammon"
      target="_blank"
      class="ma-2"
      location="bottom end"
      position="fixed"
      style="z-index: 9999 !important;"
    >
      <v-icon size="large">mdi-linkedin</v-icon>
    </v-btn>

  </v-app>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import NavDrawer from './components/NavDrawer.vue';

const drawer = ref(false);

onMounted(() => {
  console.log("Hi there 👋");
  console.log("I built this website using Vue3, Vuetify, Vite, and GSAP");
  console.log("If you'd like to get in contact with me, my information is found under the contact page");
  console.log("Thanks for stopping by!");
});
</script>

<style lang="scss">
#app {
  font-family: 'Rubik', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  background-color: #fffdf9 !important;
}

.btn-size {
  font-size: 12pt !important;
  font-weight: 700 !important;
  letter-spacing: -.02em !important;
}

.jck-size {
  font-size: 20pt !important;
  font-weight: 700 !important;
  font-family: 'Rubik Mono One';
  letter-spacing: -2.755pt !important;
}

.logo {
  text-align: left;
  justify-content: start !important;
  position: absolute;
  padding-left: 21px !important;
}

.app-padding {
  padding-left: 25px !important;
  padding-right: 25px !important;
}

.floating-footer {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  padding: 24px 25px;
  color: #fffdf9;
  text-transform: uppercase;
  font-family: 'Rubik';
}

@media (max-width: 960px) {
  .btn-size {
    font-size: 16pt !important;
  }

  .jck-size {
    text-align: left !important;
    justify-content: flex-start !important;
  }
}

</style>
