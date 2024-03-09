<script>
import UserItem from "./UserItem/UserItem.vue";
import {mapActions, mapMutations, mapState} from "vuex";
import Loader from "@/components/Loader.vue";
import {debounce} from "@/helpers/debounce.js";

export default {
  name: "SearchPanel",
  computed: {
    ...mapState([
      'users',
      'isLoadingUsers',
      'searchQuery',
      'fetchUsersError'
    ]),
  },
  methods: {
    ...mapMutations([
      'setSearchQuery',
      'setUsers',
      'setUserProfile'
    ]),
    ...mapActions([
      'fetchUserProfile',
      'fetchUsers'
    ]),
    debouncedFetchUsers:debounce(function(query) {
      this.fetchUsers(query);
    }, 500)
  },
  watch: {
    searchQuery(query) {
      if (query) {
        this.debouncedFetchUsers(query)
      } else {
        this.setUsers([])
        this.setUserProfile(null)
      }
    },
    fetchUsersError(error) {
      alert(error)
    }
  },
  components: {Loader, UserItem}
}
</script>
<template>
  <div class="search-panel-wrapper">
    <h5>Поиск сотрудников</h5>
    <input :value="searchQuery" @input="setSearchQuery($event.target.value)" placeholder="Введите id или имя"
           type="text"
           class="search-input">
    <h5>Результаты</h5>
    <span v-if="!isLoadingUsers && !users.length && !searchQuery" class="search-prompt">начните поиск</span>
    <span v-else-if="!isLoadingUsers && !users.length && searchQuery" class="no-result">ничего не найдено</span>
    <Loader v-if="isLoadingUsers"/>
    <div v-else class="users">
      <UserItem
          v-for="user in users"
          :user="user"
          :key="user.id"
          @click="fetchUserProfile(user.id)"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.search-panel-wrapper {
  padding: 27px 31px 20px 20px;
  width: 291px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  border-right: 1px solid #E0E0E0;

  h5 {
    font-weight: 600;
    font-size: 16px;
    color: #333333;
    margin-bottom: 14px;
  }

  .search-input {
    padding: 16px 24px 16px 24px;
    border: 1.5px solid #E9ECEF;
    border-radius: 10px;
    margin-bottom: 29px;
    font-size: 14px;
    color: #76787D;
    width: 100%;
  }
}

.users {
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 400px;
  padding: 6px 6px;
  margin: -6px -6px;
  gap: 18px;
}

.search-prompt, .no-result {
  font-weight: 400;
  color: #76787D;
  font-size: 14px;
}

</style>