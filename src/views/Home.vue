
<template>
  <div>
    <div class="row">
      <div class="col-lg-4 col-md-4 col-sm-12"></div>
      <div class="col-lg-4 col-md-4 col-sm-12">
        <button type="button" class="btn btn-light">Refresh</button>
      </div>
      <div class="col-lg-4"></div>
    </div>

    <div class="row"> 
      <div class="col-lg-6 col-md-6 col-sm-12">
        <div class="my-container">
          <div class="row">
            <div class="controls col-md-3" style="padding-top:10px; padding-bottom:20px; padding-left:10px; padding-right: 10px">
              <i class="far fa-heart" style="margin-right: 10px"></i>Save
            </div>
          </div>

          <div class="row">
            <div class="controls col-lg-3 col-md-2" id="title-controls">
            </div>
            
            <div class="col-lg-9 col-md-9 col-sm-7 col-xs-9">
              <h1 v-bind:style="titleFont1" class="titleFont">{{titleFont1.fontFamily}}</h1>
            </div>
          </div>

          <div class="row">
            <div class="controls col-lg-3 col-md-2" style="height:500px">
            <a href="google.com" target="_blank">hi</a>
            </div>
            
            <div class="col-lg-9 col-md-9 col-sm-7 col-xs-9">
              <p class="desc" v-bind:style="bodyFont1" ><span style="font-weight:800">{{bodyFont1.fontFamily}}</span> - The Nike Epic React Flyknit foam cushioning is responsive yet light-weight, durable yet soft. This creates a sensation that not only enhances the feeling of moving forward, but makes running feel fun, too.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-6 col-md-6 col-sm-12">
        <div class="my-container">
          <div class="row">
            <div class="controls col-md-3" style="padding-top:10px; padding-bottom:20px; padding-left:10px; padding-right: 10px">
              <i class="far fa-heart" style="margin-right: 10px"></i>Save
            </div>
          </div>

          <div class="row">
            <div class="controls col-lg-3 col-md-2" id="title-controls">
            </div>
            
            <div class="col-lg-9 col-md-9 col-sm-7 col-xs-9">
              <h1 v-bind:style="titleFont2" class="titleFont">{{titleFont2.fontFamily}}</h1>
            </div>
          </div>

          <div class="row">
            <div class="controls col-lg-3 col-md-2" style="height:500px">
            <a href="google.com" target="_blank">hi</a>
            </div>
            
            <div class="col-lg-9 col-md-9 col-sm-7 col-xs-9">
              <p v-bind:style="bodyFont2" class="desc"><span style="font-weight:800">{{bodyFont2.fontFamily}}</span> - The Nike Epic React Flyknit foam cushioning is responsive yet light-weight, durable yet soft. This creates a sensation that not only enhances the feeling of moving forward, but makes running feel fun, too.</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>  
  </div>
</template>
<!-- <script defer src="https://use.fontawesome.com/releases/v5.5.0/js/all.js" integrity="sha384-GqVMZRt5Gn7tB9D9q7ONtcp4gtHIUEW/yG7h98J7IpE3kpi+srfFyyB/04OV6pG0" crossorigin="anonymous"></script> -->


<script>
// import Saved from './Saved'

export default {
  name: 'Home',
  data: function() {
    return {
      titleFont1: {
        fontFamily: "'Noto Sans SC', sans-serif"
      },
      titleFont2: {
        fontFamily: "'Roboto', sans-serif"
      },
      bodyFont1: {
        fontFamily: "'Open Sans', sans-serif"
      },
      bodyFont2: {
        fontFamily: "'Lato', sans-serif"
      },
    }
  },
  created: function() {
    // gets called when the page is created
  },
  computed: {
    //getters
    font1: function() {
      // return this.$store.getters.font
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import url('https://fonts.googleapis.com/css?family=Black+Han+Sans|Lato|Noto+Sans+SC|Noto+Sans+TC|Open+Sans|Oswald|Roboto|Roboto+Condensed|Source+Sans+Pro');
h1, h2 {
  font-weight: normal;
}

.titleFont {
  font-size: 30px;
  font-weight: 600;
  text-align: left;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

/* center container in the middle */
html {
  display: grid;
  min-height: 100%;
}

body{
color: #aaa;
transition: color 1s, background-color 1s;
}

a{
color: #bbb;
}

a:hover, a:focus{
color: #333;
text-decoration: none;
}

a:focus {
  font-weight: 600;
}

hr{
border: 0;
border-top: 2px solid #555;
}

textarea{
border: 0;
background: transparent;
margin: 0;
padding: 0;
display: block;
overflow: auto;
resize: none;
width: 100%;
outline: none;
}

#h1{
box-sizing: border-box;
padding: 1em 0 0.6em 0;
color: #ccc;
transition: color 1s;
}

#h1, #hidden{
font-size: 6em;
margin: 0;
font-weight: 700;
line-height: 1.1;
font-family: 'Montserrat', helvetica, arial, sans-serif;
}

#hidden{
white-space: nowrap;
float: left;
opacity: 0;
margin-top: 2em;
}

#h2{
font-size: 2.5em;
box-sizing: border-box;
margin: 0;
padding: 0 0 1.5em 0;
font-weight: normal;
line-height: 1.2;
font-style: oblique;
font-family: 'Lora', Georgia, times, serif;
color: #bbb;
transition: color 1s;
}

#content{
font-size: 1.25em;
font-weight: normal;
line-height: 1.6;
font-family: 'Hind Madurai', helvetica, arial, sans-serif;
font-weight: 300;
}

.my-container {
  background-color: #222;
  color: #ccc;
  margin: 20px;
}

.controls{
background-color: #111;
width: 13%;
float: left;
position: relative;
z-index: 1;
transition: color 1s;
}

.controls.active{
z-index: 2010;
}

.col-md-offset-1{
margin-left: 6%;
}

.font-progress i {
    -webkit-animation: glyphicon-spin-r 1s infinite linear;
    animation: glyphicon-spin-r 1s infinite linear;
}

#toolbar{
margin-top: 5em;
}

.btn-default{
background-color: #666;
color: #fff;
border: 0;
border-radius: 2em;
padding: 0.5em 2em;
cursor: pointer;
}

.btn-circle {
display: inline-block;
width: 2.5em;
height: 2.4em;
position: relative;
margin-right: 0.5em;
text-align: center;
padding: 0;
line-height: 2.5em;
border-radius: 2.5em;
background: #666;
border: 0;
cursor: pointer;
}

.btn-circle i{
margin-top: 0.65em;
}

#slide{
margin-left: 1em;
}

#toolbar .slider-track{
height: 3px;
background: #666;
margin-top: -2px;
}

#toolbar .slider-handle{
	background: #ccc;
}

.slider.slider-horizontal .slider-selection, .slider.slider-horizontal .slider-track-low, .slider.slider-horizontal .slider-track-high{
display: none;
}

#title-controls{
box-sizing: border-box;
padding-top: 12%;
}

.btn.lock{
background-position: 50%;
background-size:  1.3em;
margin-right: 0.1em;
}

.btn.edit{
background-position: 50%;
background-size:  1.3em;
}

.btn.lock, .btn.edit{
float: right;
margin-top: 0.5em;
margin-right: 0.9em;
}

.btn.lock:hover, .btn.edit:hover{
background-color: #666;
}

.btn.lock.active{
}

.btn.edit.active{
}

.label{
font-size: 0.9em;
font-weight: normal;
display: block;
text-align: right;
color: #666;
padding-right: 1.5em;
padding-top: 0.5em;
}

.btn-circle.active{
background-color: #777;
}


.footer{
margin-top: 5em;
}

.footer hr{
margin-bottom: 3em;
}

.footer a{
float: left;
margin-right: 2em;
margin-bottom: 1em;
}

#list{
display: block;
position: absolute;
top: 0;
left: -9999999px;
background-color: #111;
min-height: 100vh;
z-index: 2000;
box-sizing: border-box;
width: 100%;
overflow: hidden;
opacity: 0;
transition: opacity 0.5s;
padding-right: 5%;
}

#list.active{
left: 0;
opacity: 0.92;
}

#list h2{
display: block;
float: left;
width: 100%;
clear:  both;
margin: 2em 0 1em 0;
padding: 0;
}

#list .item{
float: left;
width: 3em;
height: 3em;
position: relative;
text-align: center;
cursor: pointer;
}

#list .item canvas{
width: 100%;
height: 100%;
display: block;
position: relative;
z-index: 2001;
}

#list .item:hover canvas{
width: 140%;
height: 140%;
margin-left: -20%;
margin-top: -20%;
}

#list .item .font-name{
display: inline-block;
width: auto;
padding: 0.3em 0.9em;
background-color: #333;
color: #ddd;
white-space: nowrap;
position: relative;
z-index: 2002;
margin-left: -2px;
visibility: hidden;
}

#list .item:hover .font-name{
visibility: visible;
}

#search{
padding: 0.5em 1em;
font-family: 'Hind Madurai', helvetica, arial, sans-serif;
font-weight: 300;
font-size: 1.2em;
line-height: 1.5;
width: 30em;
margin-bottom: 1em;
border: 2px solid #666;
color: #999;
background: transparent;
}

/* light color scheme */
body.active{
background-color: #eee;
color: #444;
}

body.active .controls{
background-color: #ddd;
color: #222;
}

body.active #toolbar .slider-handle{
background: #333;
}

body.active #h1{
color: #111;
}

body.active #h2{
color: #222;
}

body.active .edit, body.active .lock{
background-color: #666;
}

body.active .edit:hover, body.active .lock:hover{
background-color: #999;
}

body.active .controls.active{
background-color: #222;
}

body.active #list{
color: #eee;
}

body.active .footer a, body.active .controls .label{
color: #222;
}

body.active .footer a:hover, body.active .controls .label:hover{
color: #666;
}

body.active .controls.active .label{
color: #999;
}

body.active .controls.active .label:hover{
color: #aaa;
}

#spinner{
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-position: 50% 50%;
opacity: 1;
transition: opacity 0.5s;
z-index: 100;
}

#spinner.active{
opacity: 0;
}

@-webkit-keyframes glyphicon-spin-r {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes glyphicon-spin-r {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@media only screen and (max-width: 1024px)  {
.controls .label{
display: none;
}

#search{
width: 95%;
}

.controls .btn{
margin-top: 0;
}

body.active .controls{
background-color: #222;
}

body.active .controls.active{
background-color: #111;
}

body.active .controls .btn{
background-color: transparent;
}
}

@media only screen and (max-width: 968px)  {
#h2{
font-size: 2em;
}
.tooltip-main{
filter: alpha(opacity=90);
opacity: .9;
}

#slide {
    margin-left: 3em;
}
}

@media only screen and (max-width: 480px)  {
#h2{
font-size: 1.8em;
}
}

@media only screen and (max-width: 630px)  {
.controls .btn{
margin-right: 0;
}
#slide{
margin: 2.5em 0 0 0;
width: 100%;
}
}

@media only screen and (max-width: 480px)  {
.controls, body.active .controls{
padding-right: 0;
background: transparent;
}

#toolbar{
margin-top: 3em;
}

#content{
font-size: 1em;
}

#h2{
font-size: 1.4em;
}

body.active .controls .btn{
filter: invert(60%);
}

body.active .controls.active{
background: transparent;
}

body.active .controls.active .btn{
filter: invert(10%);
}
}




.wrapper {
  position: relative;
  display: inline-block;
  margin-left: 90%;
  cursor: pointer;
}
.close:before {
  content: 'X';
}
.close {
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
}
h1 {
  font-size: 1.2em;
  color: dark;
  margin-top: -5px;
}

h2 {
  color: tan;
  margin-top : -5px;
}

.desc {
  text-transform: none;
  letter-spacing: 0;
  font-size: 15px;
  line-height: 1.6em;
  text-align: justify;
}

</style>
