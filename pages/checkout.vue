<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2>basket</h2>
      </v-col>
      <v-col cols="12" md="8">
        <v-simple-table
        >
          <thead>
          <tr>
            <th class="text-left">
              Name
            </th>
            <th class="text-left">
              price
            </th>
            <th>
              functions
            </th>
          </tr>
          </thead>
          <tbody>
          <tr
            v-for="item in basket"
            :key="item.name"
          >
            <td>{{ item.attributes.name }}</td>
            <td>{{ item.attributes.display_price }}</td>
            <td>
              <div class="pa-2">
                <v-btn @click="deletebasket(item.id)" color="error" small outlined>
                  delete cart
                </v-btn>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              total
            </td>
            <td>
              {{ calculateTotalAmount }} $
            </td>
          </tr>
          </tbody>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import ProductItem from "../components/ProductItem";

import {mapActions, mapState} from 'vuex';

export default {
  name: 'CheckoutPage',
  // components: {ProductItem},
  data() {
    return {
      headers: [
        {text: 'name', value: 'name'},
        {text: 'price', value: 'price'},
        {text: 'remove', value: 'remove'},

      ],
    }
  },
  methods: {
    deletebasket(item_id){
      this.showMessage({ message: 'product removed', color: 'warning',show:true });
      this.DeleteFromBasket(item_id)
    },
    getBasket(){
      this.setBasket(JSON.parse(sessionStorage.getItem('basket')))
    },
    ...mapActions(['DeleteFromBasket','setBasket','showMessage'])
  },
  mounted() {
    this.getBasket();
  },
  computed: {
    calculateTotalAmount(){
      let total = 0
      this.basket.forEach(item=>{
        total += parseFloat(item.attributes.price)
      })
      return total
    },
    ...mapState(['basket'])
  }
}
</script>
