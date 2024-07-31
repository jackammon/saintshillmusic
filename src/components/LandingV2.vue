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

export default {
  setup() {
    const textElement = ref(null);
    const texts = [
      "Hello,<br>I'm Jack Ammon",
      "Welcome to my slice of the internet",
      "I build things designed to last",
      "I build things that help people",
      "I build cool things",
      "jck.codes",
    ];
    let currentText = 0;

    function animateText() {
      if (currentText >= texts.length) currentText = 0; // Loop back to the first text
      gsap.to(textElement.value, {
        duration: 2,
        text: texts[currentText],
        onComplete: () => {
          // Wait some time before starting the next animation
          gsap.to(textElement.value, { delay: 2.5, onComplete: animateText });
        }
      });
      currentText++;
    }

    onMounted(() => {
      gsap.registerPlugin(TextPlugin);
      animateText(); // Start the animation loop
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