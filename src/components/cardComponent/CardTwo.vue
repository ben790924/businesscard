<template>
  <div>
    <div class="main">
      <div class="top">
        <img class="logo" :src="image" alt="">
        <span :style="{color:color1}">{{title}}</span>
        <span :style="{color:color2}">{{subTitle}}</span>
      </div>
      <div class="mid-banner">
        <div class="job" :style="{color:color4}">{{job}}</div>
        <div class="name" :style="{color:color3}">{{name}}</div>
      </div>
      <div class="info">
        <i-tooltip content="Click Me Twice"><div class="address" @dblclick="inputisOpen = 1" v-show="inputisOpen!=1">{{address}}</div></i-tooltip>
        <input type="text" v-model="address" v-show="inputisOpen==1" @keyup.enter="inputShow()">
        <div class="phone-fax-email">
          <span @dblclick="inputisOpen = 2" v-show="inputisOpen!=2"><i class="fas fa-phone"></i> <b> :</b> {{phoneNum}} <b> / </b> </span>
          <input type="text" v-model="phoneNum" v-show="inputisOpen==2" @keyup.enter="inputShow()">
          <span @dblclick="inputisOpen = 3" v-show="inputisOpen!=3"><i class="fas fa-fax"></i> <b> :</b> {{fax}} <b> / </b> </span>
          <input type="text" v-model="fax" v-show="inputisOpen==3" @keyup.enter="inputShow()">
          <span @dblclick="inputisOpen = 4" v-show="inputisOpen!=4"><i class="fas fa-envelope-open-text"></i> <b> :</b> {{email}}</span>
          <input type="text" v-model="email" v-show="inputisOpen==4" @keyup.enter="inputShow()">
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
  name:'CardTwo',
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
    image:{
    },
    color1:{},
    color2:{},
    color3:{},
    color4:{},

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
      size:100,
      dataURL2:'',
    }
  },
  methods:{
    inputShow(){
      this.inputisOpen = null;
    },
    createImageData(){
      html2canvas(document.querySelector(".main")).then(canvas => {
        this.dataURL2 = canvas.toDataURL("image/png");
        this.$emit('emitDataUrl2',this.dataURL2);
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
  &>.top{
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    background: linear-gradient(to right, #707070 18%, #444444 53%, #474749 100%);
    &>.logo{
      width: 80px;
      height: 80px;
      border-radius: 50%;
      display: inline-block;
      margin: 10px 0 0 30px;
    }
    &>span:nth-child(2){
      font-size: 43px;
      font-weight: bold;
      vertical-align: top;
      line-height: 96px;
      margin-left: 30px;
      color: $main-white;
    }
    &>span:nth-child(3){
      font-size: 25px;
      position: relative;
      top: -27px;
      left: 12px;
      color: $main-white;
    }
  }
  &>.mid-banner{
    width: 100%;
    height: 180px;
    box-sizing: border-box;
    background-image: url('../../assets/img/midbanner.jpg');
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: cover;
    &>.name{
      float: right;
      font-size: 3.3vw;
      margin-top: 53px;
      margin-right: 15px;
      color: $main-text-black;
    }
    &>.job{
      float: right;
      font-size: 1.8vw;
      margin-right: 100px;
      margin-top: 74px;
      color: $main-gray;
    }
  }
  &>.info{
    color: $main-white;
    width: 100%;
    height: 120px;
    background: linear-gradient(to right, #707070 18%, #444444 53%, #474749 100%);
    font-size: 1.5vw;
    font-weight: 300;
    cursor: pointer;
    letter-spacing: 2px;
    &>input{
      margin: 32px 0 10px 30px;
      width: 500px;
      height: 30px; 
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
    .address{
      padding: 22px 0 10px 30px;
      font-family: serif;
    }
    &>.phone-fax-email{
      padding-left: 30px;
      font-family: serif;
      &>span{
        font-size: 1.3vw;
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
