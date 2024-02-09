import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ProductCard = ({id,title,image,content,category,likes}) => {
   const isAuth=useSelector(store=>store.authReducer.isAuth) 
  return (
    <DIV>
    <Link to={`/view/${id}`}>
        <img src={image} alt={title} />
    </Link>
    <h4>{title}</h4>
    <p>content: {content}</p>
    <p>Category: {category}</p>
    <p><span>👍 </span>{likes}</p>
    {
        isAuth && (
            <div id='bton'>
                <button>
                    <Link to={`/edit/${id}`} >Edit</Link>
                </button>
                <button>
                    <Link to={`/edit/${id}`} >delete</Link>
                </button>
            </div>
        
        )
    }
    </DIV>
  )
}

const DIV=styled.div`
    border:1px solid black;
    padding:10px;
    background-color:lightgoldenrodyellow;
    border-radius:10%;

    img{
       width:100%;
       border-radius:15%;
    }
    #bton{
        display:flex;
        justify-content:center;
        gap:10px;
    }
`

