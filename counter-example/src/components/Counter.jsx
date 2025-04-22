import React from 'react'
import useCountStore from '../stores/useCountStore'

function Counter() {
  const count = useCountStore(state => state.count);

  return (
    <h1>{count}</h1>
  )
}

export default Counter
