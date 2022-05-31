import React from 'react'
import Home from '../../component/Home'
import Feature from '../../component/Feature'
import Opinion from '../../component/Opinion'
import MoreInformation from '../../component/MoreInformation'

const Welcome = () => {
  return (
    <div>
      <Home />
      <Feature />
      <Opinion />
      <MoreInformation />
    </div>
  )
}

Welcome.layout = 'L1'
export default Welcome