<template>
  <div>
    <h1>Profile View</h1>
    <BaseLoading v-if="isLoading" :variant="'danger'" />
    <template v-if="profileData !== null">
      <MainBlock :profileData="profileData" />
    </template>
    <p></p>
  </div>
</template>

<script>
import BaseLoading from "@/components/BaseLoading";
import setError from "@/mixins/setError";
import MainBlock from "./MainBlock/Index";
import { getApiAccount } from "@/api/search";

export default {
  name: "ProfileView",

  mixins: [setError],
  components: { BaseLoading, MainBlock },
  data() {
    return {
      isLoading: false,
      profileData: null
    };
  },

  created() {
    this.fetchData();
  },

  methods: {
    fetchData() {
      this.isLoading = true;
      const { region, battleTag: account } = this.$route.params;
      getApiAccount({ region, account })
        .then(({ data }) => {
          this.profileData = data;
        })
        .catch(err => {
          this.profileData = null;
          const errObj = {
            routeParams: this.$route.params,
            message: err.message
          };
          if (err.response) {
            errObj.data = err.response.data;
            errObj.status = err.response.status;
          }

          this.setApiErr(errObj);

          this.$router.push({ name: "Error" });
        })
        .finally(() => {
          this.isLoading = false;
        });
    }
  }
};
</script>
