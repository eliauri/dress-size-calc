import React from 'react'

export const InputComponent = (props) => {
    const {name, label, value, onChange, type = 'number'} = props;
  return (
    <div>
         <label htmlFor={name}>
          {label}
            <input type={type}
              id='chest'
              value={value}
              placeholder = "0"
              onChange={(e) => {
                onChange(e.target);
              }}
            />
          </label>
    </div>
  )
}
