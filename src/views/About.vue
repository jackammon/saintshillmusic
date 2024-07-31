<template>
  <v-containter>
    <v-row>
      <v-col :cols="mdAndUp ? 5 : 12" class="gap-right"> 
        <!-- <img src="../assets/avatar-full.jpg" alt="avatar" />  -->
      </v-col>
      <v-col :cols="mdAndUp ? 7 : 12" class="gap-left">
        <div class="content">
         
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