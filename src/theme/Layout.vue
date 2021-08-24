<template>
<div>
    <app-header></app-header>
    <section class="main-section section">
        <div class="container content">
            <employees></employees>
            <inputsvue></inputsvue>
        </div>
        
    </section>
    <app-footer></app-footer>
</div>
</template>
<script>
  import AppHeader from './AppHeader.vue'
  import AppFooter from './AppFooter.vue'
  import InputsVue from './Inputs.vue'
  import EmployeesVue from './Employees.vue'
  export default {
    components: {
      'app-header': AppHeader,
      'app-footer': AppFooter,
      'employees': EmployeesVue,
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