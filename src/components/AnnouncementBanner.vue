<template>
  <div class="announcement-banner" v-if="showBanner && !isExpired">
    <p class="banner-text">
      {{ bannerMessage }}
      <span class="arrow">→</span>
      <router-link to="/links" class="banner-link">{{ ctaText }}</router-link>
    </p>
    <button class="close-button" @click="closeBanner">×</button>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useBanner } from '@/composables/useBanner';
import dayjs from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';

dayjs.extend(isSameOrAfter);

// CONFIGURATION - Update these dates as needed
const RELEASE_DATE = '2025-11-28'; // Release date for the single
const EXPIRES_ON = '2026-02-26'; // When to stop showing banner (90 days after release)

export default {
  name: 'AnnouncementBanner',
  setup() {
    const { showBanner, closeBanner } = useBanner();

    const isReleased = computed(() => {
      const now = dayjs();
      const releaseDate = dayjs(RELEASE_DATE);
      return now.isSameOrAfter(releaseDate, 'day');
    });

    const isExpired = computed(() => {
      const now = dayjs();
      const expiresDate = dayjs(EXPIRES_ON);
      return now.isAfter(expiresDate, 'day');
    });

    const bannerMessage = computed(() => {
      const releaseDate = dayjs(RELEASE_DATE);
      const formattedDate = releaseDate.format('dddd, MMM D');

      return isReleased.value
        ? 'New Single - Out Now'
        : `New Single - Out ${formattedDate}`;
    });

    const ctaText = computed(() => {
      return isReleased.value ? 'Listen' : 'Learn More';
    });

    return {
      showBanner,
      closeBanner,
      isExpired,
      bannerMessage,
      ctaText
    };
  }
};
</script>

<style scoped>
/* Bottom Announcement Banner Styles */
.announcement-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(161, 18, 24, 0.95);
  color: white;
  padding: 8px 40px 8px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 900; /* Lower than nav drawer (999) */
  /* animation: slideUp 0.5s ease-out; */
  width: 100%;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.2);
}

@keyframes slideUp {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

.banner-text {
  margin: 0;
  font-size: 14px;
  font-weight: 500;
}

.arrow {
  margin: 0 8px;
}

.banner-link {
  color: white;
  text-decoration: underline;
  font-weight: 600;
}

.banner-link:hover {
  color: #ffd700;
}

.close-button {
  position: absolute;
  right: 12px;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
  transition: opacity 0.2s;
}

.close-button:hover {
  opacity: 1;
}

/* Mobile adjustments */
@media (max-width: 768px) {
  .announcement-banner {
    padding: 8px 35px 8px 12px;
  }

  .banner-text {
    font-size: 13px;
  }
}
</style>