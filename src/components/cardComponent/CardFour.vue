<template>
  <div>
    <div class="main">
      <div class="wrapper">
        <div class="left">
          <img class="logo" :src="image" alt="">
          <div class="title" :style="{color:color1}">{{title}}</div>
          <div class="sub-title" :style="{color:color2}">{{subTitle}}</div>
        </div>
        <div class="right">
          <div class="name" :style="{color:color3}">{{name}}</div>
          <div class="job" :style="{color:color4}">{{job}}</div>
          <div class="address" @dblclick="inputisOpen = 1" v-show="inputisOpen!==1">{{address}}</div>
          <input type="text" v-model="address" v-show="inputisOpen==1" @keyup.enter="inputShow()" class="common-input">
          <i-tooltip class="tooltip" content="Double Click Me"><div class="phone" @dblclick="inputisOpen = 2" v-show="inputisOpen!==2">t： {{phoneNum}}</div></i-tooltip>
          <input type="text" v-model="phoneNum" v-show="inputisOpen==2" @keyup.enter="inputShow()" class="common-input">
          <div class="fax" @dblclick="inputisOpen = 3" v-show="inputisOpen!==3">f： {{fax}}</div>
          <input type="text" v-model="fax" v-show="inputisOpen==3" @keyup.enter="inputShow()" class="common-input">
          <div class="email" @dblclick="inputisOpen = 4" v-show="inputisOpen!==4">e： {{email}}</div>
          <input type="text" v-model="email" v-show="inputisOpen==4" @keyup.enter="inputShow()" class="common-input">
        </div>
      </div>
      </div>
    <button class="finishCardBtn" @click="createImageData">FINISH</button>
  </div>
</template>

<script>
import html2canvas from 'html2canvas';
import {Tooltip} from 'iview';
export default {
  name: 'cardfour',
  props:{
    title:{
      type:String,
    },
    subTitle:{
      type:String,
    },
    name:{
      type:String,
    },
    job:{
      type:String,
    },
    color1:{},
    color2:{},
    color3:{},
    color4:{},
    image:{},
  },
  components:{
    'i-tooltip':Tooltip,
  },
  data(){
    return {
      phoneNum:'0988844555',
      email:'Avengers4@gmail.com',
      address:'335 new york Sherwood St.Park Ridge',
      fax:'03050022211',
      inputisOpen: false,
      dataURL4:'',
    }
  },
   methods:{
    inputShow(){
      this.inputisOpen = null;
    },
    createImageData(){
      html2canvas(document.querySelector(".main")).then(canvas => {
        this.dataURL4 = canvas.toDataURL("image/png");
        this.$emit('emitDataUrl4',this.dataURL4);
      });
      this.$emit('emitCheckedImage');
    },
  }

}
</script>

<style lang="scss" scoped>
@import '../../assets/css/global.scss';
.main{
  width: 70%;
  height: 400px;
  box-sizing: border-box;
  white-space: nowrap;
  margin: 0 auto 35px;
  box-shadow: 10px 10px 20px $main-text-black;
  border: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('../../assets/img/card4Bgc.jpg');
  background-position: center center;
  background-size: cover;
  &>.wrapper{
    width: 57%;
    display: flex;
    justify-content: center;
    &>.left{
      width: 48%;
      height: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      overflow: hidden;
      &>.logo{
        width: 120px;
        height: 120px;
        border-radius: 9px;
      }
      &>.title{
        font-size: 32px;
        color: #FFFFFF;
        width: 120px;
        text-align: center;
        margin-top: -8px;
        letter-spacing: -3px;
        font-weight: 550;
      }
      &>.sub-title{
        font-size: 21px;
        color: $main-border-grey;
        letter-spacing: 1px;
        text-align: center;
        margin-top: -12px;
        padding-left: 8px;
      }
    }
    &>.right{
      width: 52%;
      height: 100%;
      box-sizing: border-box;
      padding-left: 10px;
      &>.name{
        font-size: 24px;
        font-weight: bold;
        color: $main-white;
        margin-top: -5px;
      }
      &>.job{
        font-size: 18px;
        color: $main-orange;
        margin-top: -9px;
        margin-bottom: 42px;
      }
      &>.address,.phone,.fax,.email{
        color: $main-white;
        font-size: 15px;
        line-height: 14px;
        margin-bottom: 2px;
        cursor: pointer;
      }
      &>.address{
        word-break: break-all;
        width: 100%;
        white-space: normal;
      }
      &>input{
        margin-right: 10px;
        width: 150px;
        height: 26px; 
        padding:1px;
        padding-left: 10px;
        border: none;
        z-index: 999;
        background-color: antiquewhite;
        border-radius: 5px;
        &:focus{
          outline: none;
        }
      }
    }
  }
}
.finishCardBtn{
      display: block;
      margin: 0 auto;
      width: 100px;
      height: 50px;
      font-size: 1.3vw;
      color: $main-dark-blue;
      margin-bottom: 13px;
      background-color: $main-green;
      border: none;
      box-shadow: 5px 5px 5px $main-shadow;
      border-radius: 20px;
      border: 3px solid $main-pink;
      cursor: pointer;
      transition: .3s;
      &:hover{
        background-color: $main-green-hover;
        transition: .3s;
        cursor: pointer;
      }
  }

</style>
