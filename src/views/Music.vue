<template>
  <v-container>
    <AlbumRow v-for="album in albums" :key="album.id" :album="album" />
  </v-container>
</template>

<script>
import AlbumRow from '../components/AlbumRow.vue'
import dayjs from 'dayjs'
import imageUrl1 from '@/assets/family.webp'
import single1URL from '@/assets/god-is-good.webp'
import imageUrl2 from '@/assets/live-from-newberg.webp'
import imageUrl3 from '@/assets/ahc.webp'
import imageUrl4 from '@/assets/come-what-may.webp'

export default {
  components: {
    AlbumRow
  },
  data() {
    return {
      albums: [
        {
          id: 1,
          albumArt: single1URL,
          title: "God Is Good (YHWH) • Single",
          year: 'Released August, 10th',
          date: '2024-08-30',
          // recordingInfo: "Recorded recorded at The Woodshed (Woodman's house) in Newberg, Oregon / Produced by Michael Rabb and Gregory Woodman / Mastered by Michael Rabb / Artwork by Tracy White",
          // credits: [
          //   "Vocals, Guitar / Jacob Vigil",
          //   "Vocals / Hannah Brown",
          //   "Vocals / Molly Onyemaobim",
          //   "Vocals / Lauren Fotenos",
          //   "Vocals / Summer Lamb",
          //   "Guitar / Nick Sullivan",
          //   "Keys, Guitar / Jack Ammon",
          //   "Keys, Guitar, Bass, Drums / Michael Rabb",
          // ],
          // location: "These songs were written and recorded in Newberg, Oregon.",
          spotify: 'https://open.spotify.com/album/0cjHRLHO4KElvDPNo4icU6',
          apple: null,
        },
        {
          id: 2,
          albumArt: imageUrl3,
          title: "Holy Communion • Single",
          year: 'Released August, 17th',
          date: '2024-08-30',
          // recordingInfo: "Recorded recorded at The Woodshed (Woodman's house) in Newberg, Oregon / Produced by Michael Rabb and Gregory Woodman / Mastered by Michael Rabb / Artwork by Tracy White",
          // credits: [
          //   "Vocals, Guitar / Jacob Vigil",
          //   "Vocals / Hannah Brown",
          //   "Vocals / Molly Onyemaobim",
          //   "Vocals / Lauren Fotenos",
          //   "Vocals / Summer Lamb",
          //   "Guitar / Nick Sullivan",
          //   "Keys, Guitar / Jack Ammon",
          //   "Keys, Guitar, Bass, Drums / Michael Rabb",
          // ],
          // location: "These songs were written and recorded in Newberg, Oregon.",
          spotify: 'https://open.spotify.com/track/6qZfz1MRjQvjPyLcw8KPOk?si=ef4e5705a5794381',
          // apple: null,
        },
        {
          id: 3,
          albumArt: imageUrl4,
          title: "Come What May • Single",
          year: 'Releasing August, 23th',
          date: '2024-08-30',
          // recordingInfo: "Recorded recorded at The Woodshed (Woodman's house) in Newberg, Oregon / Produced by Michael Rabb and Gregory Woodman / Mastered by Michael Rabb / Artwork by Tracy White",
          // credits: [
          //   "Vocals, Guitar / Jacob Vigil",
          //   "Vocals / Hannah Brown",
          //   "Vocals / Molly Onyemaobim",
          //   "Vocals / Lauren Fotenos",
          //   "Vocals / Summer Lamb",
          //   "Guitar / Nick Sullivan",
          //   "Keys, Guitar / Jack Ammon",
          //   "Keys, Guitar, Bass, Drums / Michael Rabb",
          // ],
          // location: "These songs were written and recorded in Newberg, Oregon.",
          // spotify: 'https://open.spotify.com/album/0cjHRLHO4KElvDPNo4icU6',
          // apple: null,
        },
        {
          id: 4,
          albumArt: imageUrl1,
          title: "Family",
          year: 'Releasing August, 30th',
          date: '2024-08-30',
           tracklist: [
            'Look To The Cross',
            'Heaviness',
            'God Is Good (YHWH)',
            'Living Word',
            'Family',
            'Home',
            'Come What May',
            'To Know You',
            'Holy Communion',
            'IWYLTD',
            'Reprise',
            '70x7'
          ],
          // recordingInfo: "Recorded recorded at The Woodshed (Woodman's house) in Newberg, Oregon / Produced by Michael Rabb and Gregory Woodman / Mastered by Michael Rabb / Artwork by Tracy White",
          // credits: [
          //   "Vocals, Guitar / Jacob Vigil",
          //   "Vocals / Hannah Brown",
          //   "Vocals / Molly Onyemaobim",
          //   "Vocals / Lauren Fotenos",
          //   "Vocals / Summer Lamb",
          //   "Guitar / Nick Sullivan",
          //   "Keys, Guitar / Jack Ammon",
          //   "Keys, Guitar, Bass, Drums / Michael Rabb",
          // ],
          // location: "These songs were written and recorded in Newberg, Oregon.",
          // spotify: null,
          // apple: null,
        },
        {
          id: 5,
          albumArt: imageUrl2,
          title: "Family: Live From Newberg",
          year: 'Releasing October 6th, 2024',
          date: '2024-08-30',
          tracklist: ['TBA'],
          // recordingInfo: "Recorded live at the Chehalem Cultural Center / Produced and Mastered by Michael Rabb / Artwork by Tracy White",
          // credits: [
          //   "Vocals, Guitar / Jacob Vigil",
          //   "Vocals / Hannah Brown",
          //   "Vocals / Molly Onyemaobim",
          //   "Vocals / Lauren Fotenos",
          //   "Vocals / Summer Lamb",
          //   "Guitar / Nick Sullivan",
          //   "Keys, Guitar / Jack Ammon",
          //   "Keys, Guitar, Bass, Drums / Michael Rabb",
          // ],
          // location: "These songs were written and recorded in Newberg, Oregon.",
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
    }
  }
}
</script>
