<template>
    <div class="nav-drawer" ref="drawer">
      <v-list style="background-color: #1072fa; color: #fffdf9; margin-top: 84px;">
          <v-list-item v-for="(item, i) in menuItems" :key="i" @click="toLink(item.link)" style="padding-left: 0 !important; border-radius: 4px;">
            <v-list-item-title :color="isOpen ? '#1072fa' : '#fffdf9'" class="text-left tab nav-link">{{ item.title }}</v-list-item-title>
          </v-list-item>
      </v-list>
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import gsap from 'gsap';
import { useRouter } from 'vue-router'

const router = useRouter()
const drawer = ref(null);
const emit = defineEmits(['update:isOpen']);
const props = defineProps({
  isOpen: Boolean
});

const menuItems = [
  { title: 'About', link: '/about' },
  { title: 'Contact', link: '/contact' },
  { title: 'Resume', link: '/resume' }
];

function toLink(link) {
  emit('update:isOpen', false);  // Emit event to update isOpen in the parent
  router.push(link);
}

onMounted(() => {
  gsap.set(drawer.value, { y: '-100%' });
  gsap.set(".nav-link", { y: 64, opacity: 1 });
});

watch(() => props.isOpen, (newValue) => {
  const duration = 1;
  if (newValue) {
    const tl = gsap.timeline();
    tl.to(drawer.value, { y: '0%', duration: duration, ease: 'power4.inOut' })
      .to(".nav-link", { y: 0, stagger: 0.1, ease: 'power2.out', duration: .5 }, duration / 1.50); // Animate into position
  } else {
    const tl = gsap.timeline();
    tl.to(drawer.value, { y: '-100%', duration: duration, ease: 'power4.inOut' })
      .set(".nav-link", { y: 64 });
  }
});
</script>

<style>
.nav-drawer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #1072fa;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  padding-left: 21px;
  padding-right: 21px;
}
ul {
  list-style: none;
  padding: 20px;
  margin: 0;
}
li a {
  color: #fffdf9;
  text-decoration: none;
}
.tab {
  height: 72px !important;
  font-size: 36pt !important;
  font-weight: 700 !important;
  letter-spacing: .5pt !important;
  padding-top: 20px !important;
  letter-spacing: -.02em !important;
  line-height: .75em !important;
  padding-left: 5px !important;
}
</style>
