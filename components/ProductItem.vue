<template>
  <div>
  <v-card>
    <v-card-title>
    title
    </v-card-title>
    <v-card-subtitle>
      subtutle
    </v-card-subtitle>
    <v-card-text>
      descriptions of ad
    </v-card-text>
    <v-card-actions>
      <v-btn>
        add to shoplist
      </v-btn>
    </v-card-actions>
  </v-card>
  </div>
</template>

<script>
export default {
  name: "productItem",
  props:{
    product:Object
  }
}
</script>

<style scoped>

</style>
