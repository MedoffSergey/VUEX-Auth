<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Montserrat',sans-serif ;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscsale;
  text-align: center;
  background-color: #fff;
  max-width: 1200px;
  margin: 0 auto;
};

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
