<template>
  <div class="topWrapper">
    <!-- <div class="main">
      
    </div>-->
    <div class="view">
      <div class="container">
        <img class="thankYou" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82974/yep.png">
        <p class="tagline">Wahoo! Thanks for Using VariouX, You Can <b>Download</b> Your Business Card Below Now ! </p>
				<a download="MyCard.png" class="download-link" :href="dataURLCardOne || dataURLCardTwo || dataURLCardThree || dataURLCardFour">{{whichCardDownload}}</a>
      </div>
			
      <div class="actions">
        <a class="button" @click="goHome">Go Home</a>
        <p class="description">"Bringing more creativity into the world."</p>
      </div>
    </div>
		<div class="footer">
			<div class="about-varioux">
				<img class="logo" src="../assets/img/logo/logo.png">
				<div class="desc">
          <span>VaroisX</span>
          <p>Lorem ipsum dolor sit amet consectetur adipariatur  explicabo dolordantium ipsa minus. Facere ullam nisi laborum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, magnam.</p>
        </div>
			</div>
			<div class="about-me">
				<div class="picture"></div>
				<div class="intro">
					<span>About Me</span>
					<p>My name is Ben, I live in Taoyuan, Taiwan(ROC). <b>I'm a Front-End Developer</b>. I enjoy every moments that my programs run right and work perferctly. Besides coding, I like to travel and have fun with friends as well. </p>
				</div>
			</div>
			<div class="hire-me">
				<p class="hoar">HIRE ME</p>
				<div class="skill">
					<span>Vue.js</span>
					<span>Vuex</span>
					<span>Vue-Router</span>
					<span>SPA</span>
					<span>Javascript</span>
					<span>axios</span>
					<span>Bootstrap4</span>
					<span>RWD</span>
					<span>RESTful API</span>
					<span>HTTP</span>
					<span>SCSS</span>
					<span>Bootstrap4</span>
					<span>JQuery</span>
					<span>HTML5</span>
					<span>CSS</span>
				</div>
				<ul class="social-media">
					<i-tooltip content="Github" placement="top-start"><a href="https://github.com/ben790924" target="_blank"><li><i class="fab fa-github"></i></li></a></i-tooltip>
					<i-tooltip content="Email" placement="top-start"><a href="mailto:ben790924@gmail.com" target="_blank"><li><i class="fas fa-envelope"></i></li></a></i-tooltip>
					<i-tooltip content="Resume" placement="top-start"><a href="https://www.cakeresume.com/5afa59-654ad2#_=_" target="_blank"><li><i class="fas fa-file"></i></li></a></i-tooltip>
				</ul>
				<div class="resume-link"></div>
			</div>
		</div>
  </div>
</template>

<script>
import {Tooltip} from 'iview';
export default {
  name: "done",
  props: ["dataURLCardOne", "dataURLCardTwo","dataURLCardThree","dataURLCardFour"],
  components:{
		'i-tooltip': Tooltip,
  },
  data() {
    return {
			
    };
  },
  methods:{
    goHome(){
			this.$router.push('/');
		},
  },
	computed:{
		whichCardDownload(){
			let num = '';
			if(this.dataURLCardOne.length){
				num = '1';
			}else if(this.dataURLCardTwo.length){
				num = '2';
			}else if(this.dataURLCardThree.length){
				num = '3';
			}else if(this.dataURLCardFour.length){
				num = '4'
			}
			let text = `Download Card${num}.png`;
			return text;
		},
		
	},
};
</script>

<style lang="scss" scoped>
@import '../../src/assets/css/global.scss';
.topWrapper {
  background-image: url('../assets/img/doneBgc.jpg');
  background-size: cover;
  background-position: center center;
  position: relative;
  width: 100%;
  height: 100%;
  font-size: 16px;
  line-height: 1;
  font-family: sans-serif;
  font-weight: bold;
}

.view {
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 100%;
	height: 100%;
	font-family: "Helvetica Neue", sans-serif;
	// background-color: #40354E;
	text-align: center;
	padding-left: 16px;
	padding-right: 16px;
	align-self: center;
	margin: 0 auto;
	
	@media( min-width: 375px) {
		padding-left: 48px;
		padding-right: 48px;
	}
	
	@media( min-width: 768px) {
		max-width: 500px;
		padding-top: 96px;
		padding-bottom: 200px;
	}
}// View

.container {
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	justify-content: center;
	&>.download-link{
		font-size: 2.5vw;
		color: $main-white;
		margin-top: 40px;
		&:hover{
			color: $main-green-hover;
		}
	}
}

.thankYou {
	width: 100%;
	height: auto;
	margin-bottom: 48px;
}

.tagline {
	font-size: 21px;
	color: rgba( 255, 255, 255, 1 );
	font-weight: 500;
	line-height: 1.4;
	
	@media( min-width: 768px) {
		// margin-bottom: 96px;
	}
}

.actions {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin-bottom: 32px;
}

.button {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	background-color: #FF596F;
	border-radius: 48px;
	font-size: 14px;
	line-height: 1;
	font-weight: 500;
	height: 48px;
	padding-left: 24px;
	padding-right: 24px;
	color: white;
	text-decoration: none;
	transition: opacity 300ms ease-in-out;
	font-size: 2vw;

	&:active,
	&:hover {
		color: white;
	}
	&:active {
		transition-duration: 0ms;
		opacity: 0.6;
	}
}
.description {
	font-size: 18px;
	color: rgba( 255, 255, 255, 0.5 );
	font-weight: 500;
	line-height: 1.4;
	width: 100%;
	margin-top: 24px;
}
.footer{
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 200px;
  background-color: rgba(135, 155, 43, .85);
  
	display: flex;
	&>div{
		width: 33.333%;
		box-sizing: border-box;
	}
	&>.about-varioux{
    display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
    color: $main-dark-blue;
		&>.logo{
			width: 120px;
			height: 120px;
      border-radius: 50%;
      margin-left: 14px;
		}
		&>.title{
			font-size: 1.8vw;			
      margin: 10px;
      margin-left: 15px;
      font-weight: bold;
		}
		&>.desc{
			padding: 2px 10px;
			font-weight: 300;
      width: 240px;
      &>span{
        font-size: 1.8vw;
        font-weight: bold;
      }
      &>p{
				padding: 5px 0;
				line-height: 18px;
				font-weight: 300;
			}
		}
	}
	&>.about-me{
		display: flex;
		align-items: center;
		justify-content: center;
		&>.picture{
			background-image: url('../assets/img/handsome.jpg');
			width: 120px;
			height: 120px;
			background-position: center -60px;
			background-size: 120px;
			background-repeat: no-repeat;
			box-sizing: border-box;
			border-radius: 50%;
			border: 2px solid $main-green-hover;
		}
		&>.intro{
			width: 240px;
			padding-left: 10px;
			color: $main-dark-blue;
			&>span{
				font-size: 1.8vw;
				
			}
			&>p{
				padding: 5px 0;
				line-height: 18px;
				font-weight: 300;
			}
		}
	}
	&>.hire-me{
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		&>.hoar{
			font-size: 3vw;
      color: $main-dark-blue;
      display: inline-block;
      position: relative;
      font-weight: 500;
      color: transparent;
      animation: hue 1.5s linear infinite;
      background-image: linear-gradient(to right bottom, rgb(255,0,0), rgb(255,128,0), rgb(255,255,0), rgb(0,255,0), rgb(0,255,128), rgb(0,255,255), rgb(0,128,255), rgb(0,0,255), rgb(128,0,255), rgb(255,0,255), rgb(255,0,128));
      background-clip: text;
		}
		&>.skill{
			display: flex;
			flex-wrap: wrap;
			
			height: 100px;
			width: 99%;
			overflow: auto;
			text-overflow: ellipsis;
			color: $main-white;
			&>span{
				margin: 10px 3px;
				font-size: 15px;
				background-color: $main-text-black;
				border-radius: 10px;
				padding: 5px;
			}
		}
		&>.social-media{
      li{
      display: inline-block;
      margin-left: 10px;
      cursor: pointer;
        &>i{
          font-size: 26px;
          margin-right: 40px;
          color: $neutral900;
        }
      }
		}
	}
}

@keyframes hue {
   from {
      filter: hue-rotate(0);
   }

   to {
      filter: hue-rotate(-360deg);
   }
}
</style>
