<template>
  <v-container class="content-offset">
    <v-row>
      <v-col cols="12">
        <img src="../assets/lp_b.webp" alt="Merch 1" class="merch-image" id="merch-1"/>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <img src="../assets/lp_c.webp" alt="Merch 2" class="merch-image overlap-image" id="merch-2"/>
      </v-col>
      <v-col cols="12">
        <!-- <img src="../assets/merch3.webp" alt="Merch 3" class="merch-image"/> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
a {
  color: black;
  text-decoration: none;
}

.content-offset {
  margin-top: -200px;
}

.merch {
  max-width: 100%;
  height: auto;
}

.merch-image {
  max-width: 95vw;
  height: auto;
  margin-bottom: 1rem;
}

.overlap-image {
  margin-top: -450px; 
  z-index: 10;
   
}

@media (max-width: 1300px) {
 .overlap-image {
    margin-top: -350px; 
    z-index: 10; 
  }
  .content-offset {
    margin-top: -100px;
  }
}

@media (max-width: 1100px) {
 .overlap-image {
    margin-top: -350px; 
    z-index: 10; 
  }
  .content-offset {
    margin-top: -100px;
  }
}
 @media (max-width: 900px) {
 .overlap-image {
    margin-top: -300px; 
    z-index: 10; 
  }
}
 @media (max-width: 700px) {
 .overlap-image {
    margin-top: -150px; 
    z-index: 10; 
  }
    .content-offset {
    margin-top: -50px;
  }
}
</style>
