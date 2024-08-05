<template>
  <v-row class="album-row">
    <v-col :cols="mdAndUp ? 5 : 12" class="gap-right"> 
      <img v-if="album.albumArt" :src="album.albumArt" alt="Album Art" />
    </v-col>
    <v-col :cols="mdAndUp ? 7 : 12" class="gap-left">
      <div class="content">
        <h2 class="release-title">{{ album.title }}</h2>
        <p class="release-year">{{ album.year }}</p>
        <p class="release-info">{{ album.recordingInfo }}</p><br>
        <div class="release-credits">
          <p v-for="(credit, index) in album.credits" :key="index">{{ credit }}</p>
        </div>
        <p class="release-location">{{ album.location }}</p>
        <div class="buttons" v-if="album.urls">
          <v-btn variant="flat" disabled size="large" rounded="0" color="black" style="margin-right: 10px;"> {{isRecordReleased(album) ? 'BUY' : 'PRE-ORDER'}}</v-btn>
          <v-btn variant="flat" disabled size="large" rounded="0" color="black">{{isRecordReleased(album) ? 'BUY' : 'PRE-SAVE'}}</v-btn>
        </div>
      </div>
    </v-col> 
  </v-row>
</template>

<script>
import { useDisplay } from 'vuetify';
import dayjs from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';

dayjs.extend(isSameOrAfter);

export default {
  name: 'AlbumRow',
  props: {
    album: {
      type: Object,
      required: true
    }
  },
  setup () {
    const { mdAndUp } = useDisplay();

    const isRecordReleased = (record) => {
      const now = dayjs();
      const releaseDate = record.date ? dayjs(record.date) : null;
      return releaseDate && now.isSameOrAfter(releaseDate);
    };

    return { mdAndUp, isRecordReleased };
  }
}
</script>

<style scoped>
.album-row {
  padding-top: 15px;
}

img {
  width: 100%;
  height: auto;
}

h2 {
  font-size: 1.5rem;
  font-weight: 500;
}

.release-title {
  margin-bottom: 0px !important;
  font-weight: 500;
}

.release-year {
  margin-bottom: 15px;
  font-weight: 500;
}

.release-info {
  margin-bottom: 0px;
  font-size: .6em;
  font-family: monospace;
}

.release-credits {
  margin-bottom: 15px;
  font-size: .6em;
  font-family: monospace;
}

.release-location {
  margin-bottom: 30px;
  font-size: .6em;
  font-family: monospace;
}

.release-status {
  margin-bottom: 15px;
  font-weight: 700;
  color: green;
}

.content {
  max-width: 1000px;
  text-align: left;
}

.buttons {
  margin-top: 1rem;
}

.buttons v-btn {
  margin-right: 1rem;
}

@media (min-width: 960px) {
  .gap-right {
    padding-right: 2vw;
  }
  .gap-left {
    padding-left: 2vw;
  }
}

@media (max-width: 960px) {
  .gap-right, .gap-left {
    padding: 0;
  }
  .content {
    text-align: center;
    margin-top: 15px;
  }
}
</style>
