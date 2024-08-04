<template>
  <v-container>
    <v-row class="text-center">
      <div class="title">
        <div class="title-word" ref="textElement"></div>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import dayjs from 'dayjs';

export default {
  setup() {
    const textElement = ref(null);
    const texts = [
      { text: "Saints' Hill Music", liveDate: null, expirationDate: null },
      { text: "Debut Album \"Family\" Out August 30th", liveDate: null, expirationDate: '2024-08-31' },
      { text: "Debut Album \"Family\" Out Now ", liveDate: '2024-08-31', expirationDate: null },
      { text: "Live Recording August 31st", liveDate: null, expirationDate: '2024-08-31' },
      { text: "See you there :)", liveDate: null, expirationDate: '2024-08-31' },
      { text: "\"Family: Live From Newberg\" Out October 6th", liveDate: '2024-08-31', expirationDate: null },
    ];
    let currentText = 0;

    function isTextValid(textObj) {
      const now = dayjs();
      const liveDate = textObj.liveDate ? dayjs(textObj.liveDate) : null;
      const expirationDate = textObj.expirationDate ? dayjs(textObj.expirationDate) : null;
      return (!liveDate || now.isAfter(liveDate)) && (!expirationDate || now.isBefore(expirationDate));
    }

    function getFilteredTexts() {
      return texts.filter(isTextValid);
    }

    function animateText(filteredTexts) {
      if (currentText >= filteredTexts.length) currentText = 0; // Loop back to the first text
      gsap.to(textElement.value, {
        duration: 2.5,
        text: filteredTexts[currentText].text,
        onComplete: () => {
          // Wait some time before starting the next animation
          gsap.to(textElement.value, { delay: 2.5, onComplete: () => animateText(filteredTexts) });
        }
      });
      currentText++;
    }

    onMounted(() => {
      gsap.registerPlugin(TextPlugin);
      const filteredTexts = getFilteredTexts();
      if (filteredTexts.length > 0) {
        animateText(filteredTexts); // Start the animation loop with filtered texts
      }
    });

    return {
      textElement
    };
  },
}
</script>

<style scoped>
body {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  height: 100vh; /* ensures that the body takes full viewport height */
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
  color: black;
  text-align: left;
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
    /* font-size: 4em; */
    top: 40%; /* adjust position slightly for better viewing */
    left: 50%;
    transform: translate(-50%, -40%);
  }
}

@media (max-width: 320px) {
  .title {
    font-size: 3em;
    top: 40%; /* adjust position slightly for better viewing */
    left: 50%;
    transform: translate(-50%, -40%);
  }
}
</style>
