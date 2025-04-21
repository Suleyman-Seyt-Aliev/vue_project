<template>
  <v-container class="mt-12"> <!-- Добавлен только этот класс для отступа сверху -->
    <v-row justify="center">
      <v-col cols="12" sm="8" lg="6">
        <h1 class="text--secondary mb-3 mt-3">My ads</h1>
        
        <v-card 
          v-for="ad in myAds" 
          :key="ad.id" 
          class="mb-3"
          max-width="1000"
        >
          <v-row>
            <v-col cols="4">
              <v-img 
                :src="ad.src" 
                height="175px" 
                cover
                class="ad-image"
              ></v-img>
            </v-col>
            
            <v-col cols="8" class="ad-content">
              <h2 class="text--primary mb-2">{{ ad.title }}</h2>
              <p class="ad-description">{{ ad.desc }}</p>
              
              <v-card-actions class="ad-actions">
                <v-spacer></v-spacer>
                <v-btn 
                  color="primary" 
                  variant="text" 
                  :to="'/ad/' + ad.id"
                  class="open-btn"
                >
                  Open
                </v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      myAds: [
        {
          title: "First",
          desc: "Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          promo: true,
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
          id: "1"
        },
        {
          title: "Second",
          desc: "Second description",
          promo: true,
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
          id: "2"
        },
        {
          title: "Third",
          desc: "Third description",
          promo: true,
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
          id: "3"
        },
        {
          title: "Fourth",
          desc: "Fourth description",
          promo: true,
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
          id: "4"
        }
      ]
    }
  }
}
</script>

<style scoped>
.ad-description {
  white-space: pre-wrap;
  word-wrap: break-word;
  margin-bottom: 8px;
}

.ad-content {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.ad-actions {
  margin-top: auto;
  padding-bottom: 8px;
}

.ad-image {
  object-fit: cover;
}
</style>