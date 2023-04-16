<template>
  <div>
    <h1>CreateView</h1>
    <AppUsername />
    <AppLogout />
    <ArrowBack />
  </div>
</template>

<script>
import AppUsername from "@/components/common/AppUsername.vue";
import AppLogout from "@/components/common/AppLogout.vue";
import ArrowBack from "@/components/common/ArrowBack.vue";

export default {
  components: { AppUsername, AppLogout, ArrowBack },
};
</script>
