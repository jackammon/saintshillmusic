<template>
  <v-container>
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
import Link1URL from "@/assets/lp_front.webp";
import Link2URL from "@/assets/lp_back.webp";
import Link3URL from "@/assets/merch.webp";

export default {
  data() {
    return {
      images: [
        { src: Link1URL, alt: "Merch 1" },
        { src: Link2URL, alt: "Merch 2" },
        { src: Link3URL, alt: "Merch 3" },
      ],
      currentIndex: 0,
    };
  },
};
</script>

<style scoped>
a {
  color: black;
  text-decoration: none;
}

.merch {
  /* max-width: 100%; */
  height: auto;
}

.merch-image {
  max-width: 95vw;
  height: auto;
  margin-bottom: 1rem;
  display: block;
}

.is-active {
  display: block; /* Show only the active image */
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: visible;
  height: 100%;
  width: 100%;
}

.offset-1 {
  margin-left: 0px;
}

.offset-3 {
  margin-left: 0px;
}


@media (max-width: 700px) {
  /* Show only one image at a time on mobile */
  .image-container {
    margin-bottom: 100px;
  }
  .merch-image {
    max-width: 100vw;
  }

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
