<template>
  <div class="login">
    <form @submit.prevent="login">
      <div>
        <input type="text" v-model="username" placeholder="User Name" />
      </div>

      <div>
        <input type="password" v-model="password" placeholder="Password" />
      </div>
      <p v-if="err">{{ msgErr }}</p>

      <button>Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "hmaser",
      password: "hmaserv1987",

      err: false,
      msgErr: null,
    };
  },
  methods: {
    login() {
      if (this.username == "hmaser" && this.password == "hmaserv1987") {
        sessionStorage.setItem("username", this.username);
        sessionStorage.setItem("password", this.password);
        this.$store.commit("getUserName", sessionStorage.getItem("username"));

        this.$router.push({ name: "Home" });

        this.err = false;
        this.msgErr = "";
      } else {
        this.err = true;
        this.msgErr = "Please Input valid values";
      }
    },
  },
};
</script>

<style>
.login {
  max-width: 400px;
}
input {
  padding: 10px;
  margin-bottom: 20px;
  width: 100%;
}
button {
  padding: 10px 20px;
}
</style>
