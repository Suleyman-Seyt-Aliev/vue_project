<template>
  <v-container class="pa-6 mt-16"> <!-- Увеличен отступ сверху -->
    <v-row justify="center">
      <v-col cols="12" sm="8" lg="6" class="pa-4">
        <h1 class="text--secondary mb-5 mt-10">Orders</h1> <!-- Увеличен верхний отступ для заголовка -->
        
        <!-- Список заказов -->
        <v-list subheader two-line flat class="elevation-3 pa-4 rounded-lg">
          <v-list-item
            v-for="order in orders"
            :key="order.id"
            class="mb-3"
          >
            <template v-slot:prepend>
              <v-list-item-action class="mr-3">
                <v-checkbox
                  :input-value="order.done"
                  color="teal darken-2"
                  @click="markDone(order)"
                ></v-checkbox>
              </v-list-item-action>
            </template>

            <v-list-item-title class="font-weight-medium">{{ order.name }}</v-list-item-title>
            <v-list-item-subtitle class="text--secondary">{{ order.phone }}</v-list-item-subtitle>

            <template v-slot:append>
              <v-list-item-action>
                <v-btn 
                  color="teal lighten-1"
                  dark
                  :to="'/ad/' + order.adId"
                  class="ml-2"
                >
                  Open
                </v-btn>
              </v-list-item-action>
            </template>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'OrdersView',
  data() {
    return {
      orders: [
        {
          id: "123",
          name: "Kostya",
          phone: "+7(978)000-00-05",
          adId: "1",
          done: true
        },
        {
          id: "124",
          name: "Ivan",
          phone: "+7(979)000-00-06",
          adId: "2",
          done: false
        },
        {
          id: "125",
          name: "Alex",
          phone: "+7(980)000-00-07",
          adId: "3",
          done: false
        }
      ]
    };
  },
  methods: {
    markDone(order) {
      order.done = !order.done;
      console.log(`Order ${order.id} status changed to ${order.done}`);
    }
  }
}
</script>

<style scoped>
.v-list {
  background-color: #f5f5f5;
}

.rounded-lg {
  border-radius: 10px;
}
</style>
