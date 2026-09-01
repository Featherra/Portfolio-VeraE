<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')


const emit = defineEmits(
    ['close']
)

const submitForm = async () => {
  const response = await fetch(
      'https://formspree.io/f/xykvrnqz',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          message: message.value
        })
      }
  )

  if (response.ok) {
    alert('Message sent!')
    name.value = ''
    email.value = ''
    message.value = ''
  }
}



</script>

<template>
<div id="container">
  <div id="topBar">
    <h1>Contact</h1>
    <button @click="emit('close')">Close</button>
  </div>
  <div id="mainContent">
    <div id="left">
      <img class="lightblueDiamond" src="/diamondShape.png" alt="lightblue diamond shape infront of each input">
      <img id="secondDiamond" class="lightblueDiamond" src="/diamondShape.png" alt="lightblue diamond shape infront of each input">
      <img id="thirdDiamond" class="lightblueDiamond" src="/diamondShape.png" alt="lightblue diamond shape infront of each input">
      <form @submit.prevent="submitForm">
        <label>
          <input v-model="name" name="name" type="text" placeholder="Your name.." />
        </label>
        <label>
          <input v-model="email" name="email" type="email" placeholder="Your email.." />
        </label>
        <label>
          <textarea v-model="message" name="message" id="message" cols="40" rows="15" placeholder="Your message.."></textarea>
        </label>
        <div id="buttons">
          <button type="submit" id="sendBtn">Send!</button>
          <button type="button" id="cancelBtn" @click="emit('close')">Ehh.. nevermind</button>
        </div>
      </form>
    </div>
    <div id="right">
      <p>Rather call? My number is found on my CV. If I wasn't able to pick up the first time, you could always try again later.
        <br> <br> You can also always send me an email afterwards if you weren't able to reach me. If possible notate that you've tried reaching me within your message, so I'll know it came from you.</p>
      <a target="_blank" href="https://github.com/Featherra"><img id="githubLogo" src="/githubLogo.png" alt="github logo"></a>
    </div>
  </div>
  <div id="diamonds">
    <img id="diamondTop" src="/DiamondMidBlue.png" alt="diamond shape">
    <img id="diamondBottom" src="/DiamondMidBlue.png" alt="diamond shape">
  </div>
</div>
</template>

<style scoped>
#container {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 75%;
  transform: translate(-50%, -50%);
  background-color: #0F142C;
  border-radius: 20px;
  padding: 30px;
  z-index: 10;
}

#topBar{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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


h1{
  color: #fff;
  font-family: "Bagel FatOne", sans-serif;
  font-weight: lighter;
  font-size: 40px;
  border-bottom: 2px solid #fff;
  width: 50%;
  padding-left: 30px;
}

#mainContent{
  display: flex;
  flex-direction: row;
  gap: 160px;
}

#left{
  display: flex;
  justify-content: left;
  flex-direction: column;
  margin-left: 30px;
}

#right{
  display: flex;
  justify-content: right;
  flex-direction: column;
  margin-top: -15px;
}

#githubLogo{
  width: 30px;
  object-fit: cover;
}

p{
  color: #fff;
  font-family: Aclonica, sans-serif;
  width: 80%;
  font-size: 17px;
}

input{
  background-color: #0E1438;
  border: 1px solid #00C3FF;
  padding: 5px 5px 5px 10px;
  border-radius: 10px;
  font-family: Aclonica, sans-serif;
  color: #FFFFFF;
  width: 400px;
  margin-bottom: 10px;
}

input:focus{
  outline: none;
  border: 2px solid #00C3FF;
}

textarea{
  background-color: #0E1438;
  border: 1px solid #00C3FF;
  border-radius: 10px;
  padding: 10px;
  font-family: Aclonica, sans-serif;
  color: #fff;
  margin-bottom: 5px;
  width: 394px;
}

textarea:focus{
  outline: none;
  border: 2px solid #00C3FF;
}

#sendBtn{
  width: 250px;
  border: 1px solid #36BC53;
  font-family: Aclonica, sans-serif;
  transition: 0.4s ease-in-out;
}
#sendBtn:hover{
  box-shadow: 1px 1px 8px #36BC53;
}

#cancelBtn{
  width: 162px;
  border: 1px solid #DE0000;
  font-weight: normal;
  font-family: Aclonica, sans-serif;
  transition: 0.4s ease-in-out;
}

#cancelBtn:hover{
  box-shadow: 1px 1px 8px #DE0000;
}

#buttons{
  display: flex;
  gap: 5px;
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

.lightblueDiamond{
  display: flex;
  width: 16px;
  position: absolute;
  margin-left: -30px;
  margin-top: 4px;
}


#secondDiamond{
  margin-top: 40px;
}

#thirdDiamond{
  margin-top: 81px;
}

@media (max-width: 1024px){
  #container{
    height: 80%;
  }

  p{
    font-size: 14px;
  }

  #mainContent{
    gap: 90px;
  }
}

@media (max-width:768px){
  input{
    width: 100%;
  }

  textarea{
    width: 100%;
    height: 50%;
  }

  #sendBtn{
    width: 200px;
  }

  #buttons{
    flex-direction: column;
    gap: 10px;
  }
}

@media (max-width: 426px){
  #container{
    height: 72%;
  }

  #mainContent{
    flex-direction: column;
    gap: 20px;
  }

  h1{
    font-size: 20px;
  }

  input{
    width: 100%;
    box-sizing: border-box;
  }

  textarea{
    width: 100%;
    box-sizing: border-box;
    height: 60px;
  }

  #left{
    margin-left: 10px;
  }

  p{
    font-size: 13px;
  }

}
</style>