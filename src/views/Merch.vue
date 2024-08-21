<template>
  <v-container style="min-height: 90vh; padding-top: 20px; max-width: 1200px;">
    <v-row class="header">
      <v-col style="text-align: left;">
        <h1>Family 12" Vinyl</h1>
        <h2>Pre-Order Now</h2>
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
    <v-row>
       <body style="text-align: left;">
          <p>Pre-order the debut album "Family" from Saints' Hill Music. This limited release will only be available for a single run, so be sure to secure your copy before pre-orders close on September 22nd. Once pre-orders have closed, the vinyls will be pressed and delivered to you. </p>
          <br>
          <p>Title: Family </p>
          <p>Artist: Saints' Hill Music </p>
          <p>Format: 12” Vinyl (180 gram)</p>
          <p>Release Date:&nbsp;August 30, 2024</p>
          <br>
          <p>Tracklist:</p>
          <br>
          <p>01) Look To The Cross</p>
          <p>02) Heaviness</p>
          <p>03) God Is Good (YHWH)</p>
          <p>04) Living Word</p>
          <p>05) Family</p>
          <p>06) Home</p>
          <p>07) Come What May</p>
          <p>08) To Know You</p>
          <p>09) Holy Communion</p>
          <p>10) IWYLTD</p>
          <p>11) Reprise</p>
          <p>12) 70x7</p>
          <br>

          <p>This product is currently on pre-order with an expected ship date of November 2024. Date subject to change.</p>
        </body>
    </v-row>
    <v-row>
      <v-col style="text-align: left; margin-top: 20px;">
        <v-btn color="#0054ff" variant="flat" size="large" href="https://store.saintshillmusic.com/products/family-vinyl" target="_blank" rel="noopener noreferrer" class="button">Purchase</v-btn>
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

.button {
  font-family: 'Hanken Grotesk' !important; 
  width: 200px;
}

@media (max-width: 700px) {
  .header {
    margin-bottom: -80px; 
  }
  .button {
    width: 100%;
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
