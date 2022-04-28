import React from 'react'

export default function Welcome(props) {
    console.log('welcome functinal ', props)
    let {name, city, country}  = props.user;
  return (
    <div>Welcome {name} : {city} :{country}</div>
  )
}
