<template>
  <div>
    <AppLoading v-if="isLoading" />
    <div v-else>
      <AppUsername />
      <AppLogout />
      <ArrowBack :arrowBackRouteName="arrowBackRouteName" />
      <DetailArticle
        :article="article"
        :isArticleUser="isArticleUser"
        @deleteArticle="deleteArticle"
      />
      <hr />
      <DetailComments
        :comments="article.comments"
        @deleteComment="deleteComment"
      />
      <hr />
      <CommentInput @createComment="createComment" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import AppUsername from "@/components/common/AppUsername.vue";
import AppLoading from "@/components/common/AppLoading.vue";
import AppLogout from "@/components/common/AppLogout.vue";
import ArrowBack from "@/components/common/ArrowBack.vue";
import DetailArticle from "@/components/boards/detail/DetailArticle.vue";
import DetailComments from "@/components/boards/detail/DetailComments.vue";
import CommentInput from "@/components/boards/detail/CommentInput.vue";

export default {
  components: {
    AppUsername,
    AppLoading,
    AppLogout,
    ArrowBack,
    DetailArticle,
    DetailComments,
    CommentInput,
  },
  data() {
    return {
      isLoading: true,
      isArticleUser: false,
      arrowBackRouteName: "board",
      article: {},
    };
  },
  created() {
    axios
      .get(
        `${this.$store.state.URL}/api/v1/articles/${this.$route.params.id}`,
        {
          headers: {
            Authorization: `Token ${this.$store.state.key}`,
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          this.article = response.data;
          if (this.article.user.username === this.$store.state.username) {
            this.isArticleUser = true;
          }
          this.isLoading = false;
        }
      })
      .catch((error) => {
        console.error(error);
        if (error.response.status === 401) {
          alert("로그인 후 이용하세요.");
          this.$router.push({ name: "home" });
        }
      });
  },
  methods: {
    getAllData() {
      axios
        .get(
          `${this.$store.state.URL}/api/v1/articles/${this.$route.params.id}`,
          {
            headers: {
              Authorization: `Token ${this.$store.state.key}`,
            },
          }
        )
        .then((response) => {
          if (response.status === 200) {
            this.article = response.data;
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    createComment(content) {
      axios
        .post(
          `${this.$store.state.URL}/api/v1/articles/${this.$route.params.id}/comments/`,
          { content: content },
          { headers: { Authorization: `Token ${this.$store.state.key}` } }
        )
        .then((response) => {
          this.content = "";
          if (response.status === 201) {
            this.getAllData();
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    deleteArticle() {
      axios
        .delete(
          `${this.$store.state.URL}/api/v1/articles/${this.$route.params.id}/`,
          { headers: { Authorization: `Token ${this.$store.state.key}` } }
        )
        .then((response) => {
          if (response.status === 204) {
            alert("글 삭제 성공");
            this.$router.push({ name: "board" });
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    deleteComment(id) {
      axios
        .delete(`${this.$store.state.URL}/api/v1/comments/${id}/`, {
          headers: {
            Authorization: `Token ${this.$store.state.key}`,
          },
        })
        .then((response) => {
          if (response.status === 204) {
            this.getAllData();
          }
        })
        .catch((error) => console.error(error));
    },
  },
};
</script>
