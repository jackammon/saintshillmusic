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
        :subtitle="link.subtitle"
        :url="link.url"
        :album-art="link.albumArt"
      />
      <div class="empty" v-if="!links.length">come back soon for new updates</div>
    </div>
  </div>
</template>

<script>
import LinkItem from '../components/LinkItem.vue';
import single1URL from '@/assets/god-is-good.webp';
import single2URL from '@/assets/come-what-may.webp';
import Link2URL from '@/assets/live-from-newberg.jpeg';
import Link3URL from '@/assets/lp_b.webp';


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
        { title: 'Purchase Live Recording Tickets', subtitle: null, url: 'https://saintshillmusic.com/events' },
        { title: 'Pre-save Single "God is Good"', subtitle: "Releasing August, 11th", url: 'https://www.spotify.com',  albumArt: single1URL },
        // { title: 'Live Recording Tickets', subtitle: null, url: 'https://www.spotify.com',  albumArt: Link2URL },
        // { title: 'Pre-save Single "Come What May"', subtitle: "Releasing August, 25th", url: 'https://www.spotify.com',  albumArt: single2URL },
        // { title: 'Pre-save Single "Come What May"', url: 'https://www.spotify.com', albumArt: "https://pbcdn1.podbean.com/imglogo/image-logo/3596575/sh_podcast_logo_2_.jpg" },
        // { title: 'Pre-save Debut Album "Family"', subtitle: "Releasing August, 30th", url: 'https://www.spotify.com', albumArt: Link3URL },
        { title: 'Pre-Order "Family" On Vinyl', url: 'https://saintshillmusic.com/merch', albumArt: Link3URL },
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
