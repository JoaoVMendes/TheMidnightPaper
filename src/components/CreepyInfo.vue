<template>
    <div>
        <h4 class="text star" style="margin-top: 40px;margin-bottom: 20px;">&#10022;</h4>
        <h2 class="title">{{ title }}</h2>
        <h5 v-if="author != null" class="author">by <strong>{{ author }}</strong></h5>
        <h5 v-else class="author">Unknown author</h5>
        <h5 class="upvotes"><i class="fa fa-thumbs-up"></i> {{ upvotes }}</h5>
        <h4 class="text star" style="margin-bottom: 40px; margin-top: 20px;">&#10022;</h4>
    </div>
</template>

<script lang="ts">
export default{
  props:['title', 'author', 'upvotes']
}
</script>

<style>
@font-face {
  font-family: "Rediviva";
  src: local("Rediviva"),
   url(@/fonts/Rediviva.ttf) format("truetype");
}

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
  margin-right: 2.5%;
  margin-left: 2.5%;
  font-family: Rediviva;
}

h2{
  font-family: uwch;
  font-size: 30px;
  font-weight: lighter;
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