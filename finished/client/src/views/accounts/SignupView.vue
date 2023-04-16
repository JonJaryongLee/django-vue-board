<template>
  <div>
    <ArrowBack :arrowBackRouteName="arrowBackRouteName" />
    <h1>회원가입</h1>
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
        id="user-password1"
        placeholder="password"
        v-model="password1"
      />
      <label for="user-password1">비밀번호를 입력하세요</label>
    </div>
    <div class="form-floating">
      <input
        type="password"
        class="form-control"
        id="user-password2"
        placeholder="password"
        v-model="password2"
      />
      <label for="user-password2">비밀번호를 다시 입력하세요</label>
    </div>
    <button type="button" class="btn btn-primary" @click="signup">
      회원가입
    </button>
  </div>
</template>

<script>
import ArrowBack from "@/components/common/ArrowBack.vue";
import axios from "axios";

export default {
  components: { ArrowBack },
  data() {
    return {
      arrowBackRouteName: "home",
      username: "",
      password1: "",
      password2: "",
    };
  },
  methods: {
    signup() {
      axios
        .post(`${this.$store.state.URL}/accounts/signup/`, {
          username: this.username,
          password1: this.password1,
          password2: this.password2,
        })
        .then((response) => {
          if (response.status === 204) {
            alert("회원가입 성공");
            this.$router.push({ name: "home" });
          }
        })
        .catch((error) => {
          console.error(error);
          alert("회원가입 실패");
        });
    },
  },
};
</script>
