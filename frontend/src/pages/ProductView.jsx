import React from 'react'
import { useParams } from 'react-router-dom'

export const ProductView = () => {

    const {id} = useParams();

    return (
    <div>ProductView</div>
  )
}
