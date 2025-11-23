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
      <!-- <LinkItem
        v-for="(link, index) in links"
        :key="index"
        :title="link.title"
        :subtitle="link.subtitle"
        :url="link.url"
        :album-art="link.albumArt"
        :open-in-new-tab="link.openInNewTab"
      /> -->
      <!-- <div class="empty" v-if="!links.length">come back soon for new updates</div> -->
    </div>

    <!-- FOREVER AND EVER (Emmanuel) Single -->
    <!-- <div class="single-card">
      <a href="https://open.spotify.com/artist/7zVhbvqRXFzIdF28uXV09A" target="_blank">
        <img src="@/assets/unto_us.jpeg" alt="FOREVER AND EVER (Emmanuel) Single" />
      </a>
      <p class="single-text">FOREVER AND EVER (Emmanuel) - Out Friday, Nov 28th</p>
    </div> -->

    <!-- YouTube Video Card -->
    <div class="video-card">
      <iframe 
        src="https://www.youtube.com/embed/lAjfBxAEidY?si=kkjGpt6NI6K9b3Mc"
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>

    <!-- Music Embeds Container -->
    <div class="music-embeds">
      <!-- Spotify Embed -->
      <div>
        <iframe 
          src="https://open.spotify.com/embed/album/3CgJsslbNCB2vhOAf28gtT?utm_source=generator&theme=0" 
          frameBorder="0" 
          allowfullscreen="" 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy">
        </iframe>
      </div>

      <!-- Future Apple Music Embed -->
      <div>
        <iframe 
          src="https://embed.music.apple.com/us/album/family/1764921686" 
          frameBorder="0" 
          allowfullscreen="" 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy">
        </iframe>
      </div>

      <!-- YouTube Video Card -->
    </div>
    <div class="video-card" style="margin-top: 6px;">
        <iframe 
          src="https://www.youtube.com/embed/spQyEbtmk68?si=JWNOsU-_7ThzkHhm"
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </div>
  </div>
</template>

<script>
import LinkItem from '../components/LinkItem.vue'
// import single1URL from '@/assets/god-is-good.webp'
// import single2URL from '@/assets/come-what-may.webp'
// import Link2URL from '@/assets/live-from-newberg.webp'
// import Link3URL from '@/assets/lp_front.webp'
import imageUrl1 from '@/assets/unto_us.jpeg'


export default {
  name: 'LinktreeLandingPage',
  components: {
    LinkItem,
  },
  data() {
    return {
      artistName: 'SAINTS\' HILL MUSIC',
      links: [
       // { title: 'Order "Family" On Vinyl', url: 'https://store.saintshillmusic.com/products/family-vinyl', color: '#0054ff', openInNewTab: true, },
      ],
    }
  }
}
</script>

<style scoped>
.linktree-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 90vh;
  max-width: 1200px !important;
  margin: 0 auto; /* centers the container itself */
}

.header {
  text-align: center;
  margin-bottom: 20px;
}

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
}

.link-item {
  margin: 10px 0;
}

/* Video card styling with extra spacing */
.video-card {
  width: 100%;
  overflow: hidden;
  border-radius: 12px;
  margin: 16px 0;
}

.video-card iframe {
  width: 100%;
  aspect-ratio: 16 / 9;
  display: block;
  border: 0;
}

/* New container for the music players */
.music-embeds {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px; /* adds space between the Spotify and Apple Music embeds */
  width: 100%;
  margin-bottom: 16px;
}

/* Each embed takes up equal space with a minimum width */
.music-embeds > div {
  flex: 1 1 300px;
}

/* Ensure the iframes have consistent styling */
.music-embeds iframe {
  width: 100%;
  height: 352px;
  border-radius: 12px;
  margin-top: 10px;
  box-shadow: 0px 3px 1px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 2px 2px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 5px 0px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12));
}

/* On smaller screens, stack the embeds vertically */
@media (max-width: 768px) {
  .music-embeds {
    flex-direction: column;
  }
}

/* Single card styling */
.single-card {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px 0;
}

.single-card a {
  width: 100%;
  display: block;
  cursor: pointer;
}

.single-card img {
  width: 100%;
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  display: block;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
              0px 2px 2px 0px rgba(0, 0, 0, 0.14),
              0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  transition: transform 0.2s ease;
}

.single-card img:hover {
  transform: scale(1.01);
}

.single-text {
  margin-top: 12px;
  font-size: 18px;
  font-weight: 600;
  text-align: left;
  color: #000;
}
</style>

