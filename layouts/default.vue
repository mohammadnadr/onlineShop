<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          :to="'/'"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>mdi-apps</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Products List</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          :to="'/checkout'"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>mdi-shopping</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="d-flex justify-space-between align-center">Cart<v-chip>{{basket.length}}</v-chip></v-list-item-title>

          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-snackbar
      top v-model="snackbar_show" :color="snackbar.color" :timeout='timeout'
    >
      {{ snackbar.message }}
    </v-snackbar>
  </v-app>
</template>

<script>
import {mapActions, mapState} from 'vuex';
export default {
  name: 'DefaultLayout',
  data () {
    return {
      timeout:3000,
      clipped: false,
      drawer: true,
      miniVariant: false,
      title: 'Shop',
      snackbar_show:false,
    }
  },
  methods:{
    getBasket(){
      this.setBasket(JSON.parse(sessionStorage.getItem('basket')))
    },
    ...mapActions(['setBasket'])
  },
  mounted() {
    this.getBasket();
  },
  computed:{
    ...mapState(['snackbar','basket'])
  },
  watch:{
    snackbar(){
      this.snackbar_show = this.snackbar.show;
    }
  }
}
</script>
