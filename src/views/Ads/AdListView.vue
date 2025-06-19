<template>
  <v-container class="mt-12">
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
              />
            </v-col>

            <v-col cols="8" class="d-flex flex-column">
              <h2 class="text--primary mb-2">{{ ad.title }}</h2>
              <p
                class="ad-description"
                style="height: 85px; overflow: hidden; text-overflow: ellipsis;"
              >
                {{ ad.desc }}
              </p>

              <v-card-actions class="mt-auto pb-2">
                <v-spacer />
                <v-btn
                  color="primary"
                  text
                  :to="`/ad/${ad.id}`"
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
  name: "AdListView",
  computed: {
    myAds() {
      return this.$store.getters.myAds;
    }
  }
}
</script>

<style scoped>
.ad-description {
  margin-bottom: 8px;
}
</style>
