<template>
  <div id="app">
    <!-- detail不被缓存 -->
    <!-- <keep-alive exclude="Detail">
        <router-view />
    </keep-alive> -->

    <router-view v-slot="{ Component }">
      <keep-alive exclude="Detail">
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

