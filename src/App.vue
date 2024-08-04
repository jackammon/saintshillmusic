<template>
  <v-app id="app">
    <v-app-bar
      flat
      color="rgba(0, 0, 0, 0.0)"
      class="nav"
      style="padding-right: 15px;"
    >
      <div class="jck-size logo" @click="toHome" :style="!drawer ? 'color: black' : 'color: #fffdf9 !important'">
        <img v-if="!drawer" src="./assets/logo-black.png" alt="Saints' Hill Music" class="header-img"/> 
        <img v-if="drawer" src="./assets/logo-white.png" alt="Saints' Hill Music" class="header-img"/> 
      </div>
      <v-spacer style="width: 80%"></v-spacer>

      <v-btn icon variant="plain" class="hidden-md-and-up" @click="drawer = !drawer" :color="!drawer ? 'black' : '#fffdf9'">
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
      Saints' Hill Music 
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

  </v-app>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import NavDrawer from './components/NavDrawer.vue';
import { useRouter } from 'vue-router'

const drawer = ref(false);
const router = useRouter();

function toHome() {
  drawer.value = false
  router.push('/');
}

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

.header {
  
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
  padding-top: 5px;
  cursor: pointer;
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

.header-img {
  width: 48px;
  height: 48px;
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
