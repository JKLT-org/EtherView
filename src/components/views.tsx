import React from 'react'

type Props = {
    selectedWallet:string;
}

const views = (props: Props) => {
  return (
    <div>views {props.selectedWallet}</div>
  )
}

export default views