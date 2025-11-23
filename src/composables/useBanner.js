import { ref, computed } from 'vue';

// Global state for banner
const globalShowBanner = ref(true);

// Configuration: toggle between 'session' and 'global' modes
const STORAGE_MODE = 'global'; // Change to 'global' to use global variable only

export function useBanner() {
  // Computed property that decides which state to use
  const showBanner = computed({
    get() {
      if (STORAGE_MODE === 'session') {
        // Use sessionStorage
        return sessionStorage.getItem('bannerDismissed') !== 'true';
      } else {
        // Use global variable
        return globalShowBanner.value;
      }
    },
    set(value) {
      if (STORAGE_MODE === 'session') {
        // Update sessionStorage
        if (!value) {
          sessionStorage.setItem('bannerDismissed', 'true');
        } else {
          sessionStorage.removeItem('bannerDismissed');
        }
      } else {
        // Update global variable
        globalShowBanner.value = value;
      }
    }
  });

  const closeBanner = () => {
    showBanner.value = false;
  };

  const resetBanner = () => {
    if (STORAGE_MODE === 'session') {
      sessionStorage.removeItem('bannerDismissed');
    } else {
      globalShowBanner.value = true;
    }
  };

  return {
    showBanner,
    closeBanner,
    resetBanner,
    STORAGE_MODE
  };
}