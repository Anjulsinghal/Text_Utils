import React from 'react'

function Alert(props) {
    const capitalize = (word)=> {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <div className="" style={{height: '50px'}}>
    {props.alert &&<div class={`alert alert-warning alert-{props.alert.ty} fade show`} role="alert">
        <strong>{capitalize(props.alert.ty)}</strong>: {props.alert.msg}
    </div>}
    </div>
  )
}

export default Alert
