<template>
  <div style="min-height: 100%;" class="topDiv">
    <base-header></base-header>
    <div class="whole">
      <div id="main-title">
        The Way To Make A Business Card Without Any Code
      </div>
      <div class="big-button" @click="makeWeb">Create a New Card 
        <i class="fas fa-long-arrow-alt-right"></i>
      </div>
    </div>
  </div>
</template>

<script>

import BaseHeader from '../components/BaseHeader.vue';
export default {
  components:{
    BaseHeader,
  },
  methods:{
    goTo(page='/'){
      this.$router.push(page);
    },
    makeWeb() {
      this.$router.push('/makeweb');
    },
  },
  
}
</script>

<style scoped lang="scss">
@import '../assets/css/global.scss';

.topDiv{
  background-image: url('../assets/img/homeBanner.jpg');
  background-position: center center;
  background-size: cover;
}
.whole{
  width: 100%;
  height: 100%;
  padding-top: 300px;
  &>#main-title{
    font-size: 50px;
    color: $main-white;
    margin: 0 auto;
    font-weight: bold;
    text-align: center;
  }
  &>.big-button{
    cursor: pointer;
    width: 250px;
    height: 50px;
    text-align: center;
    color: $main-white;
    line-height: 50px;
    font-size: 18px;
    background-color: $main-blue;
    margin: 40px auto;
    border-radius: 8px;
    transition: .4s;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.26);
    &>i{
      font-size: 18px;
      margin-left: 5px;
    }
    &:hover{
      background-color: $main-dark-blue;
      transition: .4s;
    }
  }
}

</style>
