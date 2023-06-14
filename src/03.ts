// #3 - memory-cache example
const cache = {
  'John': ['55', '99']
}
const handler = {
  get: function(target, player) {
      if(target[player]) {
          return target[player]
      } else {
          fetch('some-api-url')
          .then((scoreboard) => {
              target[player] = scoreboard
              return scoreboard
          })
      }
  }
}

const proxy = new Proxy(cache, handler)