<template>
  <div class="totalContainer">
    <div class="icon">
      <img src="../assets/images/imageLogo.png" alt="logo" />
    </div>
    <div class="license">
      <h5>Copyright © 2024 infoCat Embalses</h5>
    </div>
    <div class="info">
      Información legal / <RouterLink to="/" class="info"><b>Política de privacidad</b></RouterLink>
    </div>
    
    <hr><hr class="hr2">
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
  cursor: url(../assets/images/arrow-pointer-solid.svg), url(cursor.cur), pointer;

}
.license{
  font-size:12px;

}
hr{
  margin-right: 0%;
  width: 40%;
}
.hr2{
  margin-left: 0%;
  width: 40%;
  margin-right: 50%;
}

.info{
  color:white;
  font-size:10px;
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
  margin-bottom:10px;
}
.socialMediaIcon{
  width:20px;
  color:white;
}
img{
  padding-top:8px;
  width:40px;
}
</style>
