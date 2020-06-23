const fetch = require('node-fetch')

// eslint-disable-next-line require-await
exports.isBlacklisted = function (hostname) {
  // const hostnameBlacklist = /((local|dev(elopment)?|stag(e|ing)?|test(ing)?|demo(shop)?|admin|cache)\.|pr(eview)?-[0-9]{1,}|\/admin|\.local|localhost)/
  // return hostnameBlacklist.test(hname)
  const blacklist = ['localhost']
  return blacklist.includes(hostname)
}

exports.isOutdated = function (date, days) {
  const today = new Date()
  const diff = +today - +new Date(date)

  return diff >= 1000 * 60 * 60 * 24 * days
}

exports.fetchStrapi = async function (url, { method, body }) {
  // console.log('suka', url)
  // console.log('suka', method)
  // console.log('suka', body)
  // console.log('final suka', {
  //   method,
  //   ...(body ? { body } : {}),
  //   headers: {
  //     authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
  //     'Content-Type': 'application/json'
  //   }
  // })

  return await fetch(url, {
    method,
    ...(body ? { body } : {}),
    headers: {
      authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
      'Content-Type': 'application/json'
    }
  })
    .then((response) => {
      return response.json()
    })
    .catch((err) => {
      throw new Error(err)
    })
}
