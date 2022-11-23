<template>
    <div class="titleSection">
        <hr>
        <h1 class="title">The Midnight Paper</h1>
        <hr>
        <div class="volumeInfo">
          <h4 class="text">VOL. 1</h4>
          <h4 class="text">Friday, November 11th, 2023</h4>
          <h4 class="text">Price: Free</h4>
        </div>
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

.titleSection{
  width: 95%;
  margin: auto;
}

.volumeInfo{
  display: flex;
  justify-content: space-between;
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
  width: 100%;
  border-color: rgb(49, 49, 49);
}
</style>