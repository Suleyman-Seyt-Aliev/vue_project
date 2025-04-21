<template>
  <v-container class="fill-height" style="background-color: #FAFAFA;">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-card class="elevation-6">
          <v-toolbar dark color="teal darken-2">
            <v-toolbar-title class="text-h5">Регистрация</v-toolbar-title>
          </v-toolbar>
          <v-card-text class="pa-6">
            <v-form v-model="valid" ref="form" lazy-validation>
              <v-text-field
                prepend-inner-icon="mdi-email"
                name="email"
                label="Email"
                type="email"
                v-model="email"
                :rules="emailRules"
                variant="outlined"
                color="teal"
                class="mb-4"
              ></v-text-field>

              <v-text-field
                prepend-inner-icon="mdi-lock"
                name="password"
                label="Пароль"
                type="password"
                v-model="password"
                :rules="passwordRules"
                variant="outlined"
                color="teal"
                class="mb-4"
              ></v-text-field>

              <v-text-field
                prepend-inner-icon="mdi-lock-check"
                name="confirm-password"
                label="Подтвердите пароль"
                type="password"
                v-model="confirmPassword"
                :rules="confirmPasswordRules"
                variant="outlined"
                color="teal"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions class="px-6 pb-6">
            <v-spacer></v-spacer>
            <v-btn 
              color="teal darken-2" 
              @click="onSubmit"
              variant="flat"
              size="large"
              :disabled="!valid"
            >
              Создать аккаунт
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      valid: false,
      emailRules: [
        v => !!v || "Email обязателен",
        v => /.+@.+\..+/.test(v) || "Email должен быть действительным"
      ],
      passwordRules: [
        v => !!v || "Пароль обязателен",
        v => (v && v.length >= 6) || "Пароль должен быть не менее 6 символов"
      ],
      confirmPasswordRules: [
        v => !!v || "Подтверждение пароля обязательно",
        v => v === this.password || "Пароли должны совпадать"
      ]
    };
  },
  methods: {
    onSubmit() {
      if (this.$refs.form.validate()) {
        const user = {
          email: this.email,
          password: this.password
        }
        console.log("Данные пользователя:", user)
      }
    }
  }
};
</script>

<style scoped>
.v-card {
  border-radius: 8px;
}
</style>