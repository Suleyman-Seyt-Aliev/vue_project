<template>
  <v-app>
    <!-- 🔹 Боковое меню -->
    <v-navigation-drawer app color="teal lighten-5" dark v-model="drawer">
      <!-- Заголовок -->
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">КИПУ</v-list-item-title>
          <v-list-item-subtitle>Учебный проект</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <!-- 📋 Динамическое меню -->
      <v-list dense>
        <v-list-item
          v-for="link in links"
          :key="link.title"
          :to="link.url"
          link
        >
          <template v-slot:prepend>
            <v-icon :icon="link.icon"></v-icon>
          </template>
          <v-list-item-title>{{ link.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- 🔸 Верхняя панель -->
    <v-app-bar app dark color="teal darken-2">
      <!-- 🍔 Меню -->
      <v-app-bar-nav-icon @click="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <!-- 🔗 Динамические кнопки -->
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          text
          v-for="link in links"
          :key="link.title"
          :to="link.url"
        >
          <v-icon start :icon="link.icon"></v-icon>
          {{ link.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <!-- 🧱 Контент -->
    <v-main class="pa-4" style="background-color: #FAFAFA;">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { title: "Login", icon: "mdi-lock", url: "/login" },
        { title: "Registration", icon: "mdi-face", url: "/registration" },
        { title: "Orders", icon: "mdi-bookmark-multiple-outline", url: "/orders" },
        { title: "New ad", icon: "mdi-note-plus-outline", url: "/new" },
        { title: "My ads", icon: "mdi-view-list-outline", url: "/list" }
      ]
    }
  }
}
</script>