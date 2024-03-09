<script >
import DefaultUserProfilePhoto from '@/assets/DefaultUserPhoto.jpg'
export default {
  name: "UserItem",
  props: {
    user:{
      email:String,
      username:String,
    }
  },
  data() {
    return {
      DefaultUserProfile: DefaultUserProfilePhoto
    }
  }
}
</script>
<template>
  <div class="user-item-wrapper">
    <img :src="DefaultUserProfile" alt="">
    <div class="user-info">
      <span class="user-name">{{ $props.user.username }}</span>
      <span class="user-email">{{ $props.user.email }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.user-item-wrapper {
  display: flex;
  border-radius: 10px;
  flex-shrink: 0;
  box-shadow: 0 0 10px 0 #0000001A;
  cursor: pointer;
  overflow: hidden;
}
.user-item-wrapper:hover{
  background-color: #E0E0E0;
}
img {
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-right: 1px solid #E0E0E0
}
.user-info {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px 15px;
}
.user-item-wrapper:hover{
  background-color: #E0E0E0;
}
.user-name {
  font-weight: 600;
  color: #333333;
}
.user-email {
  font-weight: 400;
  color: #76787D;

}
.user-name, .user-email{
  font-size: 14px;
  max-width: 150px;
}
</style>