import React from 'react'
import Home from '../component/Home'
import Feature from '../component/Feature'
import Opinion from '../component/Opinion'
import MoreInformation from '../component/MoreInformation'

const HomePage = () => {
  return (
    <div>
      <Home />
      <Feature />
      <Opinion />
      <MoreInformation />
    </div>
  )
}

HomePage.layout = 'L2'
export default HomePage