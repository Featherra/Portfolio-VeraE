<script setup>
defineProps({
  title: String,
  description: String,
  image: String,
  languages: String,
  github: String
})
</script>

<template>
<div id="container">
  <div class="project">
    <div class="projectImgContainer">
      <img class="projectImg" :src="image">
    </div>
    <div class="projectInfo">
      <div>
        <h2>{{title}}</h2>
        <p>{{description}}</p>
        <a :href="github" target="_blank">Github</a>
      </div>
      <p class="languages">{{languages}}</p>
    </div>
    <div class="bottom"></div>
  </div>
</div>
</template>

<style scoped>
.project{
  width: 100%;
  border: 1px solid #fff;
  border-radius: 15px;
  overflow: hidden;
  background-color: #0F142C;
  cursor: pointer;
  }

.projectImgContainer{
  width: 100%;
  aspect-ratio: 12 / 10; /*height / width*/
  overflow: hidden;
}

.projectImg{
  width: 100%;
  display: block;
  object-fit: cover;
  background-color: #0F142C;
  opacity: 0.8;
}

.projectInfo{
  min-height: 100px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  background-image: url("/cardBackground.png");
  background-size: cover;
  background-position: center;
}

h2{
  color: #fff;
  font-family: Aclonica, sans-serif;
  font-size: 18px;
}

p{
  color: #fff;
  font-family: Aclonica, sans-serif;
  font-size: 12px;
  font-weight: lighter;
}

.languages{
  text-align: right;
}

a{
  color: #00C3FF;
  font-family: Aclonica, sans-serif;
  font-size: 14px;
  text-decoration: none;
  transition: color .3s ease-in-out;
}
a:hover{
  color: #8534F3;
}

.bottom{
  width: 100%;
  height: 10%;
  background-image: url("/cardBackground.png");
}

</style>