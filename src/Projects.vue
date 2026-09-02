<script setup>
import Footer from './components/Footer.vue'
import router from './router/router.js'
import ProjectsNameBanner from './components/ProjectsNameBanner.vue'
import ProjectDisplay from './components/ProjectDisplay.vue'

defineProps({
  title: String,
  description: String,
  image: String,
  languages: String,
  github: String
})

const projects = [
  {
    title: 'Baking Book',
    description: 'A website for creating and saving recipes using your own account.',
    image: '/projectBakingBook.png',
    languages: 'Vue.js, Node.js, MySQL, JavaScript, HTML, CSS',
    github: 'https://github.com/Featherra/Baking-Book'
  },
  {
    title: 'Portfolio website MaMaProductions',
    description: 'A completely finished website that I created for the company where I had my first internship.',
    image: '/projectMMPro.png',
    languages: 'Vue.js, JavaScript, HTML, CSS',
    github: 'https://github.com/Featherra/mamaproducties-portfolio-website'
  },
  {
    title: 'Weather App',
    description: 'A website to check the weather with your own location input.',
    image: '/projectWeatherApp.png',
    languages: 'HTML, CSS, JavaScript, API',
    github: 'https://github.com/Featherra/weatherTeller'
  },
  {
    title: 'Calculator',
    description: 'Simple calculator with a fun surprise.',
    image: '/projectCalculator.png',
    languages: 'Vue.js, JavaScript, HTML, CSS',
    github: 'https://github.com/Featherra/calculatorApp'
  },
  {
    title: 'Wheel of Fortune',
    description: 'Small Wheel of Fortune game, school project. Win, lose, use credits!',
    image: '/projectWheelOfFortune.png',
    languages: 'Vue.js, JavaScript, HTML, CSS',
    github: 'https://github.com/Featherra/wheel-of-fortune'
  },
  {
    title: 'Dark Mode Toggle',
    description: 'This is a small project where I made a dark/light mode switch.',
    image: '/projectDarkMode.png',
    languages: 'React, JavaScript, CSS',
    github: 'https://github.com/Featherra/DarkModeToggleProject'
  },
  {
    title: 'Music Player',
    description: 'This, again, is a small fun project I decided to make while getting to know JavaScript a bit more.',
    image: '/projectMusicPlayer.png',
    languages: 'JavaScipt, HTML, CSS',
    github: 'https://github.com/Featherra/MusicPlayer'
  }
]

</script>

<template>
  <div id="header">
    <div id="homeBtn" @click="router.push('/')">
      <img id="homeIcon" src="/homeBtnoSmoke.png" alt="">
    </div>
    <div>
      <ProjectsNameBanner/>
    </div>
  </div>
  <div id="main">
    <div id="projectsContainer">
      <ProjectDisplay
          v-for="project in projects"
          :key="project.title"
          :title="project.title"
          :description="project.description"
          :image="project.image"
          :languages="project.languages"
          :github="project.github"
      />
    </div>
  </div>
  <div id="footer">
    <Footer/>
  </div>
</template>

<style scoped>
#homeBtn:hover{
  cursor: pointer;
}

#homeIcon{
  width: 40px;
  margin-left: 2.3%;
  margin-top: 1.9%;
}

#main{
  margin: 20px;
}

#projectsContainer {
  max-width: 1000px;
  margin: 100px auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 80px 300px; /*first is height distance, second is width distance*/
}


@media (max-width: 850px) {
  #projectsContainer {
    grid-template-columns: 1fr;
    gap: 40px;
    max-width: 500px;
  }
}


</style>