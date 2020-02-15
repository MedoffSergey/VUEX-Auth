<template>
<div>
  <form class="login" @submit.prevent="auth">
    <h1>Sign in</h1>
    <label>Login</label>
    <input required v-model="login" type="text" placeholder="Name" />
    <label>Password</label>
    <input required v-model="password" type="password" placeholder="Password" />
    <hr />
    <button type="submit">Login</button>
  </form>
</div>
</template>

<script>
export default {
  data() {
    return {
      login: "",
      password: "",
      message: "Неверные данные",
      showDismissibleAlert: false

    }
  },
  computed: {
    userPassword: {
      get() {
        return this.User.password;
      },
      set(value) {
        this.showDismissibleAlert = false;
        this.User.password = value;
      }
    },
    userLogin: {
      get() {
        return this.User.login;
      },
      set(value) {
        this.showDismissibleAlert = false;
        this.User.login = value;
      }
    }
  },
  methods: {
    auth: function () {
        let login = this.login
        let password = this.password
        this.$store.dispatch('auth', { login, password })
       .then(() => this.$router.push('/'))
       .catch(err => console.log(err))
      }
  }
}
</script>
