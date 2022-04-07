<template>
  <div>
    <div>CHi tiết sp</div>
    {{productId}}
    {{slug}}
  </div>
</template>

<script>
export default {
  name: "ProductDetail",
  data() {
    return {
      productId:0,
      slug:''
    }
  },
  mounted() {
    this.productId = this.$route.query.id;
    this.slug= this.$route.params.name;
  }
}
</script>

<style scoped>
</style>