<template>
<div>
  <div>
    {{homeData}}
  </div>
</div>
</template>

<script>
import {homeService} from "../service/homeService";

export default {
  name: "HomeComponent",
  data() {
    return {
      homeData: {}
    }
  },
  async mounted() {
    try {
      const resp = await homeService.getHome()
      this.homeData = resp.data;
    } catch (e) {
      console.log(e)
    }

  }
}
</script>

<style scoped>

</style>