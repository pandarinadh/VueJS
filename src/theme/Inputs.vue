<template>
    <div>
        <input type="text" class="form-control w-25" v-model = "inputvalue" >
        {{inputvalue}}
    </div>
</template>
<script>
export default {
  data () {
    return {
      inputvalue: 'test'
    }
  }
}
</script>
