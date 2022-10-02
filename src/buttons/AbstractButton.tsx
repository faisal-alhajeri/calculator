import React from 'react'

export type CalculatorButton = React.ComponentProps<'button'> & {

}   

export default function AbstractButton({children, className,...restProps}: CalculatorButton) {
  return (
    <button className={`calc-button ${className ?? ''}`} {...restProps} >{children}</button>
  )
}
