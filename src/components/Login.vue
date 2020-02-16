<!-- <template>
<div>
  <form class="login" @submit.prevent="auth">
    <h1>Sign in</h1>
    <label>Login</label>
    <input required v-model="username" type="text" placeholder="Name" />
    <label>Password</label>
    <input required v-model="password" type="password" placeholder="Password" />
    <hr />
    <button type="submit">Login</button>
  </form>
</div>
</template> -->


<template >
<div class="div text-center d-flex justify-content-center">
  <div class="mt-5 w-25">
    <b-card class="text-light" header="АВТОРИЗАЦИЯ" header-bg-variant="success" body-bg-variant="light">

      <b-form-group class="text-left text-dark" label="Логин" label-for="login-input">
        <b-form-input  id="login-input" v-model.trim="userName"></b-form-input>
      </b-form-group>

      <b-form-group class="text-left text-dark" label="Пароль" label-for="password-input">
        <b-form-input  id="password-input" type="password" v-model="userPassword"></b-form-input>
      </b-form-group>

      <b-card-footer class="mt-4 m-auto"></b-card-footer>
      <b-alert v-model="showDismissibleAlert" variant="danger" >
        <div>{{message}}</div>
      </b-alert>

      <b-button class="btn-block" type="submit" @click="auth" variant="outline-success">Войти</b-button>
    </b-card>

  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      User: {
        username: "",
        password: "",
        token: null
      },
      showDismissibleAlert: false,
      message: 'Данные не верны'
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
		userName: {
			get() {
				return this.User.username;
			},
			set(value) {
				this.showDismissibleAlert = false;
				this.User.username = value;
			}
		}
  },
  methods: {
    async auth() {
      await this.$store.dispatch('auth', {
          username: this.User.username,
          password: this.User.password
        })
        .then (response => {
          this.User.token =  response.data.token
          if (this.User.token) {
            this.$router.push({
              name: 'Home'
            })
          }

        })
        .catch(err => {
          console.log("Ошибка авторизации")
          console.log(err)
          if(err!=='') this.showDismissibleAlert = true
        }
        )
    }
  }
}
</script>
