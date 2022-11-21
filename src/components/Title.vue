<template>
    <div>
        <hr>
        <h1 class="title">The Midnight Paper</h1>
        <hr>
        <h4 class="text">Friday, November 11th, 2023</h4>
        <hr style="margin-bottom: 25px;">
    </div>
</template>

<script lang="ts">
export default{

}
</script>

<style scoped>
@font-face {
  font-family: "FaithCollapsing";
  src: local("FaithCollapsing"),
   url(@/fonts/Faith-Collapsing.ttf) format("truetype");
}

h1.title{
  color: gray;
  text-align: center;
  font-family: FaithCollapsing;
  font-size: 80px;
  font-weight: 100;
  margin-top: 15px;
  margin-bottom: 15px;
  user-select: none;
}

h4{
  margin-top: 5px;
  margin-bottom: 5px;
}

hr{
  width: 95%;
  border-color: rgb(49, 49, 49);
}
</style>