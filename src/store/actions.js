import * as types from './mutation-types'
import {playMode} from 'common/js/config'
import {shuffle} from 'common/js/util'

function findIndex(list, song) {
  return list.findIndex((item) => {
    return item.id === song.id
  })
}

export const selectPlay = function ({commit, state}, {list, index}) {
  commit(types.SET_SEQUENCE_LIST, list)
  if (state.mode === playMode.random) {
    let randomList = shuffle(list)
    commit(types.SET_PLAYLIST, randomList)
    index = findIndex(randomList, list[index])
  } else {
    commit(types.SET_PLAYLIST, list)
  }
  commit(types.SET_CURRENT_INDEX, index)
  commit(types.SET_FULL_SCREEN, true)
  commit(types.SET_PLAYING_STATE, true)
}

export const randomPlay = function ({commit}, {list}) {
  commit(types.SET_PLAY_MODE, playMode.random)
  commit(types.SET_SEQUENCE_LIST, list)
  let randomList = shuffle(list)
  commit(types.SET_PLAYLIST, randomList)
  commit(types.SET_CURRENT_INDEX, 0)
}

export const insertSong = function ({commit, state}, song) {
  let playlist = state.playlist
  let sequenceList = state.sequencelist
  let currentIndex = state.currentIndex
  // get current song
  let currentSong = playlist[currentIndex]
  // find if currentlist has the song need to be inserted,
  // and return index
  let fpIndex = findIndex(playlist, song)
  // insert a song, currentIndex nend +1
  currentIndex++
  // insert a song
  playlist.splice(currentIndex, 0, song)
  // if has the song
  if (fpIndex > -1) {
    // if currentIndex is after the current song's index
    if (currentIndex > fpIndex) {
      playlist.splice(fpIndex, 1)
      currentIndex--
    } else {
      playlist.splice(fpIndex + 1, 1)
    }
  }
}