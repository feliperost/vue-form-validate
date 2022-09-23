<template>
  <div class="form">
    <VeeValidateForm/>
  </div>
</template>


<script>
import VeeValidateForm from '@/components/VeeValidateForm.vue'

export default {
  name: 'FormView',
  components: {
    VeeValidateForm
  }
}
</script>