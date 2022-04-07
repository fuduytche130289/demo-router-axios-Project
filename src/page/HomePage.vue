<template>
  <div>

    <!-- New product -->
    <div class="container mx-auto">
      <h4 class="text-2xl font-bold mt-5">Sản phẩm mới nhất</h4>
      <div class="grid  grid-cols-1 md:grid-rows-2 md:grid-cols-4 mt-5 gap-10">

          <a href="" class="bg-white shadow col-span-1"
             v-for="(cartsItem,cartsIndex) in carts" :key="cartsIndex">
            <router-link :to="{name:'detail-product'}">
            <div>
              <img :src="cartsItem.image.full_image_path" class="z-10 w-full h-72 object-cover" alt="shoe">
              <div class="space-y-4 mt-5 px-4">
                <div class="flex justify-between">
                  <h4 class="uppercase font-extrabold text-xl text-left">{{ cartsItem.name }}</h4>
                  <button><i class="fa-regular fa-heart text-xl"></i></button>
                </div>
                <p class="font-bold text-2xl text-red-500 text-left"><span>{{ cartsItem.price }}</span></p>
              </div>
              <div class="flex w-full mt-5 items-center justify-between px-2">
                <div class="flex space-x-2 font-bold">
                  <span class="bi bi-plus cursor-pointer"><i class="fa-solid fa-plus"></i></span>
                  <input type="text" readonly class="border rounded w-12 text-center font-medium" value="1">
                  <span class="bi bi-dash cursor-pointer"><i class="fa-solid fa-minus"></i></span>
                </div>
                <div class="flex justify-between space-x-2">
                  <button
                      class="flex-grow-1 cursor-pointer block flex items-center justify-center bg-gray-800 p-3 text-white font-bold">
                    Add to Cart
                  </button>
                  <button
                      class="flex-grow-1 px-4 cursor-pointer block flex items-center justify-center bg-gray-800 p-3 text-white font-bold">
                    <i class="fa-solid fa-share-nodes text-xl"></i>
                  </button>
                </div>
              </div>
            </div>
            </router-link>
          </a>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      carts: [],
    }
  },
  methods: {
    getData() {
      fetch('http://128.199.211.17/api/v1/home')
          .then((res) => res.json())
          .then((data) => {
            this.carts = data.lastProducts;
            console.log(this.carts)
          })
    },
  }, components: {},
  mounted() {
    this.getData();
  }
}
</script>

<style scoped>

</style>