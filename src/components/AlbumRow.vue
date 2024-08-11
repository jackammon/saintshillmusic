<template>
  <v-row class="album-row">
    <v-col :cols="mdAndUp ? 5 : 12" class="gap-right"> 
      <img v-if="album.albumArt" :src="album.albumArt" alt="Album Art" class="minimal-shadow" />
    </v-col>
    <v-col :cols="mdAndUp ? 7 : 12" class="gap-left">
      <div class="content">
        <h2 v-if="album.title" class="release-title">{{ album.title }}</h2>
        <p v-if="album.year" class="release-year">{{ album.year }}</p>
        <p v-if="album.recordingInfo" class="release-info">{{ album.recordingInfo }}</p><br>
        <div v-if="album.credits" class="release-credits">
          <p v-for="(credit, index) in album.credits" :key="index">{{ credit }}</p>
        </div>
        <div v-if="album.tracklist" class="release-credits">
          -- Tracklist --
          <p v-for="(track, index) in album.tracklist" :key="index">{{ track }}</p>
        </div>
        <p v-if="album.location" class="release-location">{{ album.location }}</p>
        <div class="buttons">
          <v-btn v-if="album.spotify" :href="album.spotify" variant="flat" size="large" rounded="0" color="black" style="margin-right: 10px;"> Listen Now </v-btn>
          <v-btn v-if="album.apple" :href="album.apple" variant="flat" size="large" rounded="0" color="black">Listen Now</v-btn>
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

.content {
  max-width: 1000px;
  text-align: left;
}

.buttons {
  /* margin-top: 1rem; */
}

.buttons v-btn {
  margin-right: 1rem;
}

.minimal-shadow {
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12);
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

  .album-row {
  margin-bottom: 30px;
}
}
</style>
