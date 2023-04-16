<template>
  <div>
    <h1>DetailView</h1>
    <AppUsername />
    <AppLoading />
    <AppLogout />
    <ArrowBack />
    <DetailArticle />
    <DetailComments />
    <CommentInput />
  </div>
</template>

<script>
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
};
</script>
