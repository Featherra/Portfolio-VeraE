<script setup>

</script>

<template>
<div id="textBanner">
  <div id="textContainer">
    <img id="diamondSmall" src="/diamondShape.png" alt="lightBlueDiamond">
    <h1 id="text">Projects</h1>
    <img id="diamondBig" src="/diamondShape.png" alt="lightBlueDiamond">
  </div>
  <div id="underline"></div>
</div>
</template>

<style scoped>
#textContainer {
  display: flex;
  justify-self: right;
  align-items: center;
  color: #fff;
  font-size: 30px;
  width: 70%;
  height: 90px;
}

#text{
  font-weight: lighter;
  font-family: "Bagel FatOne", sans-serif;
  font-size: 50px;
  padding-left: 30px;
  margin-bottom: 10px;
}

#underline{
  border-bottom: 1px solid #fff;
  width: 50%;
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
</style>