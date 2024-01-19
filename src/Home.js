import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
    const amount = useSelector(state => state.amount)
  return (
    <div>
      <button disabled={true} className="btn btn-primary">Your Balance: { amount } </button>
    </div>
  )
}

export default Home
