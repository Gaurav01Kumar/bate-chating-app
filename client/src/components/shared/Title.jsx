import React from 'react'
import {Helmet} from "react-helmet-async"
const Title = ({title="Chat",description="this is a chat app call Bate"}) => {
  return (
    <>
    <Helmet>
        <title>{title}</title>
        <meta name='descrption' content={description} />
    </Helmet>
    </>
  )
}

export default Title