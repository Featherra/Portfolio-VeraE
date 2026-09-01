<script setup>
import { ref } from 'vue'
import router from './router/router.js'


const showAboutPopup = ref(false)
const showContactPopup = ref(false)

import Name from './components/Name.vue'
import ProjectCard from './components/ProjectCard.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Skills from './components/Skills.vue'
import Footer from './components/Footer.vue'

</script>

<template>
  <div class="app">
    <div id="homeBtn" @click="router.push('/')">
      <img id="homeIcon" src="/homeBtnSmoke.png" alt="">
    </div>
    <Name/>
    <h2>Portfol<span class="customI">i<img class="diamondDot" src="/diamondShape.png" alt="small diamond, used as the I in Portfolio"></span>o</h2>
    <div id="arrow1"></div>
    <div id="arrow2"></div>
    <p>To reveal the magic, click on one of the ‘cards’</p>
    <div id="projectCards">
      <projectCard title="About me" @click="showAboutPopup = true"/>
      <projectCard title="Projects"  @click="router.push('/projects')"/>
      <projectCard title="Contact" @click="showContactPopup = true"/>
    </div>
    <transition name="popup">
      <About v-if="showAboutPopup" @close="showAboutPopup = false"/>
    </transition>
    <transition name="popup">
      <Contact v-if="showContactPopup" @close="showContactPopup = false"/>
    </transition>
    <div id="skillsContainer">
      <Skills/>
    </div>
    <div id="footer">
      <Footer/>
    </div>
  </div>
</template>

<style scoped>
p{
  text-align: center;
  color: #928ECC;
  font-family: Aclonica, sans-serif;
  opacity: 0.7;
  margin-top: 200px;
  margin-bottom: -110px;
}

#projectCards{
  display: grid;
  justify-content: center;
  gap: 10rem;
  grid-template-columns: auto auto auto;
}

#homeIcon{
  width: 50px;
  margin-left: 2%;
  margin-top: 1%;
}

#homeBtn:hover{
  cursor: pointer;
}

img{
  display: block;
  margin: auto;
  justify-self: center;
}

h2{
  font-size: 60px;
  letter-spacing: 5px;
  text-align: center;
  font-weight: lighter;
  color: #fff;
}

.customI {
  position: relative;
  display: inline-block;
}


.diamondDot {
  position: absolute;
  width: 22px;
  top: 16px;
  left: 38%;
  transform: translateX(-50%);
}

#arrow1{
  width: 20px;
  height: 20px;
  rotate: 45deg;
  border-bottom: 3px solid #fff;
  border-right: 3px solid #fff;
  justify-self: center;
  margin-top: -30px;
}

#arrow2 {
  width: 30px;
  height: 30px;
  rotate: 45deg;
  border-bottom: 3px solid #fff;
  border-right: 3px solid #fff;
  justify-self: center;
  margin-top: -44px;
}

.popup-enter-active{
  transition: all 0.4s ease;
}


.popup-enter-from{
  transform: scale(0.92) translateY(15px);
  filter: blur(4px);
}

.popup-enter-to{
  opacity: 1;
  transform: translateY(0) scale(1);
}

.popup-leave-active{
  transition: all 0.3s ease;
}

.popup-leave-from{
  opacity: 1;
  transform: translateY(0) scale(1);
}

.popup-leave-to{
  opacity: 0;
  transform: translateY(30px) scale(0.9);
}

#skillsContainer{
  margin-bottom: 300px;
}


@media (max-width: 1130px) {
  #projectCards{
    grid-template-columns: auto;
    gap: 1px;
  }
}


</style>
