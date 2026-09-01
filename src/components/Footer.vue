<script setup>
import {ref} from 'vue'


const year = ref(new Date().getFullYear())
</script>

<template>
  <div id="container">
    <div id="diamonds">
      <img src="/diamondDarkBlue.png" alt="dark blue diamond shape">
      <img src="/diamondDarkBlue.png" alt="dark blue diamond shape">
      <img src="/diamondDarkBlue.png" alt="dark blue diamond shape">
    </div>
    <div id="left">
      <h3>Vera Elfferich | {{ year }}</h3>
    </div>
    <div id="right">
<!--      <p id="contact">^ Contact ^</p>-->
      <a target="_blank" id="credits" href="https://www.flaticon.com/free-icons/dog" title="icons">Icons by Flat Icons - Flaticon</a>
    </div>
  </div>
</template>

<style scoped>
#container {
  overflow: hidden;
  display: flex;
  position: relative;
  width: 100%;
  background-color: #6C92C1;
  margin: 0;
  justify-content: center;
  gap: 600px;
}

#left{
  justify-content: left;
}

#right{
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  gap: 60px;
}

#credits{
  text-decoration: none;
  -webkit-text-stroke: 1px #00C3FF;
  color: #fff;
  font-family: "Bagel FatOne", sans-serif;
  letter-spacing: 1px;
}

/*#contact{
  font-family: "Bagel FatOne", sans-serif;
  letter-spacing: 1px;
  color: #fff;

} */

h3{
  font-family: Aclonica, sans-serif;
  color: #fff;
  letter-spacing: 1px;
}

img{
  width: 60px;
}

#diamonds{
  position: absolute;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  left: -5px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}

@media (max-width: 1024px){
  #container {
    gap: 300px;
  }
}

@media(max-width: 768px){
  #container{
    gap: 100px;
  }
}

@media(max-width: 426px){
  #container{
    gap: 50px;
    font-size: 9px;
  }

  img{
    width: 40px;
  }


}
</style>