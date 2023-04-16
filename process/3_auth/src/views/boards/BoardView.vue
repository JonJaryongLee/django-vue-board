<template>
  <div>
    <h1>BoardView</h1>
    <AppUsername />
    <AppLoading />
    <AppLogout />
    <BoardList />
  </div>
</template>

<script>
import AppUsername from "@/components/common/AppUsername.vue";
import AppLoading from "@/components/common/AppLoading.vue";
import AppLogout from "@/components/common/AppLogout.vue";
import BoardList from "@/components/boards/board/BoardList.vue";

export default {
  components: { AppUsername, AppLoading, AppLogout, BoardList },
};
</script>
