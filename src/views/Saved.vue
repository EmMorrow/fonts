<template>
 <div>
  <h1>Saved</h1>
    <div>
      <div v-for="item in items":key="item.id">
      asdfasdfasdfasdfasdf
        <!--<div v-if="currFont.fontFamily = item.family">
          <div>
            <i v-on:click="save" class="far fa-heart"></i>
          </div>
          <h1 v-bind:style="currFont">{{currFont.fontFamily}}</h1>
          <p class="desc">The Nike Epic React Flyknit foam cushioning is responsive yet light-weight, durable yet soft. This creates a sensation that not only enhances the feeling of moving forward, but makes running feel fun, too.</p>
        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Saved',
  data: function() {
    return {
      items: [{}],
      currFont: {
        fontFamily: "hii"
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
