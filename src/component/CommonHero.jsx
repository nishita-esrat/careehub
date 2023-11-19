import React, { Children } from 'react'
import Header from "./Header";

export const CommonHero = ({children}) => {
  return (
    <div className='bg-slate-100'>
        <Header/>
        <h3 className='text-center py-10 text-2xl lg:text-3xl font-bold'>{children}</h3>
    </div>
  )
}
