<template>
    <div>
        <h4 class="text">&#10022;</h4>
        <h2 class="text">The Rake</h2>
        <h5 class="author">Unknown author</h5>
        <!-- <h5 class="author">by Squidmanescape</h5> -->
        <h4 class="text">&#10022;</h4>
    </div>
</template>

<script lang="ts">
export default{

}
</script>

<style>
.text{
  color: rgb(95, 95, 95);
  /* background-color: black; */
}

h2{
  font-family: uwch;
  font-size: 25px;
  font-weight: bold;
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
  font-weight: lighter;
  text-align: center;
}

::selection {
  color: black;
  background: rgb(170, 25, 54);
}
</style>