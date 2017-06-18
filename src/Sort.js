import React from 'react'
import 'milligram'

export default ({sort, sort_order}) =>  {
  const print_order = () => {
    if (sort_order === null){
      return ' 🤷‍♀️ '
    }
    else if (sort_order === true){
      return ' ☝️ '
    }
    else {
      return ' 👇 '
    }
  }
  return(
    <button 
      onClick={ e => {
          e.preventDefault()
          sort()
        }
      }
      className="button button-outline"
    > 
      Sort A-Z {print_order()}
    </button>
  )
}