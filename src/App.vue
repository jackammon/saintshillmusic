<template>
  <v-app id="app">
    <v-app-bar
      flat
      color="rgba(0, 0, 0, 0.0)"
      class="nav"
    >
      <!-- <v-btn v-if="isHome && !drawer" variant="plain" class="hidden-sm-and-down" :color="buttonColor" to='/music'>Music</v-btn>
      <v-btn v-if="isHome && !drawer" variant="plain" class="hidden-sm-and-down" :color="buttonColor" to='/events' >Events</v-btn>
      <v-btn v-if="isHome && !drawer" variant="plain" class="hidden-sm-and-down" :color="buttonColor" to='/links' >Links</v-btn> -->
      <v-spacer style="width: 100%"></v-spacer>

      <v-btn icon size="x-large" :ripple="false" variant="plain" class="hidden-md-and-up" @click="drawer = !drawer" :color="buttonColor">
        <v-icon>{{drawer ? 'mdi-close' : 'mdi-menu'}}</v-icon>
      </v-btn>

      <v-btn icon size="x-large" :ripple="false" variant="plain" class="hidden-sm-and-down" @click="drawer = !drawer" :color="buttonColor" style="margin-top: 3px;">
        <v-icon size="40">{{drawer ? 'mdi-close' : 'mdi-menu'}}</v-icon>
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
import { ref, computed, onMounted } from 'vue'
import NavDrawer from './components/NavDrawer.vue'
import { useRouter, useRoute } from 'vue-router'

const drawer = ref(false)
const router = useRouter()
const route = useRoute()

const buttonColor = computed(() => {
  // Check if the current route is the home page
  const isHomePage = route.path === '/'
  return isHomePage ? 'white' : (drawer.value ? '#e9e9e9' : 'black')
})

const isHome = computed(() => {
   return route.path === '/'
})

function toHome() {
  drawer.value = false
  router.push('/')
}

</script>


<style lang="scss">
#app {
  font-family: 'Hanken Grotesk', 'serif';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  background-color: #e9e9e9 !important;
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
  color: #e9e9e9;
  text-transform: uppercase;
  font-family: 'Rubik';
}

.header-img {
  width: 60px;
}

.menu-padding {
  margin-right: 15px !important;
}
</style>
