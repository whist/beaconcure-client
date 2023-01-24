
export const state = () => ({
  listByFile: {},
  files: [],
  currentFile: null
})

export const getters = {
  files(state) {
    return state.files
  },
  listByFile(state) {
    if (state.currentFile) return state.listByFile[state.currentFile]
    else return []
  },
  currentFile(state) {
    return state.currentFile
  }
}

export const mutations = {
  setFiles(state, files) {
    state.files = files
  },
  setListByFile(state, data){
    state.listByFile[data.file] = data.tables
  },
  setCurrentFile(state, file){
    state.currentFile = file
  }
}

export const actions = {
  async fetchFiles({ state, commit }) {
    if (state.files.length <=0) {
      const res = (await this.$axios.get('/api/table/files', { params: { } }));
      commit('setFiles', res.data)
    }
  },
  async fetchTablesByFile({ state, commit }, file) {
    if (!state.listByFile[file]) {
      const res = (await this.$axios.get('/api/table/file/'+file, { params: { } }));
      console.log("fetchTablesByFile", file, res.data);
      commit('setCurrentFile', file)
      commit('setListByFile', {file: file, tables: res.data})

    }
  }
}
