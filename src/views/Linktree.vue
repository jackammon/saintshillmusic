<template>
  <div class="linktree-container">
    <div class="header">
      <!-- <img :src="profileImage" alt="Profile Image" class="profile-image" /> -->
      <h1 class="artist-name">{{ artistName }}</h1>
      <div class="social-links">
        <a href="https://open.spotify.com/artist/7zVhbvqRXFzIdF28uXV09A" target="_blank" class="social-link">
          <i class="fab fa-spotify"></i>
        </a>
        <a href="https://music.apple.com/us/artist/saints-hill-music/1761954685" target="_blank" class="social-link">
          <i class="fab fa-apple"></i>
        </a>
        <a href="https://www.youtube.com/@SaintsHillMusic" target="_blank" class="social-link">
          <i class="fab fa-youtube"></i>
        </a>
        <a href="https://music.amazon.com/artists/B0DCNKV7WG/saints'-hill-music" target="_blank" class="social-link">
          <i class="fab fa-amazon"></i>
        </a>
      </div>
    </div>
    <div class="links">
      <LinkItem
        v-for="(link, index) in links"
        :key="index"
        :title="link.title"
        :subtitle="link.subtitle"
        :url="link.url"
        :album-art="link.albumArt"
        :open-in-new-tab="link.openInNewTab"
      />
      <div class="empty" v-if="!links.length">come back soon for new updates</div>
    </div>
  <div style="width: 100%; max-width: 400px; ">
    <iframe style="border-radius:12px; margin-top: 10px !important" src="https://open.spotify.com/embed/album/3CgJsslbNCB2vhOAf28gtT?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  </div>
  </div>
</template>

<script>
import LinkItem from '../components/LinkItem.vue'
// import single1URL from '@/assets/god-is-good.webp'
// import single2URL from '@/assets/come-what-may.webp'
// import Link2URL from '@/assets/live-from-newberg.webp'
// import Link3URL from '@/assets/lp_front.webp'


export default {
  name: 'LinktreeLandingPage',
  components: {
    LinkItem,
  },
  data() {
    return {
      profileImage: 'path/to/your/profile-image.jpg',
      artistName: 'SAINTS\' HILL MUSIC',
      links: [
        { title: 'Order "Family" On Vinyl', url: 'https://store.saintshillmusic.com/products/family-vinyl', color: '#0054ff', openInNewTab: true, },
      ],
    }
  },
}
</script>

<style scoped>
.linktree-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 90vh;
}

.header {
  text-align: center;
  margin-bottom: 20px;
}

/* .profile-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
} */

.artist-name {
  font-size: 35px;
  font-weight: bold;
}

.social-links {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.social-link {
  margin: 0 10px;
  font-size: 30px;
  color: #000;
}

.links {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  min-width: none;
}

.link-item {
  margin: 10px 0;
}

.empty {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Hanken Grotesk' !important;
  text-transform: uppercase;
  color: black;
  letter-spacing: -.02em !important;
  text-align: left;
}
</style>
