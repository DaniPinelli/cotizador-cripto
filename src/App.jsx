import { useState } from 'react'
import styled from '@emotion/styled'
import ImageCripto from './img/imagen-criptos.png'
import Formulario from './components/Formulario'

const Contenedor = styled.div`
max-width: 900px;
margin: 0 auto;
width: 90%;
@media (min-width: 992px) {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;
}
`
const Imagen = styled.img`
max-width: 400px;
width: 80%;
margin: 100px auto 0 auto;
display: block;
@media (max-width: 992px) {
  max-width: 200px;
}
`

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;
  @media (max-width: 992px) {
  margin-top: 40px;
}

  &::after {
    content: '';
    width: 200px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
`

function App() {

  return (
    <Contenedor>
      <Imagen
        src={ImageCripto}
        alt="Imagen Cripto"
      />

      <div>
        <Heading>Cotizador de Criptomonedas</Heading>
        <Formulario />
      </div>


    </Contenedor>
  )
}

export default App
