<template>
  <v-container style="min-height: 90vh; padding-top: 20px; max-width: 1200px;">
    <v-row class="header">
      <v-col style="text-align: left;">
        <h1>Family 12" Vinyl</h1>
        <h2>Pre-Order opens August 18th</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="image-container">
        <v-carousel
          cycle
          hide-delimiters
          show-arrows="hover"
          interval="5000"
        >
          <v-carousel-item
            v-for="(image, index) in images"
            :key="index"
            :src="image.src"
            :alt="image.alt"
          ></v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Link1URL from "@/assets/lp_front.webp"
import Link2URL from "@/assets/lp_back.webp"
import Link3URL from "@/assets/merch.webp"

export default {
  data() {
    return {
      images: [
        { src: Link1URL, alt: "Merch 1" },
        { src: Link2URL, alt: "Merch 2" },
        { src: Link3URL, alt: "Merch 3" },
      ],
      currentIndex: 0,
    }
  },
}
</script>

<style scoped>
a {
  color: black;
  text-decoration: none;
}

h1 {
    font-size: 6vw !important;
    line-height: 90%;
    margin-bottom: 2vw;
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

.image-container {
  display: flex;
  overflow: visible;
  height: 100%;
  width: 100%;
}

.header {
  margin-bottom: -20px; 
  margin-top: 20px;
}

@media (max-width: 700px) {
  .image-container {
    margin-bottom: 100px;
  }
  .header {
    margin-bottom: -80px; 
  }
}

@media (max-width: 960px) {
  h1 {
    font-size: 9vw !important;
    margin-bottom: 3vw;
  }

  h2 {
    font-size: 3vw !important;
  }
}
</style>
