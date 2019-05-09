<template>
  <div>
    <div class="main">
      <div class="left">
        <img class="logo" :src="image">
        <div class="company-name" :style="{color:color1}">{{title}}</div>
        <span class="sub-title" :style="{color:color2}">{{subTitle}}</span>
        <i-tooltip class="tooltip" content="Double Click Me"><div class="street" @dblclick="inputisOpen = 1" v-show="inputisOpen!==1">{{address}}</div></i-tooltip>
        <input type="text" v-model="address" v-show="inputisOpen==1" @keyup.enter="inputShow()" class="common-input">
        <i-tooltip class="tooltip" content="Double Click Me">
        <div class="tel-fax">
          <span @dblclick="inputisOpen = 2" v-show="inputisOpen!==2">tel : {{phoneNum}}</span> /  
          <input type="text" v-model="phoneNum" v-show="inputisOpen==2" @keyup.enter="inputShow()" class="common-input">
          <span @dblclick="inputisOpen = 3" v-show="inputisOpen!==3">fax : {{fax}}</span>
          <input type="text" v-model="fax" v-show="inputisOpen==3" @keyup.enter="inputShow()" class="common-input">
        </div>
        </i-tooltip>
        <i-tooltip class="tooltip" content="Double Click Me">
          <div class="email" @dblclick="inputisOpen = 4" v-show="inputisOpen!==4">email : {{email}}</div>
        </i-tooltip>
        <input type="text" v-model="email" v-show="inputisOpen==4" @keyup.enter="inputShow()" class="common-input">
      </div>
      <div class="right">
        <div class="name-job">
          <div class="name" :style="{color:color3}">{{name}}</div>
          <div class="job" :style="{color:color4}">{{job}}</div>
        </div>
        <img class="picture" :src="anotherImage">
        <input type="file" @change="onFileChange3" class="inputFile common-input">
      </div>
    </div>
    <button class="finishCardBtn" @click="createImageData">FINISH</button>
  </div>
</template>
<script>
import html2canvas from 'html2canvas';
import {Tooltip} from 'iview';
export default {
  props:{
    image:{
      type: String,
    },

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
      dataURL3:'',
      anotherImage:'https://cdn.shopifycloud.com/hatchful-web/assets/313d73fa42f04a46213abc6267b4d074.png',
      inputisOpen: false,
    }
  },
  methods:{
    createImageData(){
      html2canvas(document.querySelector(".main")).then(canvas => {
        this.dataURL3 = canvas.toDataURL("image/png");
        this.$emit('emitDataUrl3',this.dataURL3);
      });
      this.$emit('emitCheckedImage');
    },
    onFileChange3(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
    },
    createImage(file) {
      
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.anotherImage = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    inputShow(){
      this.inputisOpen = null;
    },
  },
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
  background: #303940;
  display: flex;
  
  &>.left{
    width: 70%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    &>div{
      cursor: pointer;
    }
    &>.logo{
      width: 100px;
      height: 100px;
      border-radius: 50%;
      display: block;
      margin: 23px auto 0;
    }
    &>.company-name{
      font-size: 3vw;
      color: $main-white;
      margin: 0 auto -15px;
    }
    &>.sub-title{
      margin-bottom: 20px;
    }
    &>span{
      font-size: 1.7vw;
      color: $main-orange;
      margin: 0 auto;
    }
    &>.tooltip{
      margin: 0 auto;
      .street{
      margin: 0 auto 2px;
      font-size: 1.4vw;
      color: $main-border-grey;
    }
    }
    &>.tooltip{
      .tel-fax{
      margin: 0 auto 2px;
      font-size: 1.4vw;
      color: $main-border-grey;
    }
    }
    &>.tooltip{
      .email{
      margin: 0 auto;
      font-size: 1.4vw;
      color: $main-border-grey;
    }
    }
  }
  &>.right{
    width: 30%;
    height: 100%;
    box-sizing: border-box;
    &>.name-job{
      word-break: break-all;
      white-space: normal;
      
      &>.name{
        font-size: 3vw;
        color: $main-orange;
        text-align: center;
      }
      &>.job{
        font-size: 1.3vw;
        text-align: center;
        color: $main-white;
        margin-bottom: 30px;
      }
    }
    &>.picture{
      width: 100%;
      height: 45%;
      background-color: #fff;
      float: right;
      border-radius: 10px 0 0 10px;
      margin-top: 30px;
    }
    &>.inputFile{
        display: block;
        width: 172px;
        height: 180px;
        opacity: 0;
        position: relative;
        top: -180px;
        left: 20px;
        cursor: pointer;
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

  .common-input{
    margin: 0 auto;
    margin-right: 10px;
    width: 70%;
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
</style>
