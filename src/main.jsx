import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'

import ColorfulUppercaseParagraph from './components/paragraph/ColorfulUppercaseParagraph.jsx'
import Button from './components/button/Button.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ColorfulUppercaseParagraph color={'red'} textTransform={'uppercase'}>
      Texto colorido em letras maiúsculas
      </ColorfulUppercaseParagraph>
      <Button label={'Clique Aqui'} />
  </StrictMode>,
)
