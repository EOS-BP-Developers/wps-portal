<template>
  <div class="footer">
    WP System {{ currentYear }}
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
  .footer {
    text-align: center;
    background-color: #132032;
    padding: 40px 0;
    width: 100%;
    margin-top: auto;
    color: white;
  }
</style>
