<template>
  <div id="app" class="row" style="margin: 60px;">
    <div id="nav">
			<div class="col-lg-6 col-md-6 col-sm-6 title"><h1>FontFinder</h1></div>
			<div class="col-lg-6 col-md-6 col-sm-6" style="text-align:right">
        <router-link to="/" class="nav-link">Browse</router-link> |
        <router-link to="/about" class="nav-link">About</router-link>
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
  margin-top: 60px;
}

#nav {
  margin-bottom: 40px;
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


