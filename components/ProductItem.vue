<template>

    <v-card>
      <v-card-title>
        {{ product.attributes.name }}
<!--        name-->
      </v-card-title>
      <v-card-subtitle>
        {{ product.attributes.display_price }}
<!--        price-->
      </v-card-subtitle>
      <v-card-text>
        {{product.attributes.description}}
<!--        description-->
      </v-card-text>
      <v-card-actions>
        <v-btn
          color="primary"
        @click="addToCart(product)"
        >
add to Cart
        </v-btn>
      </v-card-actions>
    </v-card>

</template>

<script>
import {mapActions} from 'vuex';
export default {
  name: "productItem",
  props: {
    product: Object
  },
  methods:{
    addToCart(item){
      this.showMessage({ message: 'product added', color: 'success',show:true });
      this.addToBasket(item);
    },
    ...mapActions(['addToBasket','showMessage'])
  },
  computed:{

  }

}
</script>

<style scoped>

</style>
