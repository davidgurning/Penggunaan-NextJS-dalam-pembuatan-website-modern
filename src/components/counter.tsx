'use client'

import { useState } from "react"
import { Button } from "./ui/button"

function Counter () {
  const [count, setCount] = useState(0)

  function decrement () {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  function increment () {
    setCount(count + 1)
  }

  return (
    <div className="flex row items-center">
      <Button onClick={decrement}>-</Button>
      <span className="text-5xl">{count}</span>
      <Button onClick={increment}>+</Button>
    </div>
  )
}

export default Counter