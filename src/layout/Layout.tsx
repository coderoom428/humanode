import React from 'react'
import Navbar from '../components/organisms/Navbar/Navbar'

interface Props {
  children: React.ReactElement | React.ReactElement[]
}

function Layout({ children }: Props) {

  return (
    <div className='w-100 h-100 humanode-layout'>
      <Navbar />
      { children }
    </div>
  )
}

export default Layout
