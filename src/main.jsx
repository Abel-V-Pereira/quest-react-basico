import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'

import ColorfulUppercaseParagraph from './App.jsx'
import Button from './Button.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ColorfulUppercaseParagraph color={'red'} textTransform={'uppercase'}>
      Texto colorido em letras maiúsculas
      </ColorfulUppercaseParagraph>
      <Button label={'Clique Aqui'} />
  </StrictMode>,
)
