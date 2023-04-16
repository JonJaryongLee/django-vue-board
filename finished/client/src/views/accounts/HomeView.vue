<template>
  <div>
    <h1>싸피 인사이드</h1>
    <div class="form-floating">
      <input
        type="text"
        class="form-control"
        id="user-id"
        placeholder="user-id"
        v-model="username"
      />
      <label for="user-id">아이디를 입력하세요</label>
    </div>
    <div class="form-floating">
      <input
        type="password"
        class="form-control"
        id="user-password"
        placeholder="password"
        v-model="password"
      />
      <label for="user-password">비밀번호를 입력하세요</label>
    </div>
    <button type="button" class="btn btn-info" @click="login">로그인</button>
    <router-link :to="{ name: 'signup' }">
      <button type="button" class="btn btn-primary">회원가입</button>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("login", {
          username: this.username,
          password: this.password,
        })
        .then((flag) => {
          if (flag) {
            alert("로그인 성공");
            this.$router.push({ name: "board" });
          } else {
            alert("로그인 실패");
          }
        })
        .catch((error) => console.error(error));
    },
  },
};
</script>
