<script setup>
  import Softskills from './Softskills.vue'

  import {ref} from "vue";

  const showSoftSkills = ref(false)

</script>

<template>
<div id="container">
  <div id="skillsTitle">
    <h1><span style="color: #28467A;">My</span> Sk<span class="customI">i <img id="diamondDot" src="/diamondShape.png" alt=""></span>lls</h1>
    <div id="underline"></div>
  </div>
  <div id="skillsContainer">
    <div class="skill">
      <h2>HTML</h2>
      <img class="waterFill" id="htmlWater" src="/waterFill.png" alt="water type fill">
    </div>
    <div class="skill">
      <h2>CSS</h2>
      <img class="waterFill" id="cssWater" src="/waterFill.png" alt="water type fill">
    </div>
    <div class="skill">
      <h2>JS</h2>
      <img class="waterFill" id="jsWater" src="/waterFill.png" alt="water type fill">
    </div>
    <div class="skill">
      <h2>Vue</h2>
      <img class="waterFill" id="vueWater" src="/waterFill.png" alt="water type fill">
    </div>
    <div class="skill">
      <h2>MySQL</h2>
      <img class="waterFill" id="mysqlWater" src="/waterFill.png" alt="water type fill">
    </div>
    <div class="skill">
      <h2>API</h2>
      <img class="waterFill" id="apiWater" src="/waterFill.png" alt="water type fill">
    </div>
  </div>
  <div id="softSkills">
    <h3>Soft Sk<span class="customI">i <img id="diamondDotS" src="/diamondShape.png" alt=""></span>lls</h3>
    <div id="arrow" @click="showSoftSkills = !showSoftSkills" :class="{open: showSoftSkills}"></div>
    <div>
      <transition name="slide">
        <Softskills v-if="showSoftSkills"/>
      </transition>
    </div>
  </div>
</div>
</template>

<style scoped>
#container {
  margin-bottom: 40px;
  overflow: hidden;
}

#skillsTitle{
  margin-bottom: 20px;
}

#skillsContainer{
  width: 94%;
  padding: 50px;
  background-color: #0F142C;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 130px;
}

#softSkills{
  background-color: #0F142C;
  padding: 50px;
  margin-top: -60px;
}

.skill{
  width: 115px;
  height: 115px;
  border: 1px solid #fff;
  align-content: center;
  position: relative;
}

.waterFill{
  position: absolute;
  width: 100%;
  bottom: 0;
  z-index: 1;
}

#htmlWater{
  height: 70px;
}

#cssWater{
  height: 50px;
}

#jsWater{
  height: 40px;
}

#vueWater{
  height: 40px;
}

#mysqlWater{
  height: 20px;
}

#apiWater{
  height: 10px;
}


.open{
  transform: rotate(135deg) !important;
  /* transform: rotate(135deg); rotated */
}

#arrow{
  border-bottom: 3px solid #fff;
  border-left: 3px solid #fff;
  width: 10px;
  height: 10px;
  justify-self: center;
  transform: rotate(315deg);
  transition: 0.3s ease;
  margin-top: -22px;
  cursor: pointer;
}

h2{
  text-align: center;
  color: #fff;
  font-family: aclonica, sans-serif;
  font-weight: lighter;
  position: relative;
  z-index: 10;
  }

h1{
  font-family: "Bagel FatOne", sans-serif;
  text-align: center;
  margin-left: -240px;
  letter-spacing: 1px;
  font-weight: lighter;
  color: #fff;
  font-size: 50px;
}

h3{
  font-family: "Bagel FatOne", sans-serif;
  color: #fff;
  font-size: 27px;
  font-weight: lighter;
  text-align: center;
  position: relative;

}


#underline{
  border-bottom: 1px solid #fff;
  width: 50%;
  justify-self: left;
  margin-top: -37px;
}

.customI{
  position: relative;
  display: inline-block;
}

#diamondDot{
  position: absolute;
  display: block;
  margin-top: -56px;
  margin-left: 12px;
  justify-self: center;
  width: 16px;
}

#diamondDotS{
  position: absolute;
  display: block;
  margin-top: -32px;
  margin-left: 6px;
  justify-self: center;
  width: 10px;
}


.slide-enter-active,
.slide-leave-active{
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to{
  opacity: 0;
  transform: translateY(-15px);
}

.slide-enter-to,
.slide-leave-from{
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 1024px){
  #skillsContainer{
    gap: 45px;
  }
}

@media (max-width: 768px){
  #skillsContainer{
    gap: 20px;
    margin-left: -20px;
  }
}

@media (max-width: 426px){
  #skillsContainer{
    display: grid;
    grid-template-columns:1fr 1fr;
    margin-left: 1px;
  }

  h1{
    font-size: 40px;
  }

  #diamondDot{
    margin-top: -48px;
    margin-left: 10px;
    width: 16px;
  }
}
</style>