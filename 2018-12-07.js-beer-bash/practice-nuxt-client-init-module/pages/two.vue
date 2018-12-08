<template>
  <div class="one-container" style="display:flex;flex-direction:column;justify-content:center;">
    <h1 class="title" v-if="isClient()">Two Client</h1>
    <h1 class="title" v-else>Two Server</h1>
  </div>
</template>

<script>
export default {
  components: {
  },
  methods: {
    isClient() {
      return (typeof window !== 'undefined' && window.document)
    }
  }
}
</script>

<style>
.one-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 180px;
  color: #35495e;
  letter-spacing: 1px;
}

</style>

