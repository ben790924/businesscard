<template>
  <div style="position:relative;white-space:nowrap;min-height:100%;display:flex;justify-content:space-around;" class="topDiv">
    <div class="navbar">
      <div class="back" @click="backHome">
        <i class="fas fa-arrow-left"></i>
        BACK
      </div>
      <img src="../assets/img/logo/logo.png" alt="" class="logo">
      <div class="finish" @click="notAllowDone"><router-link :to="{ name: 'done', params: { dataURLCardOne,dataURLCardTwo,dataURLCardThree,dataURLCardFour } }" v-show="dataURLCardOne.length || this.dataURLCardTwo.length || this.dataURLCardThree.length || this.dataURLCardFour.length">DONE <i class="fas fa-check"></i> </router-link>{{notDone}}</div>
      
    </div>
    <div class="side-bar">
      <transition name="inputTransition" mode="out-in">
        <div class="wrapper1" v-show="isShow == 1">
          <div class="title">Company Name ?</div>
          <input type="text" placeholder="Type Here ..." @keydown.enter="isShow = 2" v-model="title" maxlength="8">
          <div style="font-size: 1.7vw; margin-top:10px; font-weight:300">Choose Your Color <i class="fas fa-hand-point-down"></i> </div>
          <i-color recommend v-model="color1" alpha style="width:20vw;"></i-color>
        </div>
      </transition>
      <transition name="inputTransition" mode="out-in">
        <div class="wrapper2" v-show="isShow == 2">
          <div class="sub-title">Company Description ?</div>
          <input type="text" placeholder="Type Here ..." v-model="subTitle" @keydown.enter="isShow = 3" v-focus>
          <div style="font-size: 1.7vw; margin-top:10px; font-weight:300">Choose Your Color <i class="fas fa-hand-point-down"></i> </div>
          <i-color recommend v-model="color2" alpha style="width:20vw;"></i-color>
        </div>
      </transition>
      <transition name="inputTransition" mode="out-in">
        <div class="wrapper3" v-show="isShow == 3">
          <div class="heading">What is Your Name ?</div>
          <input type="text" placeholder="Type Here ..." v-model="name" @keydown.enter="isShow = 4" v-focus>
          <div style="font-size: 1.7vw; margin-top:10px; font-weight:300">Choose Your Color <i class="fas fa-hand-point-down"></i> </div>
          <i-color recommend v-model="color3" alpha style="width:20vw;"></i-color>
        </div>
      </transition>
      <transition name="inputTransition" mode="out-in">
        <div class="wrapper4" v-show="isShow == 4">
          <div class="heading">What is Your Job ?</div>
          <input type="text" placeholder="Type Here ..." v-model="job" @keydown.enter="isShow = 5" v-focus>
          <div style="font-size: 1.7vw; margin-top:10px; font-weight:300">Choose Your Color <i class="fas fa-hand-point-down"></i> </div>
          <i-color recommend v-model="color4" alpha style="width:20vw;"></i-color>
        </div>
      </transition>
      
      <transition name="inputTransition" mode="out-in">
        <div class="upload-icon" v-show="isShow == 5">
          <div class="upload-text">Upload Your Icon</div>
          <input type="file" @change="onFileChange">
        </div>
      </transition>
      <div class="prev-next">
        <div class="prev" @click="prev" :class="{'disable': disable==1}">
          <i class="fas fa-arrow-circle-left"></i>
        </div>
        <div class="next" @click="next" :class="{'disable': disable==2}">
          <i class="fas fa-arrow-circle-right"></i>
        </div>
      </div>
    </div>
    
    <div class="main-page">
      <span>Choose Card Style</span>
      <div class="select-style">
        <div class="first" @click="whichCard = 1" :class="{'clicked':whichCard == 1}">1</div>
        <div class="second" @click="whichCard = 2" :class="{'clicked':whichCard == 2}">2</div>
        <div class="third" @click="whichCard = 3" :class="{'clicked':whichCard == 3}">3</div>
        <div class="forth" @click="whichCard = 4" :class="{'clicked':whichCard == 4}">4</div>
      </div>
      <div class="card-wrapper">
        
        <card-one :color1="color1" :color2="color2" :color3="color3" :color4="color4" :title="title" :sub-title="subTitle" :name="name" :job="job" :image="image" v-if="whichCard==1"  @emitDataUrl="emitDataUrl" @emitCheckedImage="emitCheckedImage"></card-one>

        <card-two :color1="color1" :color2="color2" :color3="color3" :color4="color4" v-if="whichCard==2" :title="title" :sub-title="subTitle" :name="name" :job="job" :image="image"  @emitDataUrl2="emitDataUrl2" @emitCheckedImage="emitCheckedImage"></card-two>

        <keep-alive>
          <card-three :color1="color1" :color2="color2" :color3="color3" :color4="color4" :title="title" :sub-title="subTitle" :name="name" :job="job"  v-if="whichCard==3" :image="image"  @emitDataUrl3="emitDataUrl3" @emitCheckedImage="emitCheckedImage"></card-three>
        </keep-alive>

        <card-four :color1="color1" :color2="color2" :color3="color3" :color4="color4" v-if="whichCard==4" :title="title" :sub-title="subTitle" :name="name" :job="job" :image="image"  @emitDataUrl4="emitDataUrl4" @emitCheckedImage="emitCheckedImage"></card-four>
        
        <check-mark v-show="comfirmUrlData"></check-mark>
      </div>
      <div class="image-tip" v-if="imageTip"><i class="fas fa-hand-point-left"></i> Upload Image</div>
    </div>
  </div>
</template>

<script>
import CardOne from '../components/cardComponent/CardOne.vue';
import CardTwo from '../components/cardComponent/CardTwo.vue';
import CardThree from '../components/cardComponent/CardThree.vue';
import CardFour from '../components/cardComponent/CardFour.vue';
import CheckMark from '../components/CheckMark.vue';
import { ColorPicker} from 'iview';
import { setTimeout } from 'timers';

export default {
  name: 'makeweb',
  components:{
    CardOne,
    CardTwo,
    CardThree,
    CardFour,
    CheckMark,
    'i-color': ColorPicker,
  },
  data() {
    return {
      title: '',
      subTitle: '',
      name: '',
      job: '',
      isShow: 1,
      imageTip:false,
      whichCard:1,
      dataURLCardOne:'',
      dataURLCardTwo:'',
      dataURLCardThree:'',
      dataURLCardFour:'',
      comfirmUrlData:false,
      disable:null,
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxNH25F0ARNDaTBCDLwswcx4oxduxyMSGxIskw-hOPvSEGjO0j',
      color1:'#FFFFFF',
      color2:'#FFFFFF',
      color3:'#FFFFFF',
      color4:'#FFFFFF',
    };
  },
  
  methods:{
    backHome() {
      this.$router.push('/');
    },
    DonePage(){
      this.$router.push('/done');
    },
    
    emitDataUrl(a){
      this.dataURLCardOne = a;
    },
    emitDataUrl2(a){
      this.dataURLCardTwo = a;
    },
    emitDataUrl3(a){
      this.dataURLCardThree = a;
    },
    emitDataUrl4(a){
      this.dataURLCardFour = a;
    },
    emitCheckedImage(){
      this.comfirmUrlData = true;
      setTimeout(()=>{
        this.comfirmUrlData = false;
      },10000)
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    notAllowDone(){
      if(this.dataURLCardOne.length || this.dataURLCardTwo.length || this.dataURLCardThree.length || this.dataURLCardFour){return;
}else{
        this.$Notice.warning({title:'You have to click finish button first!'});
      }
    },
    prev(){
      if(this.isShow>1){
        this.disable = null;
        this.isShow--;
      }else{
        this.disable = 1;
      }
      
    },
    next(){
      if(this.isShow<5){
        this.disable = null;
        this.isShow++;
      }else{
        this.disable = 2;
      }
    },
    
  },
  watch:{
    whichCard:function(){
      this.imageTip = false;
      if(this.whichCard == 3){
        setTimeout(() => {
          this.imageTip = true;
          setTimeout(()=>{
            this.imageTip = false;
          },8000)
        }, 1000);
      }else{
        this.imageTip = false;
      }
    },
    isShow:function(value){
      if(value == 1){
        this.disable = 1;
      }else if(value == 5){
        this.disable = 2;
      }
    },
  },
  computed:{
    notDone(){
      let talk = 'Not Done!';
      if(this.dataURLCardOne.length||this.dataURLCardThree.length||this.dataURLCardTwo.length || this.dataURLCardFour.length){
        talk = '';
      }
      return talk;
    },
    
  },

  
}
</script>

<style lang="scss" scoped>
@import '../assets/css/global.scss';
.topDiv{
  position:relative;
  white-space:nowrap;
  min-height:100%;
  background-image: url('../assets/img/bgc2.jpg');
  background-size: cover;
  background-position: center center;
}
  .navbar{
    width: 100%;
    height: 110px;
    box-shadow: 0 5px 3px $main-shadow;
    position: absolute;
    z-index: 999;
    &>.back{
      line-height: 40px;
      float: left;
      margin: 35px 100px 0 69px;
      width: 100px;
      height: 40px;
      border: 2px solid $main-blue;
      border-radius: 5px;
      font-weight: bold;
      text-align: center;
      cursor: pointer;
      &:hover{
        background-color: $main-blue-hover;
        color: $main-white;
      }
    }
    &>.logo{
      width: 100px;
      height: 100px;
      position: absolute;
      left: calc(50% - 50px);
      top: 5px;
      border-radius: 10px;
    }
    &>.finish{
      float: right;
      width: 100px;
      height: 40px;
      border: 2px solid $main-blue;
      border-radius: 5px;
      margin: 35px 69px 0 0;
      font-weight: bold;
      line-height: 40px;
      text-align: center;
      background-color: transparent;
      cursor: pointer;
      &>a{
        color: $main-text-black;
        display: block;
        width: 100%;
        height: 100%;
      }
      &:hover{
        &>a{
          color: $main-white;
        }
        background-color: $main-blue-hover;
        
      }
    }
  }
  .main-page{
    width: 69.8%;
    height: 100%;
    padding-top: 110px;
    &>span{
      font-size: 2.3vw;
      margin: 15px;
      display: inline-block;
      font-weight: bold;
    }
    &>.select-style{
      width: 70%;
      height: 80px;
      margin: 0 auto;
      border-radius: 8px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      &>div{
        display: inline-block;
        text-align: center;
        width: 70px;
        height: 70px;
        line-height: 70px;
        box-sizing: content-box;
        background-color: $main-gray;
        border-radius: 50%;
        font-size: 30px;
        font-weight: bold;
        color: $main-white;
        cursor: pointer;
        &:hover{
          box-shadow: 2px 3px 7px $main-shadow;
        }
      }
    }
    &>.card-wrapper{
      width: 100%;
      height: 77%;
      margin: 30px auto 0;
    }
    &>.image-tip{
      position: absolute;
      top: 38%;
      right: 1%;
      font-size: 1.4vw;
      transform: rotate(-45deg);
      &>i{
        animation: pointing 1s infinite;
      }
    }
  }
  @keyframes pointing{
    0%{
      transform: translateX(0);

    }
    50%{
      transform: translateX(-16px)
    }
    100%{
      transform: translateX(0);
    }
  }
  .side-bar{
    padding-top: 110px;
    position: relative;
    &>.wrapper1,.wrapper2,.wrapper3,.wrapper4{
      text-align: center;
      font-size: 2.3vw;
      font-weight: bold;
      height: 180px;
      margin-top: 200px;
      &>input{
        border: 0;
        width: 70%;
        height: 60px;
        font-size: 2.1vw;
        text-align: center;
        border-bottom: 4px solid;
        background-color: transparent;
        &:focus{
          outline: none;
        };
      }
    };
    
    &>.upload-icon{
      width: 100%;
      height: 200px;
      margin-top: 200px;
      &>.upload-text{
        font-size: 2.3vw;
        font-weight: bold;
        margin: 20px 0 20px 20px;
      }
      &>input{
        margin-left: 20px;
        font-size: 1.1vw;
        cursor: pointer;
        &:focus{
          outline: none;
          cursor: pointer;
        }
      }
    }
    &>.prev-next{
      font-size: 3vw;
      display: flex;
      width: 15vw;
      justify-content: space-around;
      position: absolute;
      top: 60%;
      left: 10%;
      &>div{
        cursor: pointer;
        &>i{
          border-radius: 50%;
        }
        &:hover{
          color: $main-green;
        }
      }
    }
  }
  .inputTransition-enter-active,{
    animation: coming .5s;
    animation-delay: .5s;
    opacity: 0;
  }
  .inputTransition-leave-active{
    animation: going .5s;
    
  }
  @keyframes coming{
    from{
      opacity: 0;
      transform: translateX(-20px);
    }
    to{
      opacity: 1;
      transform: translateX(0px);
    }
  }
  @keyframes going{
    0%{
      opacity: 0;
    }
    100%{
      opacity: 0;

    }
  }
  .clicked{
    border: 4px solid $main-yellow;
    line-height: 74px;
  }
  .disable{
    color: $main-shadow;
  }
</style>
