<template>
  <div id="app">
    <transition name="pageTransition" mode="out-in">
      <router-view v-if="!phoneDetected"></router-view>
    </transition>
    <div v-if="phoneDetected" class="onlyPC">Only Desktop is Allowed</div>
  </div>
</template>

<script>
import 'iview/dist/styles/iview.css';
export default {
  name: 'app',
  data(){
    return{
      phoneDetected:false,
    }
  },
  created(){
    if(window.md.mobile() !== null){
      this.phoneDetected = true;
    }
  }

}
</script>

<style lang="scss">
  *{
    margin: 0;
    padding: 0;
    font-family: 'Archivo Narrow', sans-serif;
  }
  html,body{
    background-color: #DFE4E8;
    height: 100%;
  }
  #app{
    width: 90%;
    height: 100%;
    margin: 0 auto;
    background-color: #ffffff;
    &>.onlyPC{
      width: 100%;
      height: 100%;
      font-size: 8vw;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
    }
  }
  .pageTransition-enter-active,{
    animation: coming .5s;
    opacity: 0;
  }
  .pageTransition-leave-active{
    animation: going .5s;
  }
  @keyframes coming{
    from{
      transform: translateY(-20px);
      opacity: 0;
    }
    to{
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes going{
    from{
      transform: translateY(0);
    }
    to{
      transform: translateY(20px);
      opacity: 0;
    }
  }
</style>
