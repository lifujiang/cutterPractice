<template>
  <div class="app">
    <router-view />
  </div>  
</template>

<script>
export default {
  
}
</script>

<style lang="scss">

/* reset */
*,
*::before,
*::after{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  white-space:nowrap;
  text-overflow: ellipsis;
}

body{
  color: #333;
  font-family: "Microsoft YaHei",sans-serif;
}

ul,
ol{
  list-style: none;
}

a{
  text-decoration: none;
}

input,
areatext,
button{
  border: none;
  outline: none;
  resize: none;
}

.clearFix:after {
  content: ' ';
  display: block;
  clear: both;
  visibility: hidden;
  height: 0;
  font-size: 0;
}

</style>
