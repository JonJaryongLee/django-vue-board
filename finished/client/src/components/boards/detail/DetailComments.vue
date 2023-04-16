<template>
  <div>
    <div v-if="comments.length">
      <div>댓글 목록</div>
      <ul>
        <li v-for="(comment, index) in comments" :key="comment.id">
          {{ comment.content }} - {{ comment.user.username }}
          <span v-if="isCommentUser(index)">
            -
            <button
              type="button"
              class="btn btn-danger"
              @click="deleteComment(comment.id)"
            >
              댓글 삭제
            </button>
          </span>
        </li>
      </ul>
    </div>
    <div v-else>아직 댓글이 없습니다.</div>
  </div>
</template>

<script>
export default {
  props: {
    comments: Array,
  },
  methods: {
    isCommentUser(index) {
      if (this.comments[index].user.username === this.$store.state.username) {
        return true;
      }
      return false;
    },
    deleteComment(id) {
      this.$emit("deleteComment", id);
    },
  },
};
</script>
