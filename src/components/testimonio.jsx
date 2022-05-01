export const Testimonio = ({nombre,parrafo}) => {
    const estilos = {
        height: '225px',
        width: '227px',
        backgroundColor: 'rgb(15, 20, 49)',
        color: 'rgb(196, 196, 196)',
        margin: '10px',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        borderRadius: '10px',
    }
    const p_estilos ={
        marginBlockStart: 0,
        marginBlockEnd: 0,
        marginLeft: '10px',
        marginRight: '10px',
        overflow: 'hidden',
    }
    const h4_esltlo = {
        textTransform: 'capitalize',
        marginLeft: '15px',
        marginRight: '15px',
    }
    return <div style={estilos}>
        <h4 style={h4_esltlo}>{nombre}</h4>
        <p style={p_estilos}>{parrafo}</p>
    </div>
} 