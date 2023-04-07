// React kütüphanesi ve dobiox buton bileşeni dahil etme
import React from 'react'
import { Button } from 'dobiox'
import 'dobiox/dist/index.css'

const App = () => {
  // Buton bileşenleri oluşturma ve type seçenekleri
  return (
    <>
      <h1>Buttons</h1>
      <div>
        <Button type='primary' text='Click Me' /> <br />
        <Button type='secondary' text='Click Me' /> <br />
        <Button type='dashed' text='Click Me' /> <br />
        <Button type='link' text='Click Me' /> <br />
      </div>
    </>
  )
}

export default App
