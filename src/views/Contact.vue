<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <div class="effect">
          <div class="contact">
              <h2>You can reach me at</h2>
              <h1><a href="mailto:hello@jck.codes">&#x68;&#x65;&#x6c;&#x6c;&#x6f;&#x40;&#x6a;&#x63;&#x6b;&#x2e;&#x63;&#x6f;&#x64;&#x65;&#x73;</a></h1>
              <h1>&#x35;&#x30;&#x39;&#x2e;&#x38;&#x30;&#x38;&#x2e;&#x31;&#x32;&#x31;&#x39;</h1>
          </div>
        </div>
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
  background: #262626;
}

h1 {
    font-size: 5vw !important;
    line-height: 90%;
    margin-bottom: 1vw;
  }

h2 {
  font-style: normal;
  font-size: 1.5vw;
  line-height: 110%;
  font-weight: 500;
  margin-bottom: 2vw;
}
.contact {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Rubik' !important;
  text-transform: uppercase;
  color: black;
  letter-spacing: -.02em !important;
  text-align: left;
}

/* Responsive adjustments for tablets */
@media (max-width: 960px) {
  h1 {
    font-size: 7vw !important;
  }

  h2 {
    font-size: 2.5vw !important;
    margin-bottom: 4vw !important;
  }
}

/* Responsive adjustments for mobile phones */
@media (max-width: 480px) {
  .contact {
    top: 47%; /* adjust position slightly for better viewing */
    left: 50%;
    transform: translate(-50%, -40%);
  }
}

@media (max-width: 315px) {
  .contact {
    top: 45%; /* adjust position slightly for better viewing */
    left: 50%;
    transform: translate(-50%, -40%);
  }
}

</style>