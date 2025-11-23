<template>
  <v-container>
    <AlbumRow v-for="album in sortedAlbums" :key="album.id" :album="album" />
  </v-container>
</template>

<script>
import AlbumRow from '../components/AlbumRow.vue'
import { albums } from '@/composables/useAlbums'

export default {
  components: {
    AlbumRow
  },
  data() {
    return {
      albums
    }
  },
  computed: {
    sortedAlbums() {
      return [...this.albums].sort((a, b) => b.id - a.id);
    }
  }
}
</script>
