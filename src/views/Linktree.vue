<template>
  <div class="linktree-container">
    <div class="header">
      <!-- <img :src="profileImage" alt="Profile Image" class="profile-image" /> -->
      <h1 class="artist-name">{{ artistName }}</h1>
      <div class="social-links">
        <a href="https://open.spotify.com/artist/artist_id" target="_blank" class="social-link">
          <i class="fab fa-spotify"></i>
        </a>
        <a href="https://music.apple.com/us/artist/artist_id" target="_blank" class="social-link">
          <i class="fab fa-apple"></i>
        </a>
        <a href="https://www.youtube.com/channel/channel_id" target="_blank" class="social-link">
          <i class="fab fa-youtube"></i>
        </a>
      </div>
    </div>
    <div class="links">
      <LinkItem
        v-for="(link, index) in links"
        :key="index"
        :title="link.title"
        :url="link.url"
        :album-art="link.albumArt"
      />
      <div class="empty" v-if="!links.length">come back soon for new updates</div>
    </div>
  </div>
</template>

<script>
import LinkItem from '../components/LinkItem.vue';
import single1URL from '@/assets/god-is-good.jpeg';
import single2URL from '@/assets/come-what-may.jpeg';

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
        { title: 'Pre-save Single "God is Good"', url: 'https://www.spotify.com',  albumArt: single1URL },
        // { title: 'Pre-save Single "A Holy Communion"', url: 'https://www.spotify.com', albumArt: "https://pbcdn1.podbean.com/imglogo/image-logo/3596575/sh_podcast_logo_2_.jpg" },
        // { title: 'Pre-Order "Family" On Vinyl', url: 'https://www.spotify.com', albumArt: 'https://pbcdn1.podbean.com/imglogo/image-logo/3596575/sh_podcast_logo_2_.jpg' },
        // { title: 'Pre-save Debut Album "Family"', url: 'https://www.spotify.com', albumArt: 'https://pbcdn1.podbean.com/imglogo/image-logo/3596575/sh_podcast_logo_2_.jpg' },
      ],
    };
  },
};
</script>

<style scoped>
.linktree-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-height: 100vh;
}

.header {
  text-align: center;
  margin-bottom: 20px;
}

.profile-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.artist-name {
  font-size: 24px;
  font-weight: bold;
}

.social-links {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.social-link {
  margin: 0 10px;
  font-size: 24px;
  color: #000;
}

.links {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
}

.link-item {
  margin: 10px 0;
}

.empty {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Rubik' !important;
  text-transform: uppercase;
  color: black;
  letter-spacing: -.02em !important;
  text-align: left;
}
</style>
