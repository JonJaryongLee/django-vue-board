<template>
  <div>
    <input type="text" class="form-control" v-model="content" />
    <button type="button" class="btn btn-primary" @click="createComment">
      댓글 추가
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: "",
    };
  },
  methods: {
    createComment() {
      if (this.content.length) {
        this.$emit("createComment", this.content);
      } else {
        alert("작성할 댓글 내용을 입력하세요.");
      }
    },
  },
};
</script>
