<template>
  <v-container>
    <v-row>
      <v-col style="text-align: left;">
        <h1 style="margin-bottom: 15px;">Family Live Album Recording</h1>
        <h2 style="margin-bottom: 30px;">August 31st @ Chehalem Cultural Center</h2>
      </v-col>
    </v-row>
    <v-row style="margin-bottom: 60px;">
      <v-col  style="text-align: left;">
        <v-btn variant="tonal" size="large" href="https://www.saintshill.church/live-album-recording" target="_blank" rel="noopener noreferrer" style="font-family: 'Hanken Grotesk' !important;">Get Tickets</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <body style="text-align: left;">
        Join us on Saturday, August 31st in the Chehalem Cultural Center Ballroom for the live recording of Saints’ Hill Music’s debut worship album.
        Doors open at 6:30pm and the recording will begin at 7pm.
        </body>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

a {
  color: black;
  text-decoration: none;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Hanken Grotesk' !important;
}

h1 {
    font-size: 6vw !important;
    line-height: 90%;
    margin-bottom: 1vw;
    font-family: 'Hanken Grotesk' !important;
  }

h2 {
  font-style: normal;
  font-size: 1.5vw;
  line-height: 110%;
  font-weight: 500;
  margin-bottom: 2vw;
  font-family: 'Hanken Grotesk' !important;
}

/* Responsive adjustments for tablets */
@media (max-width: 960px) {
  h1 {
    font-size: 9vw !important;
  }

  h2 {
    font-size: 2.5vw !important;
    margin-bottom: 4vw !important;
  }

  body {
    font-size: 3vw !important;
  }
}

</style>