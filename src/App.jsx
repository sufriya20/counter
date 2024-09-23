import { useState } from 'react'
import './App.css'
import Component from './Counter'

function App() {

  return (
    <>
      <div className='d-flex justify-content-center bg-dark align-items-center' style={{height:'100vh'}}>
      <Component/>
      </div>
    </>
  )
}

export default App

