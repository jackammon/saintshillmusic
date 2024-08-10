<template>
  <v-btn :href="url" 
     class="link-item" 
     target="_blank" 
     color="white"
     size="x-large"
     rel="noopener noreferrer">
    <div class="link-content">
      <span class="title">{{ title }}</span>
      <img v-if="albumArt" :src="albumArt" alt="Album Art" class="album-art" />
      <span v-if="subtitle" class="subtitle">{{ subtitle }}</span>
    </div>
  </v-btn>
</template>

<script>
export default {
  name: 'LinkItem',
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: false,
    },
    url: {
      type: String,
      required: true,
    },
    albumArt: {
      type: String,
      default: null,
    },
    color: {
      type: String,
      required: false,
    }
  },
};
</script>

<style scoped>
.link-item {
  font-size: 15px !important;
  color: #333333;
  font-weight: 500;
  transition: background-color 0.3s ease, color 0.3s ease;
  border-radius: 25px;
  width: 100%;
}

.link-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.album-art {
  margin-top: 10px;
  margin-bottom: 10px;
  width: 200px;
  height: 200px;
  border-radius: 5px;
  object-fit: contain;
}

.title {
  text-transform: uppercase;
  color: black;
  letter-spacing: 0em;
}

.subtitle {
  font-size: 14px;
  color: #666666;
  margin-top: 5px;
  /* text-transform: uppercase; */
}
</style>
