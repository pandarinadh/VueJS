<template>
<div>
    <app-header></app-header>
    <section class="main-section section">
        <div class="container content">
            <category></category>
            <inputsvue></inputsvue>
        </div>
        
    </section>
    <app-footer></app-footer>
</div>
</template>
<script>
  import AppHeader from './AppHeader.vue'
  import AppFooter from './AppFooter.vue'
  import Category from './Category.vue'
  import InputsVue from './Inputs.vue'
  export default {
    components: {
      'app-header': AppHeader,
      'app-footer': AppFooter,
      'category': Category,
      'inputsvue': InputsVue
    }
}
</script>
<style lang="scss">
$primary: #287ab1;

@import '~bulma';

.columns{
    flex-wrap: wrap
}
</style>