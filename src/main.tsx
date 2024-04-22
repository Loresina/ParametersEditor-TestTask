import React from 'react'
import { createRoot } from 'react-dom/client'
import ParamsEditor from './app/ParamsEditor'
import './index.css'

const container = document.getElementById('root')

const params = [
  {
    id: 1,
    name: 'Назначение'
  },
  {
    id: 2,
    name: 'Длина'
  }
]

const model = {
  paramValues: [
    {
      paramId: 1,
      value: 'повседневное'
    },
    {
      paramId: 2,
      value: 'макси'
    }
  ]
}

if (container !== null) {
  const root = createRoot(container)

  root.render(
    <React.StrictMode>
        <ParamsEditor params={params} model={model} />
    </React.StrictMode>
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file."
  )
}
