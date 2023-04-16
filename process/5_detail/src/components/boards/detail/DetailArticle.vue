<template>
  <div>
    <div>글번호: {{ article.id }}</div>
    <div>제목: {{ article.title }}</div>
    <div>작성자: {{ article.user.username }}</div>
    <div>작성시간: {{ parseDate(article.created_at) }}</div>
    <div>수정시간: {{ parseDate(article.updated_at) }}</div>
    <hr />
    <p>{{ article.description }}</p>
    <div v-if="isArticleUser">
      <router-link :to="{ name: 'update', params: { id: article.id } }">
        <button type="button" class="btn btn-warning">글 수정</button>
      </router-link>
      <button type="button" class="btn btn-danger" @click="deleteArticle">
        글 삭제
      </button>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  props: {
    isArticleUser: Boolean,
    article: {
      id: Number,
      title: String,
      user: {
        username: String,
      },
      created_at: String,
      updated_at: String,
      description: String,
    },
  },
  methods: {
    parseDate(rawDate) {
      return dayjs(rawDate).format("YYYY-MM-DD HH:mm:ss");
    },
    deleteArticle() {
      this.$emit("deleteArticle");
    },
  },
};
</script>
