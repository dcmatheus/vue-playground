<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    |
    <RouterLink to="/about">About</RouterLink>
    |
    <RouterLink :to="{ name: 'services' }">Serviços</RouterLink>
  </nav>
  <RouterView/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style scoped>
nav {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  padding: 30px;
}
nav a {
  color: #2c3e50;
  text-decoration: none;
  font-weight: bold;
}

</style>
