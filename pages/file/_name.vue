<template>
  <div>
    <div class="container">
      <h1>List tables for {{ currentFile }}.json</h1>
      <table class="table table-striped table-dark">
        <thead>
        <tr>
          <th>title (table name)</th>
          <th>num rows</th>
          <th>table notes</th>
          <th>Options</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="table in tables">
          <td>{{table.title}}</td>
          <td>{{table.rows}}</td>
          <td>{{table.notes}}</td>
          <td><a :href="'/table/'+currentFile.split('.')[0]+'/'+table.title">More</a> </td>
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
    await this.$store.dispatch("tables/fetchTablesByFile", this.$route.params.name+".json");
  },
})
</script>
