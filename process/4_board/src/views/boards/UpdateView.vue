<template>
  <div>
    <h1>UpdateView</h1>
    <AppLoading />
    <AppUsername />
    <AppLogout />
    <ArrowBack />
  </div>
</template>

<script>
import AppLoading from "@/components/common/AppLoading.vue";
import AppUsername from "@/components/common/AppUsername.vue";
import AppLogout from "@/components/common/AppLogout.vue";
import ArrowBack from "@/components/common/ArrowBack.vue";

export default {
  components: { AppLoading, AppUsername, AppLogout, ArrowBack },
}
</script>
