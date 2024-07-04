<template>
  <div class="totalContainer">
    <div class="icon">
      <img src="../assets/images/imageLogo.png" alt="logo" />
    </div>
    <div class="license">
      <h5>Copyright © 2024 infoCatEmbalses</h5>
    </div>
    <div class="info">
      Legal information / <RouterLink to="/" class="info"><b>Privacy policy</b></RouterLink>
    </div>
    <div class="socialMedia">
      <img class="socialMediaIcon" src="../assets/images/instagram.png" alt="instagram" />
      <img class="socialMediaIcon" src="../assets/images/whatsapp.png" alt="whatsapp" />
      <img class="socialMediaIcon" src="../assets/images/share.png" alt="share" />
    </div>
  </div>
</template>

<style scoped>
*{
  font-family: "Josefin Sans", sans-serif;
  font-style: normal;
}
.license{
  font-size:12px;

}
.info{
  color:white;
  font-size:12px;
}
.totalContainer {
  background-color: #1f3b50;
  text-align: center;
  padding: 0;
  width: 100%;
  position: absolute;
  bottom: 0;
  margin: 0;
}
h5{
  color:white;
}
.socialMedia {
  display: flex;
  justify-content: center;
  gap: 60px;
  margin-top: 15px;
  margin-bottom:15px;
}
.socialMediaIcon{
  width:20px;
}
img{
  padding-top:8px;
  width:40px;
}
</style>
