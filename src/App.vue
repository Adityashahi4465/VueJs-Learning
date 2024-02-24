

<template>
  <div>
    <!-- Components -->
    <div>
      <!-- <Greet name="aditya" hero="Grininja" />
  <Greet name="rphan" hero="Pikatchu" />
  <Greet name="ram" hero="Doremon" />
  <Greet :name="name" :hero="hero" />
  <Article title="Prop Types" :likes="49" :isPublished="true" />
  <Article :likes="49" :isPublished="true" />
  <ComponentC />
  <Popup v-show="showPopup" @close="showPopup = false" />
  <button @click="showPopup = true">Show Popup</button> -->
      <!-- <h4>Main App</h4>
  <input type="text" v-model="name">
  <ChildStyles /> -->

      <!--  Dynamic Componenets -->
      <!-- <button @click="activeTab = 'TabA'">Tab A</button>
  <button @click="activeTab = 'TabB'">Tab B</button>
  <button @click="activeTab = 'TabC'">Tab C</button> -->
      <!-- 
  <TabA v-if="activeTab === 'TabA'" />
  <TabB v-if="activeTab === 'TabB'" />
  <TabC v-if="activeTab === 'TabC'" /> -->

      <!-- <keep-alive>

    <component :is="activeTab"></component>
  </keep-alive> -->


    </div>
    <!-- Http -->
    <div>
      <!-- <PostList />
      <h2>Create Post</h2>
      <CreatePost /> -->
    </div>

    <!-- Composition API -->
    <!-- <VMoodel /> -->

    <!-- Pinia  -->
    <Pinina />
  </div>
</template>
<script>

import Article from './components/Article.vue'
import Greet from './components/Greet.vue'
import ComponentC from './components/ComponentC.vue'
import Popup from './components/Popup.vue'
import TabA from './components/TabA.vue'
import TabB from './components/TabB.vue'
import TabC from './components/TabC.vue'
import PostList from './components/http/PostList.vue'
import CreatePost from './components/http/CreatePost.vue'
import Pinina from './components/pinia/Pinina.vue'
export default {
  name: 'App',

  data() {
    return {
      name: '',
      hero: 'Charizard',

      showPopup: false,
      activeTab: 'TabA',
    }
  },
  provide: {
    username: 'Vishwas',
  },
  components: {
    Greet,
    Article,
    ComponentC,
    Popup,
    TabA,
    TabB,
    TabC,
    PostList,
    CreatePost,
    Pinina,
  }
}
</script>
<style scoped>
h4 {
  color: yellow;
}
</style>
