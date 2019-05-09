<template>
  <div>
    <div class="banner">
      <div class="main-title">VariouX cardMaker</div>
      <div class="sub-title">make your own styled card <i class="fas fa-arrow-alt-circle-right"></i></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../assets/css/global.scss';
  .banner{
    height: 150px;
    background-image: url('../assets/img/banner.jpg');
    background-position: center center;
    background-size: cover;
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.16);
    transition: .3s;
    position: relative;
    cursor: pointer;
    &>.logo{
      height: 130px;
      width: 130px;
      float: left;
      border-radius: 20%;
      top: 10px;
      position: relative;
      left: 100px;
    }
    &>.main-title{
      color: $main-white;
      font-size: 35px;
      text-align: center;
      font-weight: bold;
      padding-top: 34px;
    }
    &>.sub-title{
      color: $main-text-black;
      font-size: 25px;
      text-align: center;
      font-weight: bold;
      &>i{
        position: relative;
        top: 4px;
        color: $main-white;
        font-size: 27px;
        animation: moving 2s infinite;
      }
    }
  }
  @keyframes moving {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(10px);
      
    }
    100% {
      transform: translateX(0);
    }
  }
  .desc{
    width: 100%;
    height: 500px;
    border: 1px solid #000;
  }

</style>
