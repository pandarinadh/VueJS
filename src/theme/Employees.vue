<template>
<div>
  <div class="form-inline mr-auto">
      <label for="formMax" class="font-weight-bold mr-2">max</label>
      <input type="text" class="form-control w-25" v-model = "inputvalue" >
      <b>Cart</b>
      <span class="badge badge-successs">  {{cart.lenth}} </span>
  </div>
  <div class="columns">
        <div class="column is-one-third" v-for="(employee) in employees" v-if="employee.employee_age > Number(inputvalue)" :key="employee.id">
           <app-post :link="employee.profile_image">
              <h3 slot="title"> {{ employee.employee_name}} </h3>
              <h3 slot="content"> {{ employee.employee_salary}} </h3>
           </app-post>
           <button class="btn btn-info" v-on:click="addItem(employee)"> Add Employee</button>
        </div>
    </div>
  </div>
</template>
<script>
import Post from './Post.vue'
import * as fetch from 'node-fetch'

export default {
  components: {
    'app-post': Post
  },
  data () {
    return {
      employees: null,
      inputvalue: 10,
      cart: []
    }
  },
  methods: () => {
    function addItem (employee) {
      this.cart.push(employee)
    }
  },
  mounted () {
    fetch('http://dummy.restapiexample.com/api/v1/employees')
      .then(response => response.json())
      .then(data => {
        console.log(data.data)
        this.employees = data.data
        console.log(this.employees)
      })
  }
}
</script>
