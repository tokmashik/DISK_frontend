<template>
  <div class="navbar">
    <div class="navblackbar">
    <div @click="$router.push('/')" class="mainlogo">DISK</div>
    <div class="navbar__btns ">
      <nav-button @click="$router.push('/registration')" style="margin-right: 21px">Регистрация</nav-button> 
      <nav-button @click="$router.push('/authorization')" style="margin-right: 21px">Авторизация</nav-button>
      <nav-button @click="$router.push('/dictionary')" >Словарь</nav-button>
      </div>
      <Avatar label="V" class="mr-2" size="large" style="background-color:#2196F3; color: #ddd; margin-top: 15px;" shape="circle"  />
  </div>
  </div>
</template>

<script defer>

</script>

<style>
.navbar {
  width: 100%;
  display: flex;
  font-weight: 300;
}

.navblackbar {
  width: 100%;
  display: flex;
  background-color: #ffffff;
  height: 80px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.5);
}

.mainlogo {  
  align-items: center;
  cursor: pointer; 
  font-size: 36px;
  margin-left: 7%;
  margin-top: 14px;
  margin-bottom: 22px;
}

.navbar__btns {
  margin-top: 28px;
  margin-right: 15px;
  cursor: pointer;
  margin-left: 55%;
}

.LogInBtn {
  background: #FFFFFF;
  border-radius: 30px;
  width: 165px;
  height: 38px;
  cursor: pointer; 
  border: 0px;
  font-size: 20px;
  color:#1B1B1B;
  font-family: 'StretchPro';
}

</style>

