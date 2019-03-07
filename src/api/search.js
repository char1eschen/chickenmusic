import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'

const debug = process.env.NODE_ENV !== 'production'

import axios from 'axios'

export function getHotKey() {
  const url = 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg'

  const data = Object.assign({}, commonParams, {
    needNewCode: 1,
    platform: 'h5'
  })

  return jsonp(url, data, options)
}

export function search(query, page, zhida, perpage) {
  // const url = '/api/getSearch'
  const url = debug ? '/api/getSearch' : 'http://music.rubychen.me/api/getSearch'

  const data = Object.assign({}, commonParams, {
    g_tk: 1928093487,
    inCharset: 'utf-8',
    outCharset: 'utf-8',
    notice: 0,
    format: 'json',
    w: query,
    p: page,
    perpage,
    n: perpage,
    catZhida: zhida ? 1 : 0,
    zhidaqu: 1,
    t: 0,
    flag: 1,
    ie: 'utf-8',
    sem: 1,
    aggr: 0,
    remoteplace: 'txt.mqq.all',
    uin: 0,
    needNewCode: 1,
    platform: 'h5'
  })

  return axios
    .get(url, {
      params: data
    })
    .then(res => {
      return Promise.resolve(res.data)
    })
}
