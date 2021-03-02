import React from 'react'
import { Progress } from 'semantic-ui-react'

const ProgressBar = () => (
  <div>
    <div>
    <h4>english : fluent enough</h4>
      
      <Progress percent={65} color='green' />
    </div>
    <div>
     <h4>korean : native</h4>
      <Progress percent={100} color='green' /> 
    </div>
  </div>
)

export default ProgressBar