<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="image-container">
        <img src="../assets/lp_front.webp" alt="Merch 1" class="merch-image offset-1" id="merch-1"/>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="image-container">
        <img src="../assets/lp_back.webp" alt="Merch 2" class="merch-image offset-2" id="merch-2"/>
      </v-col>
      <v-col cols="12" class="image-container">
          <img src="../assets/merch.webp" alt="Merch 3" class="merch-image offset-3" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
a {
  color: black;
  text-decoration: none;
}

.merch {
  max-width: 100%;
  height: auto;
}

.merch-image {
  max-width: 95vw;
  height: auto;
  margin-bottom: 1rem;
  display: block;
}

.image-container {
  display: flex;
  justify-content: center; /* Horizontal centering */
  align-items: center;    /* Vertical centering */
  overflow: visible;      /* Ensure any overflow is shown */
  height: 100%;           /* Ensure the container takes full height */
}
.offset-1 {
    margin-left: 0px; 
  }
/* .offset-2 {
  margin-left: -150px;
} */
  .offset-3 {
  margin-left: -50px;
}


/* @media (max-width: 1300px) {
  .offset-1 {
    margin-left: 0px; 
  }
  .offset-2 {
    margin-left: -150px;
  }
    .offset-3 {
    margin-left: -60px;
  }
}

@media (max-width: 1100px) {
  .offset-1 {
    margin-left: 0px; 
  }
  .offset-2 {
    margin-left: -150px;
  }
  .offset-3 {
    margin-left: -70px;
  }
}
 @media (max-width: 900px) {
   .offset-1 {
    margin-left: 0px; 
  }
  .offset-2 {
    margin-left: -150px;
  }
  .offset-3 {
    margin-left: -80px;
  }
}  */
 @media (max-width: 700px) {
  .offset-1 {
    margin-left: -30px; 
  }
  .offset-2 {
    margin-left: -100px;
  }
  .offset-3 {
    margin-left: -50px;
  }
} 
</style>
