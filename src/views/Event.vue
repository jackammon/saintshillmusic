<template>
  <v-container style="min-height: 90vh; padding-top: 20px; max-width: 1000px;">
    <v-row style="margin-bottom: -20px;">
      <v-col style="text-align: left;">
        <h1 style="margin-bottom: 20px;">Family Live Album Recording</h1>
        <h2>August 31st @ Chehalem Cultural Center</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <body style="text-align: left;">
          Join us on Saturday, August 31st, in the Chehalem Cultural Center Ballroom for the live recording of Saints’ Hill Music’s debut worship album. 
          <br><br>This is a unique opportunity to be part of a special evening where we capture the energy and spirit of live worship for the album. As this is a recording session, please be mindful that there may be brief pauses or retakes to ensure the best possible sound quality. 
          <br><br>Doors open at 6:30pm, and the recording will begin at 7pm. We look forward to worshiping together and creating something beautiful that will resonate far beyond this night.
        </body>
      </v-col>
    </v-row>
     <v-row>
      <v-col style="text-align: left; margin-top: 60px;">
        <v-btn variant="tonal" size="large" href="https://www.saintshill.church/live-album-recording" target="_blank" rel="noopener noreferrer" class="button">Get Tickets</v-btn>
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
  margin-top: 10px;
  font-family: 'Hanken Grotesk' !important;
  font-size: 15px;
}

h1 {
  font-size: 50px !important;
  line-height: 100%;
  margin-bottom: 14px !important;
  font-family: 'Hanken Grotesk' !important;
}

h2 {
  font-style: normal;
  font-size: 20px;
  line-height: 110%;
  font-weight: 500;
  margin-bottom: 20px;
  font-family: 'Hanken Grotesk' !important;
}

.button {
  font-family: 'Hanken Grotesk' !important; 
  width: 200px;
}

/* Responsive adjustments for tablets */
@media (max-width: 700px) {
  h1 {
    font-size: 9vw !important;
    margin-bottom: 4vw !important;
  }

  h2 {
    font-size: 3.75vw !important;
    margin-bottom: 9vw !important;
  }

  body {
    font-size: 3.5vw !important;
  }
  .button {
    width: 100%;
  }
}

</style>