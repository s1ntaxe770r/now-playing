<script setup>
import { ref } from 'vue'

</script>
        
<template>
 <div v-if="is_playing">
<div class="container  md:mx-auto shadow-blue-500 backdrop-opacity-60  bg-grey-500 rounded-lg  mt-10 w-[42rem]  h-[32rem] shadow-2xl">
    <div class="flex justify-center">
    <div :style="{ backgroundImage : 'url(' + album_art + ')' }" class="object-scale-down h-80 w-96 mt-6 img"/>
  </div>
        <p class="text-5xl text-blue-500 text-center mt-3 tracking-wide font-medium  font-squarepeg">{{ title}}</p>
        <p class="text-lg text-teal-50 text-center mt-3 tracking-wide font-thin  font-squarepeg">by</p>
        <p class="text-4xl text-blue-500 text-center font-thin mt-2  font-medium   font-squarepeg">{{ artist }}</p> 
</div>
</div>
<div v-else> 
  <div class="container  md:mx-auto shadow-blue-500 backdrop-opacity-60  bg-grey-500 rounded-lg  mt-10 w-[42rem]  h-[32rem] shadow-2xl">
    <div class="flex justify-center">
    <img src="https://cats.aaryanporwal.com/images(175).jpeg" class="object-scale-down h-80 w-96 mt-6 img"/>
  </div>
        <p class="text-5xl text-teal-50 text-center mt-2 tracking-wide font-medium  font-squarepeg">currently not listening to anything</p>
 
</div>
</div>
</template>


<script>
import getCurrentPlayback from '../components/spotify/current';
export default {
  data(){
    return {
      artist: "",
      title: "", 
      album_art: "",
      is_playing: false,
    };
 },
 async mounted(){
  while(true) {
  let  resp  = await getCurrentPlayback();
   this.data = resp
   this.title =  resp.item.name
   this.artist =  resp.item.artists.map((_artist) => _artist.name).join(', ')
   this.album_art = resp.item.album.images[0].url
   this.is_playing = resp.is_playing
   setTimeout(() => {  console.log("Refreshing💖"); }, 80000);   
  }
 },
}
</script>

<style scoped>

.img {
  
  background-size: 100% 100%!important;
  background-position: center;
}
</style>