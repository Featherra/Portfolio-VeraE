<script setup>

</script>

<template>
<div id="container">
  <div id="softskillsText">
    <p>Eager to learn <br><br> Perfectionist</p>
    <p>Communication <br><br> On time (destination)</p>
    <p>Discipline <br><br> Attention to Detail</p>
  </div>
</div>
</template>

<style scoped>
  #container{
    width: 50%;
    background-color: #252A48;
    padding: 5px;
    margin-top: 10px;
    justify-self: center;
    border-radius: 15px;

  }

  #softskillsText{
    display: flex;
    justify-content: space-between;
    color: #fff;
    font-family: Aclonica, sans-serif;
    margin: 5px 50px 5px 50px;
  }

  @media (max-width: 1024px){
    #softskillsText{
      gap: 30px;
      margin: 5px 40px 5px 40px;
    }

    @media (max-width: 768px){
      #softskillsText{
        gap: 20px;
        font-size: 12px;
        margin: 5px 25px 5px 25px;
      }
    }

    @media (max-width: 426px){
      #softskillsText{
        flex-direction: column;
        gap: 10px;
        margin: 5px 30px 5px 30px;
      }
    }
  }
</style>