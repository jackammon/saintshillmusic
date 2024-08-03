<template>
  <v-containter>
    <v-row>
      <v-col :cols="mdAndUp ? 5 : 12" class="gap-right"> 
        <!-- <img src="../assets/avatar-full.jpg" alt="avatar" />  -->
      </v-col>
      <v-col :cols="mdAndUp ? 7 : 12" class="gap-left">
        <div class="content">
          Coming Soon
        </div> 
      </v-col> 
    </v-row>
  </v-containter>
</template>

<script>
import { useDisplay } from 'vuetify'

export default {
  setup () {
    const { mdAndUp } = useDisplay();
    return { mdAndUp, experienceYearsInWords };
  }
}
</script>

<style scoped>
img {
  width: 100%;
  height: auto;
}

h2 {
  font-style: normal;
  font-size: 2.5vw;
  line-height: 110%;
  letter-spacing: .02em;
  text-transform: uppercase;
  font-weight: 500;
}

.content {
  max-width: 1000px;
}

.v-row {
  padding-top: 15px !important;
}

@media (min-width: 960px) {
  .gap-right {
    padding-right: 2vw;
  }
  .gap-left {
    padding-left: 2vw;
  }

  h1 {
    font-size: 6vw !important;
    line-height: 90%;
    letter-spacing: -.02em;
    margin-bottom: 2vw;
  }
}

@media (max-width: 960px) {
  h1 {
    font-size: 8vw !important;
    line-height: 90%;
    letter-spacing: -.02em;
    margin-bottom: 2vw;
  }
}
</style>