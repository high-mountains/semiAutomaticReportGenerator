export const parseQuerySearch = (q) => {
  let s = "?"
  let k = false
  for (let i in q) {
    if (k) s += '&'
    else k = true
    s += i + '='
    s += q[i]
  }
  return s
}

export const parseSearchQuery = (q) => {
  if (q.length) {
    const a = q.slice(1)
    const qs = a.split('&')
    return qs.reduce((t, e) => {
      const b = e.split('=')
      return { ...t, [b[0]]: b[1] }
    }, {})
  } else return ""
}