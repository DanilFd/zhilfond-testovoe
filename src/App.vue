<script setup>
import SearchPanel from "@/components/SearchPanel/SearchPanel.vue";
import UserProfile from "@/components/UserProfile.vue";
</script>
<template>
  <div class="container">
    <header class="header">
      <h2>Жилфонд</h2>
      <span>Пользователь</span>
    </header>
    <div class="content">
      <SearchPanel/>
      <UserProfile/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin: 50px auto 0;
  width: 1266px;
  height: 590px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 26px;

  h2 {
    font-size: 32px;
    font-weight: 700;
    color: #E31F24;
  }

  span {
    font-weight: 400;
    color: #333333;
  }
}

.content {
  margin: 0 auto;
  width: 1266px;
  height: 590px;
  display: flex;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 #0000001A;
}
</style>
