<template>
    <div>
        <h4 class="text star" >&#10022;</h4>
        <h2 class="title">{{ title }}</h2>
        <h5 class="author">{{ author }}</h5>
        <!-- <h5 class="author">by Squidmanescape</h5> -->
        <h5 class="upvotes"><i class="fa fa-thumbs-up"></i> {{ upvotes }}</h5>
        <h4 class="text star" >&#10022;</h4>
    </div>
</template>

<script lang="ts">
export default{
  props:['title', 'author', 'upvotes']
}
</script>

<style>
.text{
  color: rgb(95, 95, 95);
  /* background-color: black; */
}

.star{
  font-size: larger;
}

.title{
  color: gray;
  margin-top: 12px;
  margin-bottom: 12px;
}

h2{
  font-family: uwch;
  font-size: 30px;
  font-weight: bolder;
  text-align: center;
}

h4{
  font-family: uwch;
  font-weight: lighter;
  text-align: center;
}

h5.author{
  font-family: uwch;
  color: rgb(95, 95, 95);
  margin-top: 12px;
  margin-bottom: 5px;
  font-weight: lighter;
  text-align: center;
}

h5.upvotes{
  font-family: uwch;
  color: rgb(95, 95, 95);
  margin-top: 5px;
  margin-bottom: 5px;
  font-weight: lighter;
  text-align: center;
}

::selection {
  color: black;
  background: rgb(170, 25, 54);
}
</style>