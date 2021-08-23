<template>
<div>
  <div class="form-inline mr-auto">
      <label for="formMax" class="font-weight-bold mr-2">max</label>
      <input type="text" class="form-control w-25" v-model = "inputvalue" >
  </div>
  <div class="columns">
        <div class="column is-one-third" v-for="(post) in posts" v-if="post.price > Number(inputvalue)" :key="post.id">
           <app-post :link="post.link">
              <h3 slot="title"> {{ post.title}} </h3>
              <h3 slot="content"> {{ post.content}} </h3>
           </app-post>
           <div v-if="post.id == 2">
             <p>test</p>
          </div>

        </div>
    </div>
  </div>
</template>
<script>
import Post from './Post.vue'
export default {
  components: {
    'app-post': Post
  },
  data () {
    return {
      posts: [
        { id: 1, title: 'PWA Stats', content: 'A community-driven list of stats and news related to Progressive Web Apps', link: 'https://www.pwastats.com/', price: 10 },
        { id: 2, title: 'A Comprehensive Guide To HTTP/2 Server Push', content: 'No longer is HTTP/2 a feature we pine for. It has arrived, and with it comes server push!', link: 'https://www.smashingmagazine.com/2017/04/guide-http2-server-push/', price: 20 },
        { id: 3, title: 'So what’s this GraphQL thing I keep hearing about?', content: 'Why now is the perfect time to learn what exactly this GraphQL thing you keep hearing about really is.', link: 'https://medium.freecodecamp.com/so-whats-this-graphql-thing-i-keep-hearing-about-baf4d36c20cf', price: 30 },
        { id: 4, title: 'State of The Mobile Gap Between Native and Web', content: 'Clearly PhoneGap, and Cordova are still required today in the mobile world, but when is it really needed? Did the web ever catch up?', link: 'https://remysharp.com/2016/05/28/state-of-the-gap', price: 40 },
        { id: 5, title: 'Learning JavaScript Design Patterns', content: 'Design patterns are reusable solutions to commonly occurring problems in software design.', link: 'https://addyosmani.com/resources/essentialjsdesignpatterns/book/', price: 50 },
        { id: 6, title: 'The Power of Custom Directives in Vue', content: 'The beautiful thing about Vue is that it\'s incredibly feature-rich.', link: 'https://css-tricks.com/power-custom-directives-vue/', price: 60 }
      ],
      inputvalue: 10
    }
  }
}
</script>
