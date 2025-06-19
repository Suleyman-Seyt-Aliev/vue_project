<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-card class="mt-12 elevation-3">
          <!-- Если объявление найдено -->
          <template v-if="ad">
            <v-img
              height="300px"
              :src="ad.src"
              cover
            ></v-img>

            <v-card-text>
              <h1 class="text--primary mb-3">{{ ad.title }}</h1>
              <p>
                {{ ad.desc }}
              </p>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="warning" variant="flat" @click="onEdit">
                EDIT
              </v-btn>
              <v-btn color="success" variant="flat" @click="onBuy">
                BUY
              </v-btn>
            </v-card-actions>
          </template>

          <!-- Заглушка, если по ID ничего не найдено -->
          <template v-else>
            <v-card-text>
              <p>Ad not found.</p>
            </v-card-text>
          </template>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AdView",
  props: ['id'],
  computed: {
    ad() {
      return this.$store.getters.adById(this.id);
    }
  },
  methods: {
    onEdit() {
      // редирект на страницу редактирования (если есть)
      this.$router.push({ name: 'ad-edit', params: { id: this.ad.id } });
    },
    onBuy() {
      // здесь будет логика покупки
      console.log('Buying ad', this.ad.id);
    }
  }
}
</script>
