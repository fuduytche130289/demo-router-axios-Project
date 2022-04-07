<template>
  <div>
    <!-- Menu -->
<!--    <div class="w-full h-24 shadow-lg shadow-black-500/50 flex md:space-x-6 md:px-0 px-5 justify-between items-center ">-->
<!--      <div class="md:order-1 order-2 w-32 pl-6">-->
<!--        <img src="./assets/logo.png" alt="logo">-->
<!--      </div>-->
<!--      <div class="md:order-2 order-1 pr-6 flex space-x-2 uppercase font-semibold items-center">-->
<!--        <div class=".pr-4"><a href="">Home</a></div>-->
<!--        <div class=".pr-4"><a href="">Danh mục</a></div>-->
<!--        <div class=".pr-4"><a href="">Đăng ký</a></div>-->
<!--        <div class=".pr-4"><a href="">Đăng nhập</a></div>-->
<!--        <div class="relative">-->
<!--          <div class="w-8"><img src="./assets/shopping.jpg" alt="shopping"></div>-->
<!--          <div-->
<!--              class="bg-red-400 text-white -top-4 -right-2 absolute rounded-full text-sm w-6 h-6 flex items-center justify-center cart-item-counter">-->
<!--            0-->
<!--          </div>-->

<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    &lt;!&ndash; New product &ndash;&gt;-->
<!--    <div class="container mx-auto">-->
<!--      <h4 class="text-2xl font-bold mt-5">Sản phẩm mới nhất</h4>-->
<!--      <div class="grid  grid-cols-1 md:grid-rows-2 md:grid-cols-4 mt-5 gap-10">-->
<!--        <a href="" class="bg-white shadow col-span-1" v-for="(cartsItem,cartsIndex) in carts" :key="cartsIndex">-->
<!--          <div>-->
<!--            <img :src="cartsItem.image.full_image_path" class="z-10 w-full h-72 object-cover" alt="shoe">-->
<!--            <div class="space-y-4 mt-5 px-4">-->
<!--              <div class="flex justify-between">-->
<!--                <h4 class="uppercase font-extrabold text-xl text-left">{{ cartsItem.name }}</h4>-->
<!--                <button><i class="fa-regular fa-heart text-xl"></i></button>-->
<!--              </div>-->
<!--              <p class="font-bold text-2xl text-red-500 text-left"><span>{{ cartsItem.price }}</span></p>-->
<!--            </div>-->
<!--            <div class="flex w-full mt-5 items-center justify-between px-2">-->
<!--              <div class="flex space-x-2 font-bold">-->
<!--                <span class="bi bi-plus cursor-pointer"><i class="fa-solid fa-plus"></i></span>-->
<!--                <input type="text" readonly class="border rounded w-12 text-center font-medium" value="1">-->
<!--                <span class="bi bi-dash cursor-pointer"><i class="fa-solid fa-minus"></i></span>-->
<!--              </div>-->
<!--              <div class="flex justify-between space-x-2">-->
<!--                <button-->
<!--                    class="flex-grow-1 cursor-pointer block flex items-center justify-center bg-gray-800 p-3 text-white font-bold">-->
<!--                  Add to Cart-->
<!--                </button>-->
<!--                <button-->
<!--                    class="flex-grow-1 px-4 cursor-pointer block flex items-center justify-center bg-gray-800 p-3 text-white font-bold">-->
<!--                  <i class="fa-solid fa-share-nodes text-xl"></i>-->
<!--                </button>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </a>-->
<!--      </div>-->
<!--    </div>-->
<!--    &lt;!&ndash; Footer &ndash;&gt;-->
<!--    <div class="bg-gray-400  mx-12 mt-7 flex justify-around p-9">-->
<!--      <div>-->
<!--        <img src="./assets/logo.png" alt="" key="-->
<!--          " class="w-18 h-16 ">-->
<!--        <p class="font-bold mt-5">-->
<!--          Công ty TNHH 1 thành viên Luân-->
<!--        </p>-->
<!--        <p class="font-bold">-->
<!--          Địa chỉ: Hạ Long - Quảng Ninh-->
<!--        </p>-->
<!--        <p class="font-bold">-->
<!--          SDT: 0868120192-->
<!--        </p>-->
<!--        <p class="font-bold">-->
<!--          Fax: 0868120196-->
<!--        </p>-->
<!--      </div>-->
<!--      <div>-->
<!--        <p class="font-bold">-->
<!--          Về chúng tôi-->
<!--        </p>-->
<!--        <p class="font-bold">-->
<!--          Chính sách mua hàng-->
<!--        </p>-->
<!--        <p class="font-bold">-->
<!--          Chính sách trả hàng-->
<!--        </p>-->
<!--      </div>-->
<!--      <div>-->
<!--        <p>Mạng xã hội</p>-->
<!--        <span><i class="fa-brands fa-facebook mr-3"></i></span>-->
<!--        <span><i class="fa-brands fa-facebook mr-3"></i></span>-->
<!--        <span><i class="fa-brands fa-facebook mr-3"></i></span>-->
<!--      </div>-->
<!--    </div>-->
    <!--    end footer-->
    <router-link to="/">Home</router-link>
    <router-link to="/lien-he?id=1">Contact</router-link>
    <router-link to="/dang-nhap">Login</router-link>
    <br>
    <router-link :to="{name:'home',query:{id:1}}">Home</router-link>
    <router-link to="/lien-he">Contact</router-link>
    <router-link to="/dang-nhap">Login</router-link>
    <br>
    <router-link :to="{path:'/',query: {id:1}}">Home</router-link>
    <router-link :to="{path:'/lien-he'}">Contact</router-link>
    <router-link to="/dang-nhap">Login</router-link>


    <router-view></router-view>

    <button @click="_goToContactPage">Chuyển sang trang contact</button>
  </div>
</template>

<script>


export default {
  name: 'App',
  components:{
  },
  data() {
    return {
      carts: [],
    }
  },
  // methods: {
  //   getData() {
  //     fetch('http://192.168.1.30:8000/api/v1/home')
  //         .then((res) => res.json())
  //         .then((data) => {
  //           this.carts = data.lastProducts;
  //           console.log(this.carts)
  //         })
  //   }
  // }, components: {},
  // mounted() {
  //   this.getData();
  // }
  methods:{
    _goToContactPage(){
      this.$router.push({name: 'contact'});//quay lại được trang trước
    //  this.$router.replace({name:'contact'});//k quay lại được trang trước
    //  this.$router.back();//quay trở lại page trước
    //  this.$router.go(-1);//quay lại page có vị trí n
    //  this.$router.forward();//tiến tới trang sau
      return;
    }
  }

}
</script>

<style>

</style>
