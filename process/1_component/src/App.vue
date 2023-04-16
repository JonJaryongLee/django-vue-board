<template>
  <div id="app">
    <main>
      <router-view />
    </main>
    <footer>
      <AppFooter />
    </footer>
  </div>
</template>

<script>
import AppFooter from "@/components/common/AppFooter.vue";
export default {
  components: { AppFooter },
};
</script>


<style>
* {
  font-family: "Noto Sans KR", sans-serif;
  list-style: none;
}
ul {
  padding-left: 0px;
}
</style>
