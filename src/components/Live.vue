<template>
  <section>
    <loading v-if="loading" />
    <div class="container">
      <div>
        <div class="streams" v-for="stream in streams" :key="stream.num">
          <div class="img-container">
            <img :src="stream.stream_icon" alt="Not Found" />
          </div>
          <div class="text">
            <div class="info">
              <h3>Stream name : {{ stream.name }}</h3>
              <p>Stream id : {{ stream.stream_id }}</p>
            </div>
            <span style="font-weight: bold" class="type">{{
              stream.stream_type
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Loading from "./Loading.vue";
export default {
  components: { Loading },

  data() {
    return {
      streams: [],
      loading: false,
    };
  },
  methods: {
    fetchStreams() {
      this.loading = true;
      this.axios
        .get(
          `/player_api.php?username=${this.username}&password=${this.password}&action=get_live_streams&category_id=${this.$route.params.id}`
        )
        .then((data) => {
          this.streams = [];
          this.loading = false;
          this.streams = data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.fetchStreams();
  },
  watch: {
    $route() {
      this.fetchStreams();
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

<style>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding-top: 50px;
}
.streams {
  display: flex;
  justify-content: space-between;
  box-shadow: 0 0 8px 1px;
  margin-bottom: 10px;
  background: #fff;
}
.streams .img-container {
  width: 25%;
  align-self: center;
}
.streams .img-container img {
  width: 100%;
}

.streams .text {
  padding: 20px;
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: space-between;
}
.streams .text .info {
  text-align: left;
}
</style>
