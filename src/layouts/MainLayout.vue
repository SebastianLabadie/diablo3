<template>
  <div class="container">
    <HeaderBar />

    <router-view />

    <Footer />
  </div>
</template>

<script>
import HeaderBar from "@/components/HeaderBar/Index";
import Footer from "@/components/Footer/Index";

export default {
  name: "MainLayout",
  components: {
    HeaderBar,
    Footer
  }
};
</script>
