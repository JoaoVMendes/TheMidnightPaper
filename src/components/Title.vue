<template>
    <div class="titleSection">
        <hr>
        <h1 class="title">The Midnight Paper</h1>
        <hr>
        <div class="volumeInfo">
          <h4 class="text mobile-display">VOL. 1</h4>
          <h4 class="text">{{ date }}</h4>
          <h4 class="text mobile-display">Price: Free</h4>
        </div>
        <hr style="margin-bottom: 25px;">
    </div>
</template>

<script lang="ts">
export default{
  mounted(){
    var d = new Date();
    const dayOfWeekName = new Date().toLocaleString('default', {weekday: 'long'})
    const monthNames = [ "January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"]
    const daySulfix = ["st","sd","rd","th","th","th","th","th","th","th","th","th","th","th","th","th",
                        "th","th","th","th","th","th","th","th","th","th","th","th","th","th","th"]
    this.date = dayOfWeekName+ ", " + monthNames[d.getMonth()] + " " + d.getDate() + daySulfix[d.getDate()] + ", " + d.getFullYear()
  },

  data(){
    return{
      date: '',
    }
  }
}
</script>

<style>
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
  text-shadow: 0 0 100px rgba(141, 141, 141, 0.8),
              0 0 10px rgba(255, 255, 255, 0.6);
}
</style>

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

h4{
  margin-top: 0px;
  margin-bottom: 0px;
}

hr{
  width: 100%;
  border-color: rgb(49, 49, 49);
}
</style>