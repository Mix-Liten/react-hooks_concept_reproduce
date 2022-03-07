import { useState } from './LocalReact.js'

export default function Component({ propCount }) {
  const [count, setCount] = useState(0)
  const propCountDoubled = 0

  setTimeout(() => {
    setCount(currentCount => currentCount + 1)
  }, 1e3)

  return `
    State: ${count}
    Prop: ${propCount}
    Prop Doubled: ${propCountDoubled}
  `
}
