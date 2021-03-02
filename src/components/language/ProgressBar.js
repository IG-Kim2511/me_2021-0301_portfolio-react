import React from 'react'
import { Progress } from 'semantic-ui-react'

const ProgressBar = () => (
  <div>
    <div>
      english : fluent enough
      <Progress percent={65} color='green' />
    </div>
    <div>
      korean : native
      <Progress percent={100} color='green' /> 
    </div>
  </div>
)

export default ProgressBar