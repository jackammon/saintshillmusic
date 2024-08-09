<template>
  <v-container>
    <div class="video-background">
      <video autoplay muted loop playsinline>
        <source src="@/assets/landing.mp4" type="video/mp4">
      </video>
      <!-- Overlay to prevent interaction -->
      <div class="video-overlay"></div>
    </div>
    <v-row class="text-center">
      <div class="title">
        <div class="title-word" ref="textElement">
        <img src="../assets/logo_white.png" alt="Saints' Hill Music" class="landing-img"/>
          </div>
      </div>
    </v-row>
  </v-container>
</template>

<script> 
// import { ref, onMounted } from 'vue';
// import gsap from 'gsap';
// import { TextPlugin } from 'gsap/TextPlugin';
// import dayjs from 'dayjs';

// export default {
  // setup() {
    // const textElement = ref(null);
    // const texts = [
    //   { text: "Debut Album \"Family\" Out August 30th", liveDate: null, expirationDate: '2024-08-31' },
    //   { text: "Debut Album \"Family\" Out Now ", liveDate: '2024-08-31', expirationDate: null },
    //   { text: "Live Recording August 31st", liveDate: null, expirationDate: '2024-08-31' },
    //   { text: "See you there :)", liveDate: null, expirationDate: '2024-08-31' },
    //   { text: "\"Family: Live From Newberg\" Out October 6th", liveDate: '2024-08-31', expirationDate: '2024-10-06' },
    //   { text: "\"Family: Live From Newberg\" Out Now", liveDate: '2024-10-06', expirationDate: null },
    //   { text: "Saints' Hill Music", liveDate: null, expirationDate: null },
    // ];
    // let currentText = 0;

    // function isTextValid(textObj) {
    //   const now = dayjs();
    //   const liveDate = textObj.liveDate ? dayjs(textObj.liveDate) : null;
    //   const expirationDate = textObj.expirationDate ? dayjs(textObj.expirationDate) : null;
    //   return (!liveDate || now.isAfter(liveDate)) && (!expirationDate || now.isBefore(expirationDate));
    // }

    // function getFilteredTexts() {
    //   return texts.filter(isTextValid);
    // }

    // function animateText(filteredTexts) {
    //   // Animation logic here...
    // }

    // onMounted(() => {
    //   gsap.registerPlugin(TextPlugin);
    //   const filteredTexts = getFilteredTexts();
    //   if (filteredTexts.length > 0) {
    //     animateText(filteredTexts); // Start the animation loop with filtered texts
    //   }
    // });

    // return {
    //   textElement
    // };
  // },
// }
</script>

<style scoped>
.landing-img {
  width: 80%;
}

body, html {
  margin: 0;
  height: 100%;
  overflow: hidden; /* Hide the scrollbars */
}

.video-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0; /* Ensure the video is behind other content */
  overflow: hidden;
}

.video-background video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
  object-fit: cover; /* Ensures the video covers the entire background */
  pointer-events: none; /* Prevent video from being clickable */
}

/* Overlay to prevent interaction */
.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1; /* Place above the video */
  pointer-events: none; /* Ensure the overlay itself isn't clickable */
}

.title {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 5.75vw;
  line-height: 1.1em;
  color: white; /* Change to white or any color that contrasts well with the video */
  text-align: center;
  letter-spacing: -.025em !important;
}

/* Responsive adjustments for tablets */
@media (max-width: 768px) {
  .title {
    font-size: 4em;
  }
}

/* Responsive adjustments for mobile phones */
@media (max-width: 480px) {
  .title {
    font-size: 3em;
    top: 40%; /* adjust position slightly for better viewing */
    left: 50%;
    transform: translate(-50%, -40%);
  }
}
</style>
