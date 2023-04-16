<template>
  <div>
    <AppLoading v-if="isLoading" />
    <div v-else>
      <AppUsername />
      <AppLogout />
      <h1>게시판</h1>
      <BoardList :articles="articles" />
      <router-link :to="{ name: 'create' }">
        <button type="button" class="btn btn-primary">글쓰기</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import AppUsername from "@/components/common/AppUsername.vue";
import AppLoading from "@/components/common/AppLoading.vue";
import AppLogout from "@/components/common/AppLogout.vue";
import BoardList from "@/components/boards/board/BoardList.vue";

export default {
  components: { AppUsername, AppLoading, AppLogout, BoardList },
  data() {
    return {
      isLoading: true,
      articles: [],
    };
  },
  created() {
    axios
      .get(`${this.$store.state.URL}/api/v1/articles/`, {
        headers: {
          Authorization: `Token ${this.$store.state.key}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          this.articles = response.data;
          this.isLoading = false;
        }
      })
      .catch((error) => {
        if (error.response.status === 401) {
          alert("로그인 후 이용하세요.");
          this.$router.push({ name: "home" });
        }
        if (error.response.status === 404) {
          this.isLoading = false;
        }
      });
  },
};
</script>

