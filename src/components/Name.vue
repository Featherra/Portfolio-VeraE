<script setup>

</script>

<template>
  <div id="nameBanner">
    <div id="nameTextContainer">
        <img id="diamondSmall" src="/diamondShape.png" alt="lightBlueDiamond">
      <h1 id="nameText">Vera <span style="color: #28467A">Elfferich</span></h1>
        <img id="diamondBig" src="/diamondShape.png" alt="lightBlueDiamond">
    </div>
    <div id="underline"></div>
  </div>

</template>

<style scoped>
#nameTextContainer{
  display: flex;
  justify-self: right;
  align-items: center;
  color: #fff;
  font-size: 30px;
  background-color: #0F142C;
  width: 80%;
  height: 90px;
}

#nameText{
  padding-left: 30px;
  margin-bottom: 10px;
  margin-left: -30px;
  font-weight: lighter;
}

#underline{
  border-bottom: 1px solid #fff;
  width: 50%;
  justify-self: left;
}

#diamondBig{
  margin-bottom: 60px;
  width: 50px;
  margin-left: -10px;
}

#diamondSmall{
  margin-top: 90px;
  width: 40px;
  margin-left: -30px;
}

@media (max-width: 426px){
  #nameTextContainer{
    font-size: 15px;
    padding-left: 20px;
  }

  #diamondBig{
    width: 30px;
  }

  #diamondSmall{
    width: 20px;
  }
}
</style>