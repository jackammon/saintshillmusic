<template>
  <v-container>
    <AlbumRow v-for="album in albums" :key="album.id" :album="album" />
  </v-container>
</template>

<script>
import AlbumRow from '../components/AlbumRow.vue';
import dayjs from 'dayjs';
import imageUrl1 from '@/assets/family.webp'
import imageUrl2 from '@/assets/live-from-newberg.webp'
// import imageUrl3 from '@/assets/jacks-house.jpeg'

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
          albumArt: imageUrl1,
          title: "Family",
          year: 'Releasing August, 30th',
          date: '2024-08-30',
          recordingInfo: "Recorded recorded at The Woodshed (Woodman's house) in Newberg, Oregon / Produced by Michael Rabb and Greg Woodman / Mastered by Michael Rabb / Artwork by Tracy White",
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
        {
          id: 2,
          albumArt: imageUrl2,
          title: "Family: Live From Newberg",
          year: 'Releasing October 6th, 2024',
          date: '2024-08-30',
          recordingInfo: "Recorded live at the Chehalem Cultural Center / Produced and Mastered by Michael Rabb / Artwork by Tracy White",
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
        //  {
        //   id: 3,
        //   albumArt: imageUrl3,
        //   title: "Family: Live From Jack's House",
        //   year: '2024',
        //   date: '2024-08-30',
        //   recordingInfo: "Recorded live at Jack's house / Produced and Mastered by Michael Rabb / Artwork by Tracy White",
        //   credits: [
        //     "Vocals, Guitar / Jacob Vigil",
        //     "Vocals / Hannah Brown",
        //     "Vocals / Molly Onyemaobim",
        //     "Vocals, Piano / Lauren Fotenos",
        //     "Vocals / Summer Lamb",
        //     "Piano / Mary Grace Curran",
        //     "Piano, Guitar / Jack Ammon",
        //     // "Drums / Florida Man",
        //   ],
        //   location: "These songs were written and recorded in Newberg, Oregon.",
        //   urls: {
        //     spotify: null,
        //     apple: null,
        //   }
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
