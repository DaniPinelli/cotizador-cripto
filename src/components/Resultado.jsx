import styled from '@emotion/styled'

const Contenedor = styled.div`
    color: #fff;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 3rem;
    margin-top:2em ;
    `

const Texto = styled.p`
    font-size: 18px;
    span {
        font-weight: 700;
    }
    `

const Precio = styled.p`
    font-size: 24px;
    span {
        font-weight: 700;
    }
    `
const Imagen = styled.img`
    display: block;
    width: 80px;
    `

const Resultado = ({ resultado }) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado
    console.log(resultado)
    return (
        <Contenedor>
            <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen cripto" />
            <div>
                <Precio>Precio: <span> {PRICE} </span></Precio>
                <Texto>Precio más bajo hoy: <span> {LOWDAY} </span></Texto>
                <Texto>Precio más alto hoy: <span> {HIGHDAY} </span></Texto>
                <Texto>Variación últimas 24 horas: <span> {CHANGEPCT24HOUR} </span></Texto>
                <Texto>Última actualización: <span> {LASTUPDATE} </span></Texto>
            </div>

        </Contenedor>
    )
}

export default Resultado