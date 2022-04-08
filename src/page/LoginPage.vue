<template>
  <div class="font-sans">
    <div class="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
      <div class="relative sm:max-w-sm w-full">
        <div class="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
        <div class="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
        <div class="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
          <label class="block mt-3 text-sm text-gray-700 text-center font-semibold">
            Login
          </label>
          <form method="#" action="#" class="mt-10" @submit.prevent="_login()">

            <div>
              <input type="text" v-model="email" placeholder="Email"
                     class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0">
            </div>

            <div class="mt-7">
              <input type="password" v-model="password" placeholder="Password"
                     class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0">
            </div>


            <div class="mt-7">
              <button
                  type="submit"
                  class="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                Login
              </button>
            </div>


            <div class="mt-7">
              <div class="flex justify-center items-center">
                <label class="mr-2">Do you have an account?</label>
                <a href="#"
                   class=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                  Sign up
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
import {authService} from "@/service/authService";

export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
    }
  },
  methods: {
    async _login() {
      try {
        const resp = await authService.doLogin({
          email: this.email,
          password: this.password
        })
        const data = resp.data;
        localStorage.setItem("token", data.token);
        alert('Đăng nhập thành công');
        window.location.href = '/';
      } catch (e) {
        console.log(e)
        alert('Email chưa được đăng ký hoặc mật khẩu không đúng')
      }
    },
  }
}
</script>

<style scoped>

</style>