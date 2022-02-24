<template>
  <div class="home" style="padding-top: 50px">
    <div class="category">
      <h3 @click="fetchCategories">Select category:</h3>
      <select @change="change($event)" v-model="selected">
        <option value="1" disabled>Select category</option>
        <option
          v-for="cat in categories"
          :key="cat.category_id"
          :value="cat.category_id"
        >
          {{ cat.category_name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",

  mounted() {
    this.fetchCategories();
  },
  data() {
    return {
      categories: [],
      selected: 1,
    };
  },
  methods: {
    fetchCategories() {
      fetch(
        `http://magic-tv.live:2095/player_api.php?username=${this.username}&password=${this.password}&action=get_live_categories`
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          this.categories = data;
        });
    },
    change(event) {
      this.$router.push({
        path: `/live/${event.target.value}`,
      });
    },
  },
  computed: {
    username() {
      return sessionStorage.getItem("username");
    },
    password() {
      return sessionStorage.getItem("password");
    },
  },
};
</script>

<style scoped>
.category {
  border: 1px solid #fff;
  height: fit-content;
  padding: 20px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.category h3 {
  margin-right: 10px;
  color: #fff;
}
.category select {
  height: fit-content;
}
</style>
