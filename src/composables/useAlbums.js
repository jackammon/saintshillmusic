import imageUrl1 from '@/assets/family.webp'
import imageUrl2 from '@/assets/live-from-newberg.webp'
import imageUrl3 from '@/assets/unto_us.jpeg'

export const albums = [
  {
    id: 1,
    albumArt: imageUrl1,
    title: "Family",
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
    spotify: 'https://open.spotify.com/album/3CgJsslbNCB2vhOAf28gtT?si=x9NHcISJRXWL57Noo0ZQUQ',
  },
  {
    id: 2,
    albumArt: imageUrl2,
    title: "Family: Live From Newberg",
    date: '2025-03-28',
    tracklist: [
      'Look To The Cross - Live',
      'We Belong To Him - Live',
      'God Is Good (YHWH) - Live',
      'Legacy - Live',
      'Come What May - Live',
      'Family - Live',
      'Home - Live',
      'Holy Communion - Live',
      'To Know You - Live',
      'IWYLTD - Live',
      'Heaviness - Live'
    ],
    recordingInfo: "Written and recorded live in Newberg, Oregon / Produced by Michael Rabb and Gregory Woodman / Mastered by Michael Rabb / Artwork by Tracy White",
    spotify: 'https://open.spotify.com/album/49GIZappb71K3JBlsCZQpP?si=JdUFFullQ9q-eq8SH2c2zw',
    urls: {
      spotify: null,
      apple: null,
    }
  },
  {
    id: 3,
    albumArt: imageUrl3,
    title: "Forever and Ever (Emmanuel)",
    date: '2025-11-28',
    tracklist: [
      'Forever and Ever (Emmanuel)',
      'Forever and Ever (Emmanuel) [voice memo]'
    ],
    credits: [],
    spotify: 'https://open.spotify.com/album/3yDYcVwkCxu9msaF1RcsB8?si=PvgDcR33QNuUwiLmZjxQLw',
    urls: {
      spotify: 'https://open.spotify.com/album/3yDYcVwkCxu9msaF1RcsB8?si=PvgDcR33QNuUwiLmZjxQLw',
      apple: null,
    }
  },
];

export function useAlbums() {
  return { albums };
}
