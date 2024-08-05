<template>
  <a :href="url" class="link-item" target="_blank" rel="noopener noreferrer">
    <div class="link-content">
      <span class="title">{{ title }}</span>
      <img v-if="albumArt" :src="albumArt" alt="Album Art" class="album-art" />
    </div>
  </a>
</template>

<script>
export default {
  name: 'LinkItem',
  props: {
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    albumArt: {
      type: String,
      default: null,
    },
  },
};
</script>

<style scoped>
.link-item {
  display: block;
  padding: 15px;
  text-align: center;
  /* background-color: #ffffff; */
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  text-decoration: none;
  color: #333333;
  font-weight: 500;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.link-item:hover {
  background-color: #e0e0e0;
  color: #000000;
}

.link-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.album-art {
  margin-top: 10px;
  margin-bottom: 10px;
  width: 225px;
  height: 225px;
  border-radius: 5px;
  object-fit: contain;
}

.title {
  text-transform: uppercase;
}
</style>
