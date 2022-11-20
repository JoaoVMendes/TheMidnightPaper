<template>
  <transition enter-active-class="animate__animated animate__fadeIn animate__slower" 
              leave-active-class="animate__animated animate__fadeOut" 
              mode="out-in" appear>
    <div class="scroll">
      <div class="border">
        <Title></Title>
        <Transition enter-active-class="animate__animated animate__fadeIn animate__delay-1s animate__slower" 
                    leave-active-class="animate__animated animate__fadeOut" 
                    mode="out-in" appear>
          <CreepyInfo :title="bestPost.title" :author="bestPost.author" :upvotes="bestPost.upvotes"></CreepyInfo>
        </Transition>
        <Transition enter-active-class="animate__animated animate__fadeIn animate__delay-2s animate__slower" 
                    leave-active-class="animate__animated animate__fadeOut" 
                    mode="out-in" appear>
          <CreepyText></CreepyText>
        </Transition>
      </div>
      <transition enter-active-class="animate__animated animate__bounceIn" 
                  leave-active-class="animate__animated animate__zoomOut" 
                  mode="out-in" appear>
        <button v-if="showBackTop" class="backTop" @click="backTop">
            <i class="fa fa-chevron-up"></i>
        </button>
      </transition>
    </div>
  </Transition>
</template>

<script lang="ts">
import Title from '@/components/Title.vue'
import CreepyInfo from '@/components/CreepyInfo.vue'
import CreepyText from '@/components/CreepyText.vue'

export default{
  components:{Title, CreepyInfo, CreepyText},

  mounted(){
    window.addEventListener("scroll", this.handleScroll);
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  data(){
    return{
      showBackTop: false,

      posts:[],

      bestPost:{
        title: 'The Rake',
        upvotes: '2.3k',
        author: 'Unknown author',
        text:[],
      },
    }
  },

  methods:{
    handleScroll(){
      console.log(window.scrollY + window.innerHeight)
      console.log(document.body.scrollHeight )
      if(window.scrollY + window.innerHeight + 100 > document.body.scrollHeight){
        this.showBackTop = true
      }else{
        this.showBackTop = false
      }
    },

    backTop(){
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
  },
}
</script>

<style scoped>
/* @font-face {
  font-family: "Wicca";
  src: local("Wicca"),
   url(./fonts/wiccanways.ttf) format("truetype");
}

@font-face {
  font-family: "Witch";
  src: local("Witch"),
   url(./fonts/Witch-of-Thebes.ttf) format("truetype");
} */
.text{
  color: rgb(95, 95, 95);
  /* background-color: black; */
}

p{
  font-family: uwch;
  font-weight: lighter;
  font-size: 15px;
  line-height: 16px;
  padding-left: 2%;
  padding-right: 2%;
  text-align: center;
}

.scroll{
  background-color: rgb(5, 5, 5);
  margin: 20px 20px 20px 20px;
  padding-top: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  border-radius: 10px;
  box-shadow: 5px 5px 20px 5px rgba(0, 0, 0, 0.616);
}

.border
{
  border-style: double;
  border-color: gray;
  border-radius: 5px;
  padding-top: 40px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
}

.backTop{
  position: fixed;
  color: rgb(54, 2, 2);
  border-radius: 25px;
  border-width: 0px;
  font-size: larger;
  background-color: rgb(148, 0, 30);
  /*Glow ffect */
  /* box-shadow: 0 0 20px rgba(255, 0, 51, 0.8),
              0 0 30px rgba(255, 119, 119, 0.6); */
  box-shadow: 0px 0px 10px 8px rgba(0, 0, 0, 0.753);
  width: 45px;
  height: 45px;
  bottom: 15px;
  right: 48.25%;
  z-index: 1;
}

</style>
