import {commonParams} from './config'
import axios from 'axios'

const debug = process.env.NODE_ENV !== 'production'

export function getLyric(mid) {
  // const url = '/api/lyric'
  const url = debug ? '/api/lyric' : 'http://music.rubychen.me/api/lyric'

  const data = Object.assign({}, commonParams, {
    songmid: mid,
    pcachetime: +new Date(),
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0,
    // g_tk: 67232076,
    format: 'json'
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getSongVkey(mid) {
  // const url = '/api/getSongVkey'
  const url = debug ? '/api/getSongVkey' : 'http://music.rubychen.me/api/getSongVkey'

  const data = Object.assign({}, commonParams, {
    songmid: mid,
    filename: `C400${mid}.m4a`,
    guid: '8111492019',
    uin: 0,
    platform: 'yqq',
    needNewCode: 0,
    cid: '205361747',
    format: 'json'
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
