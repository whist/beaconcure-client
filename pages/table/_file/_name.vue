<template>
  <div>
    <div class="container">
      <h1>file: {{ currentFile }}.json table: {{$route.params.name}} spec</h1>
      <table v-if="getTable()" class="table table-striped table-dark">
        <thead>
        <tr>
          <th>column name</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="column in getTable().columns">
          <td>{{column}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>

</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from "vuex";

export default Vue.extend({
  name: 'IndexPage',
  computed: {
    ...mapGetters({
      tables: "tables/listByFile",
      currentFile: "tables/currentFile"
    }),
  },
  data() {
    return {

    };
  },
  async mounted() {
    console.log("router", this.$route.params)
    await this.$store.dispatch("tables/fetchTablesByFile", this.$route.params.file+".json");
  },
  methods: {
    getTable(){
      for (let i=0;i<this.tables.length;i++){
        if (this.$route.params.name == this.tables[i].title) return this.tables[i]
      }
    }
  }
})
</script>
