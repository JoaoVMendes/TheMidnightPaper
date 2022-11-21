<template>
  <div class="journal">
    <div v-for="(t, index) in texts" :key="index">
      <p v-if="index == 0" class="text" style="margin-top: 0px"><span class="initial">{{ t[0] }}</span>{{ t.substring(1,
          t.length)
      }}</p>
      <p v-else class="text">{{ t }}</p>

    </div>
    <h4 class="text">&#10022;</h4>
    <p class="textRef text">Did you like the story?</p>
    <p class="textRef text">Then upvote <a :href="link">here</a> or die.</p>
    <h4 class="text">&#10022;</h4>
  </div>
</template>

<script lang="ts">
export default {
  props: ['texts', 'link'],
}
</script>

<style>
@font-face {
  font-family: "uwch";
  src: local("uwch"),
    url(@/fonts/uwch.ttf) format("truetype");
}

@font-face {
  font-family: "mevno1";
  src: local("mevno1"),
    url(@/fonts/GenzschInitials-7oBK.ttf) format("truetype");
}

.text {
  color: rgb(95, 95, 95);
  /* background-color: black; */
}

.journal {
  column-count: 3;
  column-gap: 10px;
  text-align: justify;
  column-rule-style: solid;
  column-rule-width: 1px;
  column-rule-color: rgb(50, 50, 50);
  column-span: all;
}

span.initial {
  color: rgb(148, 0, 30);
  float: left;
  line-height: 75%;
  margin-top: 5px;
  margin-right: 1px;
  /* width: 1em; */
  font-size: 475%;
  font-weight: lighter;
  font-family: mevno1;
  /*Glowing ghostly letter*/
  /* color: rgb(201, 253, 236);
  text-shadow: 0 0 15px rgba(45, 224, 180, 0.8),
              0 0 15px rgba(170, 255, 237, 0.6); */
}

p {
  font-family: uwch;
  font-weight: lighter;
  font-size: 15px;
  line-height: 20px;
  padding-left: 2%;
  padding-right: 2%;
}

p.textRef {
  text-align: center;
}

a:link {
  color: rgb(179, 179, 179);
  background-color: transparent;
  text-decoration: none;
}

a:visited {
  color: rgb(49, 49, 49);
  background-color: transparent;
}

a:hover {
  color: rgb(243, 243, 243);
  background-color: transparent;
  /*Glowing ghostly text*/
  /* color: rgb(191, 255, 223);
  text-shadow: 0 0 10px rgba(45, 224, 180, 0.8),
              0 0 10px rgba(170, 255, 237, 0.6); */
}

/* p::first-letter {
  float: left;
  line-height: 30px;
  font-size: 50px;
  font-weight: lighter;
  font-family: HeavyRain;
  color: rgb(170, 25, 54);
  margin-bottom: 10px;
  padding-top: 20px;
  padding-right: 4px;
} */

::selection {
  color: black;
  background: rgb(170, 25, 54);
}
</style>