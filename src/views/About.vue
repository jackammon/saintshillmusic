<template>
  <v-containter>
    <v-row>
      <v-col :cols="mdAndUp ? 5 : 12" class="gap-right"> 
        <img src="../assets/avatar-full.jpg" alt="avatar" /> 
      </v-col>
      <v-col :cols="mdAndUp ? 7 : 12" class="gap-left">
        <div class="content">
          <h1 class="text-left">Jack Ammon</h1> 
          <h2 class="text-left mb-10">Product Focused Software Engineer</h2>

          <p class="text-left mb-7">With over {{experienceYearsInWords}} years of experience, I specialize in building and maintaining software products. After earning a B.S. in Computer Science from George Fox University, I joined a small custom software firm where I contributed to the development of more than half a dozen software products. Working at a smaller company offered me the opportunity to wear multiple hats and make significant contributions to our projects. I worked directly with clients translating their ideas to reality. I then joined Webconnex, where I am currently on the payments team working on their core platform maintaining and improving their products.</p>

          <p class="text-left mb-7">I have experience writing code across various tech stacks, developing custom tools, integrating third-party services, and setting up CI/CD pipelines. Additionally, I have managed infrastructure on AWS and Azure, and configured servers for both development and production environments.</p>

          <p class="text-left mb-7">I am passionate about the human side of technology and desire to build products that improve the lives of users. I value well-designed products that are built to last and be reused.</p>
        </div> 
      </v-col> 
    </v-row>
  </v-containter>
</template>

<script>
import { useDisplay } from 'vuetify'

function numberToWords(num) {
  const words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];
  return words[num] || num.toString();
}

function calculateExperienceYears(startDate) {
  const start = new Date(startDate);
  const now = new Date();
  const diff = now.getFullYear() - start.getFullYear();
  const m = now.getMonth() - start.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < start.getDate())) {
    return diff - 1;
  }
  return diff;
}

export default {
  setup () {
    const { mdAndUp } = useDisplay();
    
    const startDate = new Date('2019-04-01');
    const experienceYears = calculateExperienceYears(startDate);
    const experienceYearsInWords = numberToWords(experienceYears);

    return { mdAndUp, experienceYearsInWords };
  }
}
</script>

<style scoped>
img {
  width: 100%;
  height: auto;
}

h2 {
  font-style: normal;
  font-size: 2.5vw;
  line-height: 110%;
  letter-spacing: .02em;
  text-transform: uppercase;
  font-weight: 500;
}

.content {
  max-width: 1000px;
}

.v-row {
  padding-top: 15px !important;
}

@media (min-width: 960px) {
  .gap-right {
    padding-right: 2vw;
  }
  .gap-left {
    padding-left: 2vw;
  }

  h1 {
    font-size: 6vw !important;
    line-height: 90%;
    letter-spacing: -.02em;
    margin-bottom: 2vw;
  }
}

@media (max-width: 960px) {
  h1 {
    font-size: 8vw !important;
    line-height: 90%;
    letter-spacing: -.02em;
    margin-bottom: 2vw;
  }
}
</style>