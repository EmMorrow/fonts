<template>
  <div id="app" style="margin: 60px; margin-top: 30px;">
    <div id="nav" class="row">
			<div class="col-lg-6 col-md-6 col-sm-6" style="text-align:left">
        <span class="title">FontFinder</span>
        <!-- <br>Your one-stop shop to find the perfect font pairing! -->
      </div>
			<div class="col-lg-6 col-md-6 col-sm-6" >
			</div>
    </div>
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Raleway:900');
@import url('https://fonts.googleapis.com/css?family=Assistant:800');

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  /* margin-bottom: 0px; */
}

.title {
	text-align: left;
	font-family: 'Assistant', sans-serif;
	font-weight: 900;
	font-size: 40px;
	color: #464646;
}

.nav-link {
	font-size: 20px;
	padding: 20px 15px;
	color: #bbb;
}

a:hover, a:focus{
color: #333;
text-decoration: none;
}

a:focus {
  font-weight: 600;
}
</style>


