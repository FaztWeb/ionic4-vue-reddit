<template>
  <div>
    <ion-card v-for="post in posts" :key="post.data.id" style="border: 1px solid blue;">
      <ion-card-content>
       <template v-if="post.data.thumbnail.startsWith('https://')">
          <img :src="post.data.thumbnail">
        </template>
        <ion-label color="light">{{post.data.title}}</ion-label>
        <ion-button color="tertiary" expand="full" @click="viewMore(post.data)">
          View More
        </ion-button>
      </ion-card-content>
    </ion-card>
    <!-- <ion-list>
        <ion-item v-for="post in posts" :key="post.data.id">
          <img :src="post.data.thumbnail" class="thumb">
          <ion-label>{{post.data.title}}</ion-label>
        </ion-item>
    </ion-list> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "home",
  components: {},
  data() {
    return {
      posts: []
    };
  },
  async mounted() {
    const response = await axios.get(
      "https://www.reddit.com/r/marvelstudios.json"
    );
    this.posts = response.data.data.children;
  },
  methods: {
    viewMore(post) {
      this.$router.push({name: 'detail', params: {post}})
    }
  }
};
</script>

<style>
.thumb {
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin-right: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
