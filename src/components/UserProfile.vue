<script>
import {mapMutations, mapState} from "vuex";
import DefaultUserProfilePhoto from '@/assets/DefaultUserPhoto.jpg'
import Loader from "@/components/Loader.vue";

export default {
  name: "UserProfile",
  components: {Loader},
  computed: mapState([
    "users",
    'userProfile',
    'isLoadingUserProfile',
    "fetchUserProfileError"
  ]),
  methods: mapMutations([
    "setUserProfile"
  ]),
  watch: {
    users(users) {
      if (this.userProfile) {
        if (!users.some((user) => user.id === this.userProfile.id)) {
          this.setUserProfile(null)
        }
      }
    },
    fetchUserProfileError(error){
      alert(error)
    }
  },
  data() {
    return {
      DefaultUserProfilePhoto
    }
  },
}
</script>

<template>
  <div v-if="!isLoadingUserProfile && !userProfile" class="default-user">
    <span>Выберите сотрудника, чтобы посмотреть его профиль</span>
  </div>
  <Loader v-else-if="isLoadingUserProfile"/>
  <div v-else-if="userProfile" class="user-profile-wrapper">
    <img :src="DefaultUserProfilePhoto" alt="">
    <div class="user-info">
      <div class="main-user-info">
        <h6>{{ userProfile.name }}</h6>
        <span><b>email:</b> {{ userProfile.email }}</span>
        <span> <b>phone:</b> {{ userProfile.phone }}</span>
      </div>
      <div class="about-user">
        <h6>О себе:</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.default-user {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  font-weight: 400;
  font-size: 14px;
  color: #76787D;
}

.user-profile-wrapper {
  margin: 30px 21px;
  display: flex;
  gap: 60px;

  img {
    width: 424px;
    height: 286px;
    border: 1px solid #E0E0E0;
  }
}

.user-detail-info {
  display: flex;
  flex-direction: column;
}

h6 {
  font-weight: 600;
  font-size: 16px;
}

span b {
  font-weight: 600;
  font-size: 14px;
  color: #000000;
}

span, p {
  font-weight: 400;
  font-size: 14px;
  color: #76787D;
}

.main-user-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.about-user {
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 20px;
}
</style>