<template>
  <div id="app">
    <!-- detail不被缓存 -->
    <keep-alive exclude="Detail">
        <router-view />
      <router-view/>
    </keep-alive>
  </div>
</template>

