<template>
    <div>
        <hr>
        <h1 class="title">The Midnight Paper</h1>
        <hr>
    </div>
</template>

<script lang="ts">
export default{

}
</script>

<style>
@font-face {
  font-family: "FaithCollapsing";
  src: local("FaithCollapsing"),
   url(@/fonts/Faith-Collapsing.ttf) format("truetype");
}

h1.title{
  color: gray;
  text-align: center;
  font-family: FaithCollapsing;
  font-size: 60px;
  font-weight: 100;
  margin-top: 15px;
  margin-bottom: 15px;
  user-select: none;
}

hr{
  width: 95%;
  border-color: rgb(49, 49, 49);
  margin-bottom: 25px;
}
</style>