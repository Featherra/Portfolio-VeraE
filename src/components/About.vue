<script setup>
const emit = defineEmits(
  ['close']
)
</script>

<template>
  <div id="container">
    <div id="topBar">
      <h1>About me</h1>
      <button @click="emit('close')">Close</button>
    </div>
    <div id="mainContent">
      <div id="right">
        <p><span class="hai">Ha<span class="customI">i <img id="diamondDot" src="/diamondShape.png" alt=""></span></span>, I'm Vera.  I’m a webdevelopment student at Sintlucas Eindhoven, and now in my 4th year. Glancing at Fontys?Avans ICT Bachelor.
          <br> <br> I’m eager to learn and know more about webdevelopment. I want to understand and know what I’m doing. <br> <br> I've only started coding when I started Sintlucas. So everything I'm able to do now, I've learned in the last 3 years.
          <br> But time, experience and help, will change that. <br> <br> I want to learn, grow and become confident in my field of work.
          <br> <br> I’m leaning towards becoming a front-end developer, but I would love to know more about back-end. </p>
      </div>
    </div>
    <div id="bottomBar">
      <div id="icons">
        <img class="icons" src="/bake.png" alt="">
        <img class="icons" src="/bass-guitar.png" alt="">
        <img class="icons" src="/athlete.png" alt="">
        <img class="icons" src="/gaming.png" alt="">
        <img class="icons" src="/dog.png" alt="">
      </div>
      <div>
        <a target="_blank" id="credits" href="https://www.flaticon.com/free-icons/dog">Icons by Flat Icons - Flaticon</a>
      </div>
    </div>
    <div id="diamonds">
      <img id="diamondTop" src="/DiamondMidBlue.png" alt="diamond shape">
      <img id="diamondBottom" src="/DiamondMidBlue.png" alt="diamond shape">
    </div>
  </div>
</template>

<style scoped>
#container{
  position: fixed;
  top: 50%;
  left: 50%;
  width: 75%;
  transform: translate(-50%, -50%);
  background-color: #0F142C;
  border-radius: 20px;
  padding: 40px;
  z-index: 10;
}

p {
  color: #fff;
  font-family: Aclonica, sans-serif;
  font-size: 16px;
}

h1{
  color: #fff;
  font-family: "Bagel FatOne", sans-serif;
  font-weight: lighter;
  font-size: 40px;
  border-bottom: 2px solid #fff;
  width: 50%;
  padding-left: 30px;
}


button{
  border-radius: 10px;
  width: 60px;
  height: 30px;
  background-color: transparent;
  color: #fff;
  font-weight: bold;
  border: 2px solid #00C3FF;
  cursor: pointer;
  transition: 0.4s ease-in-out;
}

button:hover{
  box-shadow: 1px 1px 8px #00C3FF;
}

.icons{
  width: 55px;
}

#topBar{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

#mainContent{
  display: flex;
  flex-direction: row;
  gap: 60px;
  width: 90%;
}

#bottomBar{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding-left: 30px;
}

#icons{
  display: flex;
  gap: 20px;
  margin-top: 10px;
}

#credits{
  text-decoration: none;
  -webkit-text-stroke: 1px #00C3FF;
  color: #fff;
  font-family: "Bagel FatOne", sans-serif;
  letter-spacing: 1px;
}

.hai{
  font-size: 30px;
}

.customI{
  position: relative;
  display: inline-block;
}

#diamondDot{
  position: absolute;
  display: block;
  margin-top: -39px;
  margin-left: 9px;
  justify-self: center;
  width: 14px;
}

#diamonds{
  position: absolute;
  inset: 0;
  pointer-events: none;
}

#diamondTop{
  position: absolute;
  top: -10px;
  left: -10px;
}

#diamondBottom{
  position: absolute;
  bottom: -10px;
  right: -10px;
}


@media (max-width: 1024px) {
  #container{
    height: 80%;
  }

  #mainContent{
    height: 70%;
  }

  p{
    font-size: 13px;
  }
}

@media (max-width: 768px) {
  p{
    font-size: 10px;
  }

  #bottomBar{
    padding-left: 1px;
  }

  #icons{
    gap: 10px;
  }

  #mainContent{
    height: 65%;
  }

  #container{
    height: 74%;
  }
}

@media (max-width: 426px){
  #container{
    height: 60%;

  }

  #mainContent{
    height: 70%;
    gap: 25px;
  }

  h1{
    font-size: 15px;
  }

  #icons{
    gap: 2px;
  }

  p{
    font-size: 8px;
  }

  a{
    font-size: 10px;
  }


}
</style>