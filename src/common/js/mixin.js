import {mapGetters} from 'vuex'

export const playlistMixin = {
  computed: {
    ...mapGetters([
      'playlist'
    ])
  },
  mounted() {
    this.handlePlaylist(this.playlist)
  },
  activated() {
    this.handlePlaylist(this.playlist)
  },
  watch: {
    playlist(newVal) {
      this.handlePlaylist(newVal)
    }
  },
  methods: {
    handlePlaylist() {
      throw new Error('component must implement handlePlaylist method')
    }
  }
}

// export const suggestlistMixin = {
//   // computed: {
//   //   suggestlist(data) {
//   //     return data.song.list
//   //   }
//   // },
//   mounted() {
//     this.handleSuggestlist(this.result)
//   },
//   activated() {
//     this.handleSuggestlist(this.result)
//   },
//   watch: {
//     suggestlist(newVal) {
//       this.handleSuggestlist(newVal)
//     }
//   },
//   methods: {
//     handleSuggestlist() {
//       throw new Error('component must implement handleSuggestlist method')
//     }
//   }
// }
