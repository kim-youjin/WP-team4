import React from 'react'
import { Input } from 'semantic-ui-react'

const InputExampleIconProps = () => (
  <Input style={{width: 400, height: 45, marginLeft:100, marginTop:30}}
    icon={{ name: 'search', circular: true, link: true}}
    placeholder='어떤 클래스를 찾으시나요?'
  />
)

export default InputExampleIconProps
