<template>
  <v-container>
    <AlbumRow v-for="album in albums" :key="album.id" :album="album" />
  </v-container>
</template>

<script>
import AlbumRow from '../components/AlbumRow.vue';
import dayjs from 'dayjs';
import imageUrl from '@/assets/family.webp'

export default {
  components: {
    AlbumRow
  },
  mounted() {
   
  },
  data() {
    return {
      albums: [
        {
          id: 1,
          albumArt: imageUrl,
          title: "Family",
          year: '2024',
          date: '2024-08-30',
          recordingInfo: "Recorded at Greg's House / Produced and Mastered by Michael Rabb / Artwork by Tracy White",
          credits: [
            "Vocals, Guitar / Jacob Vigil",
            "Vocals / Hannah Brown",
            "Vocals / Molly Onyemaobim",
            "Vocals / Lauren Fotenos",
            "Vocals / Summer Lamb",
            "Guitar / Nick Sullivan",
            "Keys, Guitar / Jack Ammon",
            "Keys, Guitar, Bass, Drums / Michael Rabb",
            // "Drums / Florida Man",
          ],
          location: "These songs were written and recorded in Newberg, Oregon.",
          urls: {
            spotify: null,
            apple: null,
          }
        },
        // {
        //   id: 2,
        //   albumArt: 'https://pbcdn1.podbean.com/imglogo/image-logo/3596575/sh_podcast_logo_2_.jpg',
        //   title: "Family: Live From Newberg",
        //   year: 2024,
        //   date: '2024-10-06',
        //   recordingInfo: "Recorded at Greg's House / Produced and Mastered by Michael Rabb / Artwork by Tracy White",
        //   credits: "Vocals, Guitar / Nathan Stephenson\nVocals, Guitar / Stevie Lujan\nVocals, Synth / Esther Moran\nGuitar / Cameron Crew\nBass / Rei Wasserman\nDrums / Blair Mottau",
        //   location: "These songs were recorded live in Newberg, Oregon on August 31st, 2024."
        // },
      ]
    };
  },
  methods: {
     isRecordReleased(record) {
      const now = dayjs();
      const liveDate = record.date ? dayjs(record.liveDate) : null;
      const expirationDate = record.expirationDate ? dayjs(record.expirationDate) : null;
      return (!liveDate || now.isAfter(liveDate)) && (!expirationDate || now.isBefore(expirationDate));
    }
  }
};
</script>

<style scoped>
.v-container {
  padding-top: 15px;
}
</style>
