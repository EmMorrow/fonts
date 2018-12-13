
<template>
  <div>
    <div class="row" style="margin-top: 20px; margin-bottom: 20px;">
      <div
        class="col-lg-1 col-md-1 col-sm-2"
        id="clickable"
        style="color: #ffc107; font-weight: bold"
      >
        <i class="fas fa-download fa-lg" v-b-modal.myModal1></i>
        <p style="font-size:13px; padding-left: 5px">Embed</p>
      </div>

      <div class="col-lg-2 col-md-2 col-sm-10">
        <button
          v-on:click="getFonts"
          type="button"
          class="btn btn-warning btn-block"
          style="color: #fff; font-weight: bold"
        >Random</button>
      </div>
            <div class="col-lg-1 col-md-1 col-sm-12" style="padding-top:10px; font-weight: bold">OR</div>
      <!--       <ul class="dropdown-menu scrollable-menu" role="menu">
        <li><a href="#">Action</a></li>
        <li><a href="#">Another action</a></li>
        <li><a href="#">Something else here</a></li>
        <li><a href="#">Action</a></li>
        <li><a href="#">Another action</a></li>
        <li><a href="#">Something else here</a></li>
        <li><a href="#">Action</a></li>
        <li><a href="#">Another action</a></li>
        <li><a href="#">Something else here</a></li>
        <li><a href="#">Action</a></li>
        <li><a href="#">Another action</a></li>
        <li><a href="#">Something else here</a></li>
        <li><a href="#">Action</a></li>
        <li><a href="#">Another action</a></li>
      </ul>-->
      <div style="width:150px;height:40px;">
        <b-dropdown boundary="scrollParent" id="ddown1" text="Header Font">
          <div v-for="font in fonts.slice(0, 45)">
            <b-dropdown-item
              v-on:click="titleFont1.fontFamily = font.pairing; titleFont1.fontName = font.family"
              style="font-family: font.pairing"
            >{{font.family}}</b-dropdown-item>
          </div>
        </b-dropdown>
      </div>

      <div style="width:150px;height:40px">
        <b-dropdown boundary="scrollParent" id="ddown1" text="Body Font">
          <div v-for="font in fonts.slice(0, 45)">
            <b-dropdown-item
              v-on:click="bodyFont1.fontFamily = font.pairing; bodyFont1.fontName = font.family"
              style="font-family: font.pairing"
            >{{font.family}}</b-dropdown-item>
          </div>
        </b-dropdown>
      </div>
    </div>

    <div class="row" style="background-color: #efefef">
      <div class="col-lg-12 col-md-12 col-sm-12">
        <div class="my-container">
          <div class="row">
            <div class="controls col-lg-2 col-md-2 col-sm-2" id="title-controls">
              <span v-on:click="toggleLock1" id="clickable">
                <i v-if="f1Lock" class="fas fa-lock fa-lg"></i>
                <i v-else class="fas fa-lock-open fa-lg"></i>
                <br>
                <p style="font-size:13px; padding-top: 5px">{{titleFont1.fontName}}</p>
              </span>
            </div>

            <div class="col-lg-10 col-md-10 col-sm-7 col-xs-9 text-container">
              <textarea v-bind:style="titleFont1" class="titleFont">Explore font pairings</textarea>
            </div>
          </div>

          <div class="row">
            <div class="controls col-lg-2 col-md-2 col-sm-2" style="min-height:400px">
              <span v-on:click="toggleLock2" id="clickable">
                <i v-if="f2Lock" class="fas fa-lock fa-lg"></i>
                <i v-else class="fas fa-lock-open fa-lg"></i>
                <br>
                <p style="font-size:13px; padding-top: 5px">{{bodyFont1.fontName }}</p>
              </span>
            </div>

            <div class="col-lg-6 col-md-6 col-sm-7 col-xs-9 text-container">
              <textarea v-bind:style="bodyFont1" class="desc">We’re here to help you find the perfect font pairing. Our tool can help whether you don’t know where to start or you just want to test out some ideas. Use the menu above to generate new fonts, and use the Lock buttons on the sidebar to keep fonts you like. You can change the text to say whatever you’d like.
                
When you find a combination you like, use the Embed button to incorporate it into your project.
                
Font pairing is all about balancing contrast with an overall theme. Keep that in mind as you explore different combinations!
              </textarea>
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="col-lg-6 col-md-6 col-sm-12">
        <div class="my-container">
          <div class="row">
            <div
              class="controls col-lg-2 col-md-2 col-sm-2"
              style="padding-top:20px; padding-bottom:20px; padding-left:10px; padding-right: 10px"
            >
              <i class="fas fa-download fa-lg" v-b-modal.myModal2></i>
            </div>
          </div>

          <div class="row">
            <div class="controls col-lg-2 col-md-2 col-sm-2" id="title-controls">
              <span v-on:click="toggleLock3" id="clickable">
                <i v-if="f3Lock" class="fas fa-lock fa-lg"></i>
                <i v-else class="fas fa-lock-open fa-lg"></i>
              </span>
            </div>

            <div class="col-lg-10 col-md-10 col-sm-7 col-xs-9 text-container">
              <textarea v-bind:style="titleFont2" class="titleFont">{{titleFont2.fontName}}</textarea>
            </div>
          </div>

          <div class="row">
            <div class="controls col-lg-2 col-md-2 col-sm-2" style="min-height:400px">
              <span v-on:click="toggleLock4" id="clickable">
                <i v-if="f4Lock" class="fas fa-lock fa-lg"></i>
                <i v-else class="fas fa-lock-open fa-lg"></i>
              </span>
            </div>

            <div class="col-lg-10 col-md-10 col-sm-7 col-xs-9 text-container">
              <textarea v-bind:style="bodyFont2" class="desc"> {{bodyFont2.fontName }} - The Nike Epic React Flyknit foam cushioning is responsive yet light-weight, durable yet soft. This creates a sensation that not only enhances the feeling of moving forward, but makes running feel fun, too. Nike React feels incredibly bouncy. As your foot lands, the foam responds to the impact of your step by snapping back. The more energy you put into your step, the more energy you get in return. Compared to the similarly soft Nike Lunarlon cushioning, you get 13% more energy return with React. The foam outsole shows the hard work and wear of many miles, yet it resists compression and keeps its shape. Based on testing with champion runners like Galen Rupp, the shoe's cushioning still feels like new after roughly 300 miles. It's like you get that exciting, out-of-the-box experience with every run.
              </textarea>
            </div>
          </div>
        </div>
      </div>-->
    </div>
    <div>
      <b-modal id="myModal1" title="Embed" style="text-align: left">
        <h6>Embed</h6>
        <p>
          Copy and paste the following into the
          <code>
            <span class="tag">
              &lt;
              <span class="name">head</span>&gt;
            </span>
          </code>
          of your HTML document:
        </p>
        <code v-bind="font1 = titleFont1.fontName, font2 = bodyFont1.fontName">
          <span class="tag">
            &lt;
            <span
              class="name"
            >link href="https://fonts.googleapis.com/css?family={{font1}}|{{font2}}" rel="stylesheet"</span>&gt;
          </span>
        </code>
        <br>
        <br>
        <h5>Title Font</h5>
        <a
          v-bind:href="'https://fonts.google.com/specimen/' + titleFont1.fontName"
          target="_blank"
        >Go to font page</a>
        <br>
        <br>
        <h5>Body Font</h5>
        <a
          v-bind:href="'https://fonts.google.com/specimen/' + bodyFont1.fontName"
          target="_blank"
        >Go to font page</a>
      </b-modal>
      <!-- <b-modal id="myModal2" title="Download" style="text-align: left">
        <h6>Embed</h6>
        <p>
          Copy and paste the following into the
          <code>
            <span class="tag">&lt;<span class="name">head</span>&gt;
            </span>
          </code>
          of your HTML document:
        </p>
        <code v-bind="font3 = titleFont2.fontName, font4 = bodyFont2.fontName">
          <span class="tag">&lt;<span class="name">link href="https://fonts.googleapis.com/css?family={{font3}}|{{font4}}" rel="stylesheet"</span>&gt;
          </span>
        </code>
        <br>
        <br>
        <h5>Title Font</h5>
        <a
          v-bind:href="'https://fonts.google.com/specimen/' + titleFont2.fontName"
          target="_blank"
        >Go to font page</a>
        <br>
        <br>
        <h5>Body Font</h5>
        <a
          v-bind:href="'https://fonts.google.com/specimen/' + bodyFont2.fontName"
          target="_blank"
        >Go to font page</a>
      </b-modal>-->
    </div>
  </div>
</template>
<script defer src="https://use.fontawesome.com/releases/v5.5.0/js/all.js" integrity="sha384-GqVMZRt5Gn7tB9D9q7ONtcp4gtHIUEW/yG7h98J7IpE3kpi+srfFyyB/04OV6pG0" crossorigin="anonymous"></script>


<script>
// import Saved from './Saved'
import axios from "axios";
const fetch = require("node-fetch");

export default {
  name: "Home",
  data: function() {
    return {
      f1Lock: 0,
      f2Lock: 0,
      f3Lock: 0,
      f4Lock: 0,
      fonts: [],
      titleFont1: {
        fontFamily: "'Noto Sans SC', sans-serif",
        fontName: "Noto Sans SC"
      },
      titleFont2: {
        fontFamily: "'Roboto', sans-serif",
        fontName: "Roboto"
      },
      bodyFont1: {
        fontFamily: "'Open Sans', sans-serif",
        fontName: "Open Sans"
      },
      bodyFont2: {
        fontFamily: "'Lato', sans-serif",
        fontName: "Lato"
      }
    };
  },
  created: function() {
    // gets called when the page is created
    /* eslint-disable */
    console.log("getting fonts");

    // axios.get('http://localhost:3000/fonts')
    // .then(response => {
    //   console.log(response.data[0])
    //   this.fonts = response.data
    //   console.log(this.fonts[0].family)
    //   // console.log(this.fonts)
    // })
    let newFonts = [];
    if (this.fonts.length == 0) {
      fetch(
        "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBJlUfLH58MJnqXQlyrnCCoIeihDcqVsfs&sort=popularity"
      )
        .then(resp => resp.json())
        .then(function(data) {
          var i;
          for (i = 0; i < data.items.length; i++) {
            let combo =
              "'" + data.items[i].family + "'" + ", " + data.items[i].category;
            let newFont = {
              family: data.items[i].family,
              category: data.items[i].category,
              pairing: combo
            };
            newFonts.push(newFont);
          }
        });
      // var f = newFonts.slice(0,46);
      this.fonts = newFonts;
    }
  },
  computed: {
    //getters
    // getFonts: function() {
    //   var i = Math.floor(Math.random() * Math.floor(this.fonts.length))
    //   this.titleFont1 = this.fonts[i]
    //   i = Math.floor(Math.random() * Math.floor(this.fonts.length))
    //   this.titleFont2 = this.fonts[i]
    //   i = Math.floor(Math.random() * Math.floor(this.fonts.length))
    //   this.bodyFont1 = this.fonts[i]
    //   i = Math.floor(Math.random() * Math.floor(this.fonts.length))
    //   this.bodyFont2 = this.fonts[i]
    //   return i
    //   // return this.$store.getters.font
    // }
  },
  methods: {
    getFonts: function() {
      console.log(this.f2Lock);
      if (!this.f1Lock) {
        var i = Math.floor(Math.random() * Math.floor(45));
        this.titleFont1.fontFamily = this.fonts[i].pairing;
        this.titleFont1.fontName = this.fonts[i].family;
      }

      if (!this.f3Lock) {
        i = Math.floor(Math.random() * Math.floor(45));
        this.titleFont2.fontFamily = this.fonts[i].pairing;
        this.titleFont2.fontName = this.fonts[i].family;
      }

      if (!this.f2Lock) {
        i = Math.floor(Math.random() * Math.floor(45));
        this.bodyFont1.fontFamily = this.fonts[i].pairing;
        this.bodyFont1.fontName = this.fonts[i].family;
      }

      if (!this.f4Lock) {
        i = Math.floor(Math.random() * Math.floor(45));
        this.bodyFont2.fontFamily = this.fonts[i].pairing;
        this.bodyFont2.fontName = this.fonts[i].family;
      }

      return;
      // return this.$store.getters.font
    },
    toggleLock1: function() {
      this.f1Lock ^= true;
    },
    toggleLock2: function() {
      this.f2Lock ^= true;
    },
    toggleLock3: function() {
      this.f3Lock ^= true;
    },
    toggleLock4: function() {
      this.f4Lock ^= true;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import url("https://fonts.googleapis.com/css?family=Anton|Arimo|Arvo|Bitter|Cabin|Crimson+Text|Dosis|Fira+Sans|Fjalla+One|Hind|Inconsolata|Indie+Flower|Josefin+Sans|Lato|Libre+Baskerville|Libre+Franklin|Lobster|Lora|Merriweather|Montserrat|Mukta|Muli|Nanum+Gothic|Noto+Sans|Noto+Sans+KR|Noto+Serif|Nunito|Open+Sans|Open+Sans+Condensed:300|Oswald|Oxygen|PT+Sans|PT+Sans+Narrow|PT+Serif|Playfair+Display|Poppins|Quicksand|Raleway:400,700|Roboto|Roboto+Condensed|Roboto+Mono|Roboto+Slab|Slabo+27px|Source+Sans+Pro|Titillium+Web|Ubuntu");
h1,
h2 {
  font-weight: normal;
}

.titleFont {
  font-size: 50px;
  font-weight: 600;
  text-align: left;
  margin-bottom: -60px;
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

body {
  color: #aaa;
  transition: color 1s, background-color 1s;
}

a {
  color: #bbb;
}

a:hover,
a:focus {
  color: #333;
  text-decoration: none;
}

a:focus {
  font-weight: 600;
}

hr {
  border: 0;
  border-top: 2px solid #555;
}

textarea {
  border: 0;
  background: transparent;
  margin: 0;
  padding: 0;
  display: block;
  overflow: hidden !important;
  resize: none;
  width: 100%;
  outline: none;
  color: #333;
}

.scrollable-menu {
  height: auto;
  max-height: 200px;
  overflow-x: hidden;
}

#clickable {
  cursor: pointer;
}

#h1 {
  box-sizing: border-box;
  padding: 1em 0 0.6em 0;
  color: #ccc;
  transition: color 1s;
}

#h1,
#hidden {
  font-size: 6em;
  margin: 0;
  font-weight: 700;
  line-height: 1.1;
  font-family: "Montserrat", helvetica, arial, sans-serif;
}

#hidden {
  white-space: nowrap;
  float: left;
  opacity: 0;
  margin-top: 2em;
}

#h2 {
  font-size: 2.5em;
  box-sizing: border-box;
  margin: 0;
  padding: 0 0 1.5em 0;
  font-weight: normal;
  line-height: 1.2;
  font-style: oblique;
  font-family: "Lora", Georgia, times, serif;
  color: #bbb;
  transition: color 1s;
}
/*
textarea {
  border: 0;
  background: transparent;
  margin: 0;
  padding: 0;
  display: block;
  resize: none;
  width: 100%;
  outline: none;
  resize: none !important;
  overflow: hidden;
}*/

#content {
  font-size: 1.25em;
  font-weight: normal;
  line-height: 1.6;
  font-family: "Hind Madurai", helvetica, arial, sans-serif;
  font-weight: 300;
}

.my-container {
  color: #676767;
  /* color: #ccc; */
  padding-right: 10px;
  margin: 10px;
}

.text-container {
}

.controls {
  float: left;
  position: relative;
  z-index: 1;
  transition: color 1s;
}

.controls.active {
  z-index: 2010;
}

.col-md-offset-1 {
  margin-left: 6%;
}

.font-progress i {
  -webkit-animation: glyphicon-spin-r 1s infinite linear;
  animation: glyphicon-spin-r 1s infinite linear;
}

#toolbar {
  margin-top: 5em;
}

.btn-default {
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

.btn-circle i {
  margin-top: 0.65em;
}

#slide {
  margin-left: 1em;
}

#toolbar .slider-track {
  height: 3px;
  background: #666;
  margin-top: -2px;
}

#toolbar .slider-handle {
  background: #ccc;
}
#title-controls {
  box-sizing: border-box;
  padding-bottom: 10px;
  padding-top: 20px;
}

.slider.slider-horizontal .slider-selection,
.slider.slider-horizontal .slider-track-low,
.slider.slider-horizontal .slider-track-high {
  display: none;
}

.btn.lock {
  background-position: 50%;
  background-size: 1.3em;
  margin-right: 0.1em;
}

.btn.edit {
  background-position: 50%;
  background-size: 1.3em;
}

.btn.lock,
.btn.edit {
  float: right;
  margin-top: 0.5em;
  margin-right: 0.9em;
}

.btn.lock:hover,
.btn.edit:hover {
  background-color: #666;
}

.btn.lock.active {
}

.btn.edit.active {
}

.label {
  font-size: 0.9em;
  font-weight: normal;
  display: block;
  text-align: right;
  color: #666;
  padding-right: 1.5em;
  padding-top: 0.5em;
}

.btn-circle.active {
  background-color: #777;
}

.footer {
  margin-top: 5em;
}

.footer hr {
  margin-bottom: 3em;
}

.footer a {
  float: left;
  margin-right: 2em;
  margin-bottom: 1em;
}

#list {
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

#list.active {
  left: 0;
  opacity: 0.92;
}

#list h2 {
  display: block;
  float: left;
  width: 100%;
  clear: both;
  margin: 2em 0 1em 0;
  padding: 0;
}

#list .item {
  float: left;
  width: 3em;
  height: 3em;
  position: relative;
  text-align: center;
  cursor: pointer;
}

#list .item canvas {
  width: 100%;
  height: 100%;
  display: block;
  position: relative;
  z-index: 2001;
}

#list .item:hover canvas {
  width: 140%;
  height: 140%;
  margin-left: -20%;
  margin-top: -20%;
}

#list .item .font-name {
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

#list .item:hover .font-name {
  visibility: visible;
}

#search {
  padding: 0.5em 1em;
  font-family: "Hind Madurai", helvetica, arial, sans-serif;
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
body.active {
  background-color: #eee;
  color: #444;
}

body.active .controls {
  background-color: #ddd;
  color: #222;
}

body.active #toolbar .slider-handle {
  background: #333;
}

body.active #h1 {
  color: #111;
}

body.active #h2 {
  color: #222;
}

body.active .edit,
body.active .lock {
  background-color: #666;
}

body.active .edit:hover,
body.active .lock:hover {
  background-color: #999;
}

body.active .controls.active {
  background-color: #222;
}

body.active #list {
  color: #eee;
}

body.active .footer a,
body.active .controls .label {
  color: #222;
}

body.active .footer a:hover,
body.active .controls .label:hover {
  color: #666;
}

body.active .controls.active .label {
  color: #999;
}

body.active .controls.active .label:hover {
  color: #aaa;
}

#spinner {
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

#spinner.active {
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

@media only screen and (max-width: 1024px) {
  .controls .label {
    display: none;
  }

  #search {
    width: 95%;
  }

  .controls .btn {
    margin-top: 0;
  }

  body.active .controls {
    background-color: #222;
  }

  body.active .controls.active {
    background-color: #111;
  }

  body.active .controls .btn {
    background-color: transparent;
  }
}

@media only screen and (max-width: 968px) {
  #h2 {
    font-size: 2em;
  }
  .tooltip-main {
    filter: alpha(opacity=90);
    opacity: 0.9;
  }

  #slide {
    margin-left: 3em;
  }
}

@media only screen and (max-width: 480px) {
  #h2 {
    font-size: 1.8em;
  }
}

@media only screen and (max-width: 630px) {
  .controls .btn {
    margin-right: 0;
  }
  #slide {
    margin: 2.5em 0 0 0;
    width: 100%;
  }
}

@media only screen and (max-width: 480px) {
  .controls,
  body.active .controls {
    padding-right: 0;
    background: transparent;
  }

  #toolbar {
    margin-top: 3em;
  }

  #content {
    font-size: 1em;
  }

  #h2 {
    font-size: 1.4em;
  }

  body.active .controls .btn {
    filter: invert(60%);
  }

  body.active .controls.active {
    background: transparent;
  }

  body.active .controls.active .btn {
    filter: invert(10%);
  }
}

.wrapper {
  position: relative;
  display: inline-block;
  margin-left: 90%;
  cursor: pointer;
}

.close {
  top: 10;
  cursor: pointer;
}

.modal-footer {
  display: none !important;
}

h1 {
  font-size: 1.2em;
  color: dark;
  margin-top: -5px;
}

h2 {
  color: tan;
  margin-top: -5px;
}

.desc {
  text-transform: none;
  letter-spacing: 0;
  font-size: 17px;
  line-height: 1.6em;
  text-align: left;
  height: 100%;
  text-indent: 0;

  /*  font-size: 1.25em;
  font-weight: normal;
  line-height: 1.6;
  font-family: 'Hind Madurai', helvetica, arial, sans-serif;
  font-weight: 300;*/
}
</style>


