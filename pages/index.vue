<template>
<div>
  <div class="container">
    <h1>List</h1>
    <table class="table table-striped table-dark">
      <thead>
        <tr>
          <th>Filename</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="file in files">
          <td>{{file}}</td>
          <td><a :href="'/file/'+file.split('.')[0]">explore</a></td>
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
      files: "tables/files",
    }),
  },
  data() {
    return {

    };
  },
  async mounted() {
    await this.$store.dispatch("tables/fetchFiles");
  },
})
</script>
