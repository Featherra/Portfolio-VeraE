<script setup>
defineProps({
  title: String,
})

</script>

<template>
  <div class="projectCard">

    <div id="card">
      <div id="darkblueBack"></div>

      <div id="cardFront">
        <h2>{{title}}</h2>
      </div>
    </div>

  <img id="diamondTop" src="/DiamondMidBlue.png" alt="">
  <img id="diamondBottom" src="/DiamondMidBlue.png" alt="">
  </div>
</template>

<style scoped>
h2{
  text-align: center;
  color: #fff;
  font-weight: lighter;
  font-family: Aclonica, sans-serif;
}


.projectCard {
  position: relative;
  margin-bottom: 200px;
  cursor: pointer;
}

.projectCard:hover #diamondTop,
.projectCard:hover #diamondBottom {
  animation: twinkle 2.5s ease-in-out;
}

#diamondTop{
  position: absolute;
  top: 180px;
  left: -35px;
}


#diamondBottom{
  position: absolute;
  right: -35px;
  bottom: -30px;
}


#card{
  position: relative;
  margin-top: 200px;
}


#darkblueBack {
  position: absolute;
  width: 234px;
  height: 310px;
  background: #0F142C;
  rotate: 18deg;
}

#cardFront {
  position: relative;
  width: 234px;
  height: 310px;
  border: 1px solid white;
  border-radius: 23px;
  background-image: linear-gradient(rgba(14,20,56,0.1), rgba(14,20,56,0.1)), url("/cardBackground.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  transition: transform 1s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
}

#cardFront:hover {
  transform: scale(1.01);
}

#diamondTop{
  margin-top: -10px;
}

@keyframes twinkle{
  0%{
    transform: scale(1);
  }

  25%{
    transform: scale(1.3);
  }

  50% {
    transform: scale(1);
  }

  75%{
    transform: scale(1.2);
  }

  100%{
    transform: scale(1);
  }
}

</style>