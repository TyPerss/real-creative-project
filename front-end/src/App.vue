<template>
  <div id="app">
    <div class="header">
      <router-link to="/">
        <h1 class="siteName">League Builder</h1>
      </router-link>
      <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/leagues">Leagues</router-link>
        <router-link to="/admin">Admin</router-link>
      </div>
    </div>
    <div class="content">
      <router-view/>
    </div>
    <div class="footer">
      <a href="https://github.com/TyPerss/real-creative-project">
      <img alt="Github" src="./assets/github.png" height = 75px target="_blank">
      </a>
    </div>
  </div>
</template>

<style>
body {
  margin: 0px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.header {
  display: flex;
  justify-content: space-between;
  background: #223d94;
  padding: 10px;
  color: white;
  align-items: center;
}
#nav a {
  font-size: 24px;
  font-weight: bold;
  color: white;
  padding: 20px;
  text-decoration: none;
}
#nav a:hover {
  filter: brightness(90%)
}
#nav a.router-link-exact-active {
  color: #6f8ff7;
}
.siteName {
  color:orange;
  font-size: 40px;
}
.header a {
  text-decoration: none;
}

.footer {
  display: flex;
  justify-content: center;
  background: #223d94;
  padding: 10px;
  color: white;
}

</style>
