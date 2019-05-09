<template>
  <div>
    
    <div class="main">
      <i-modal v-model="modalShow" title="Just reminding ...">
        <p>Try To Drag Logo !</p>
      </i-modal>
      
      <div class="left" ref="leftPanel">
        <img class="logo" :src="image" @mousedown.prevent="dragLogo($event)" ref="logoDom">
        <div class="title" :style="{color:color1}">{{title}}</div>
        <div class="sub-title" :style="{color:color2}">{{subTitle}}</div>
      </div>
      <div class="right">
        <div class="move-tip"  @click="modalShow = true,hideInfo = false" v-show="hideInfo"><i class="fas fa-info-circle"></i></div>
        <div class="top">
          <div class="name" :style="{color:color3}">{{name}}</div>
          <div class="job" :style="{color:color4}">{{job}}</div>
        </div>
        
          <div class="down">
          <div class="phone" @dblclick="inputisOpen = 1">
            <i class="fas fa-phone"></i>
            <i-tooltip content="Double Click Me"><div v-show="inputisOpen!=1">{{phoneNum}}</div></i-tooltip>
            <input type="text" v-model="phoneNum" v-show="inputisOpen==1" @keyup.enter="inputShow()">
          </div>
          <div class="email-web"  @dblclick="inputisOpen = 2">
            <i class="fas fa-globe"></i>
            <i-tooltip content="Double Click Me"><div v-show="inputisOpen!=2">{{email}}</div></i-tooltip>
            <input type="text" v-model="email" v-show="inputisOpen==2" @keyup.enter="inputShow()">
          </div>
          <div class="address" @dblclick="inputisOpen = 3">
            <i class="fas fa-home"></i>
            <i-tooltip content="Double Click Me"><div v-show="inputisOpen!=3">{{address}}</div></i-tooltip>
            <input type="text" v-model="address" v-show="inputisOpen==3" @keyup.enter="inputShow()">
          </div>
        </div>
        
        
      </div>
    </div>
      <button class="finishCardBtn" @click="createImageData">FINISH</button>
      
  </div>
</template>

<script>
import html2canvas from 'html2canvas';
import {Tooltip, Modal} from 'iview';

export default {
  components:{
    'i-tooltip':Tooltip,
    'i-modal':Modal,
  },
  props:{
    title:{
      type:String,
      default: 'CompanyName',
    },
    subTitle:{
      type:String,
      default: 'Life Is Good',
    },
    name:{
      type:String,
      default:'Nancy',
    },
    job:{
      type:String,
      default: 'Designer',
    },
    
    image:{
      type: String,
    },
    color1:{
      type: String,
    },
    color2:{
      type: String,
    },
    color3:{
      type: String,
    },
    color4:{
      type: String,
    },
  },
  data(){
    return {
      phoneNum:'0988844555',
      email:'Avengers4@gmail.com',
      address:'335 new york Sherwood St.Park Ridge',
      inputisOpen: false,
      size:200,
      dataURL1:'',
      modalShow: false,
      hideInfo:true,
    }
  },
  methods:{
    dragLogo(ev) {
      
      let dowX = ev.offsetX;
      let dowY = ev.offsetY;
      let that = this;
      let leftPanel = this.$refs.leftPanel;
      leftPanel.onmousemove = function(ev){
        that.$refs.logoDom.style.position = 'absolute';
        that.$refs.logoDom.style.left = ev.clientX - dowX -80 + 'px';
        that.$refs.logoDom.style.top = ev.clientY - dowY  + 'px';
      }
      leftPanel.onmouseup = function(){
        leftPanel.onmousemove = leftPanel.onmouseup = null;
      }
    },
  
    inputShow(){
      this.inputisOpen = null;
    },
    createImageData(){

      html2canvas(document.querySelector(".main")).then(canvas => {
        this.dataURL1 = canvas.toDataURL("image/png");
        this.$emit('emitDataUrl',this.dataURL1);
      });
      this.$emit('emitCheckedImage');
    },  
  },
  
  

}
</script>

<style scoped lang="scss">
@import '../../assets/css/global.scss';
  .main{
    width: 70%;
    height: auto;
    box-sizing: border-box;
    white-space: nowrap;
    margin: 0 auto 35px;
    box-shadow: 10px 10px 20px $main-text-black;
    display: flex;
    &>.left{
      width: 50%;
      height: auto;
      box-sizing: border-box;
      background: linear-gradient(230deg,#7C7C7C 0% , #7C7C7C 40%,$main-black 100% );
      
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      &>.logo{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        cursor: pointer;
      }
      &>.title{
        font-size: 30px;
        color: $main-white;
      }
      &>.sub-title{
        font-size: 18px;
        color: $main-border-grey;
        margin-top: 5px;
      }
    }
    &>.right{
      width: 50%;
      height: 100%;
      box-sizing: border-box;
      float: left;
      position: relative;
      &>.move-tip{
        position: absolute;
        top: -14px;
        right: -10px;
        font-size: 35px;
        color: $main-white;
        cursor: pointer;
        &:hover{
          color: $main-yellow;
        }
    }
      &>.top{
        width: 100%;
        height: 8vw;
        background: linear-gradient(left, #f8825f 0%,  #f67b55 40%,  #fb7349 80%,  #fb6a3e 100%);
        border: 4px solid $main-border-grey;
        box-sizing: border-box;
        &>.name{
          font-size: 2.6vw;
          text-align: center;
          color: $main-white;
          font-weight: bold;
          padding-top: 8px;
        }
        &>.job{
          font-size: 2vw;
          text-align: center;
          font-weight: bold;
          color: $main-white;
        }
      }
      &>.down{
        width: 100%;
        height: 278px;
        box-sizing: border-box;
        color: $main-text-black;
        &>div{
          height: 33.333%;
          width: 100%;
          // line-height: 93.266px;
          word-break: break-all;
          color: $main-white;
          white-space: normal;
          font-size: 1vw;
          background-color: $neutral900;
          position: relative;
          cursor: pointer;
          &>i{
            font-size: 2vw;
            margin: 0 22px 0 30px;
            position: relative;
            top: 31px;
          }
          &>input{
          width: 60%;
          height: 30px;
          padding: 5px;
          font-size: 16px;
          border: none;
          z-index: 999;
          background-color: antiquewhite;
          border-radius: 5px;
          position: absolute;
          top: calc(50% - 15px);
        }
        }
        &>.phone{
          position: relative;
          border-bottom: 1px solid $main-border-grey;
          border-left: 4px solid $main-yellow;
          box-sizing: border-box;
          &>i{
            color: $main-yellow;
            
          }
          &>div{
            position: absolute;
            top: 36px;
            left: 89px;
            line-height: 1;
            width: 65%;
            height: 40px;
          }
        }
        &>.email-web{
          position: relative;
          border-bottom: 1px solid $main-border-grey;
          border-left: 4px solid $main-red;
          box-sizing: border-box;
          &>i{
            color: $main-red;
          }
          &>div{
            position: absolute;
            top: 36px;
            left: 89px;
            line-height: 1;
            width: 65%;
            height: 40px;
          }
        }
        &>.address{
          position: relative;
          border-left: 4px solid $main-blue;
          box-sizing: border-box;
          &>i{
            color: $main-blue;
          }
          &>div{
            position: absolute;
            top: 28px;
            left: 89px;
            line-height: 1;
            width: 65%;
            height: 40px;
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
      color: $main-dark-blue;
      font-size: 1.3vw;
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
