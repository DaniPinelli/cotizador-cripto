import React from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/monedas'


const InputSubmit = styled.input`
    background-color: #9497ff;
    border: none;
    width: 70%;
    padding: 10px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;

    &:hover {
        background-color: #7a7dfe;
        cursor: pointer;
    }
`


const Formulario = () => {

    const [SelectMonedas] = useSelectMonedas("Eligir Moneda", monedas)

    return (
        <form className="form1" >

            <SelectMonedas />

            <InputSubmit
                type="submit"
                value="Cotizar"
            />
        </form>
    )
}

export default Formulario