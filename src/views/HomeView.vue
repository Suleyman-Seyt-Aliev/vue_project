<template>
  <div>
    <!-- Карусель с данными из Vuex -->
    <div class="carousel-wrapper">
      <v-carousel
        cycle
        height="80vh"
        hide-delimiters
      >
        <v-carousel-item
          v-for="ad in promoAds"
          :key="ad.id"
          :src="ad.src"
          cover
        >
          <div class="carousel-link">
            <v-btn color="error" large :to="`/ad/${ad.id}`">
              {{ ad.title }}
            </v-btn>
          </div>
        </v-carousel-item>
      </v-carousel>
    </div>

    <!-- Сетка карточек -->
    <v-container class="mt-5">
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="ad in ads"
          :key="ad.id"
        >
          <v-card class="mb-4">
            <v-img
              height="200"
              :src="ad.src"
            />
            <v-card-title>
              <div>
                <h3 class="headline mb-0">{{ ad.title }}</h3>
                <div>{{ ad.desc }}</div>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-spacer />
              <v-btn text :to="`/ad/${ad.id}`">Open</v-btn>
              <v-btn color="primary" dark>Buy</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  computed: {
    // вместо data.ads берём из Vuex
    ads() {
      return this.$store.getters.ads;
    },
    promoAds() {
      return this.$store.getters.promoAds;
    }
  }
}
</script>

<style scoped>
.carousel-wrapper {
  padding: 40px;
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 50px;
  box-sizing: border-box;
}
.carousel-link {
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.5);
  padding: 10px 25px;
  border-radius: 8px;
}
.headline {
  font-size: 1.25rem;
  font-weight: 500;
}
.v-carousel {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
}
</style>
