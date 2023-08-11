<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2>
          Products List
        </h2>
      </v-col>
      <v-col cols="12" md="3" v-for="item in products" :key="item.id">
        <ProductItem :product="item"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>


import ProductItem from "../components/ProductItem";

export default {
  name: 'IndexPage',
  components: {ProductItem},
  head() {
    return {

      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Products List'
        },
      ],
    };
  },
  async asyncData({$axios}) {
    try {
      let res = await $axios.get('https://demo.spreecommerce.org/api/v2/storefront/products').catch(err => {
        throw err;
      });
      return {
        products: res.data.data
      };
    } catch (err) {
      console.error(err)
      return {
        products: []
      }
    }
  },
  // async fetch() {
  //   console.log(222);
  //   let products = await this.$axios.$get('https://demo.spreecommerce.org/api/v2/storefront/products')
  //
  //   console.log(products);
  // },
  // methods:{
  //   async fetchInitData(){
  //     console.log(1);
  //     // await this.$axios.get('https://demo.spreecommerce.org/api/v2/storefront/products')
  //     //   .then(res => {
  //     //     this.products = res.data.data;
  //     //     this.meta = res.data.meta;
  //     //     this.links = res.data.links;
  //     //   }).catch(err => {
  //     //     console.log(2);
  //     //     console.log(err);
  //     // });
  //   }
  // },
  // created() {
  //   this.fetchInitData()
  //   this.loading=false
  // }
}
</script>
