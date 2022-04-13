<template>
  <div class="container mx-auto">
    <div class="flex justify-center my-6 ">
      <div class="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
        <div class="flex-1">
          <table class="w-full text-sm lg:text-base" cellspacing="0" v-for="(favoriteItem, favoriteIndex) in favorite.articles"
                 :key="favoriteIndex">
          {{favoriteItem.author}}
            {{favoriteItem.content}}
            {{favoriteItem.urlToImage}}
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      favorite: [],
    }
  },
  mounted() {
    if (localStorage.getItem("favorite")) {
      this.favorite = JSON.parse(localStorage.getItem("favorite"))
    }
  },

}
</script>

<style>

</style>