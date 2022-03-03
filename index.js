const shortn = {}

shortn.name = function shortn(name, max = 20) {
  name = name.trim().replace(/\s+/g, ' ')
  if (name.length > max) {
    let n = name.split(' ').length - 1
    name = name.split(' ').map((part, i) => {
      if (i < n) {
        return part[0] + '.'
      }
      return part
    }).join(' ')
  }
  return name
}

module.exports = shortn