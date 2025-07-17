import React from 'react';
import ItemColor from './ItemColor';

const ListaColores = ({colores}) => {
    return (
        <div className='row mt-4'>
            {
                colores.map((item, indice)=>(
                    <div className="col-md-4 mb-4">
                        <ItemColor key={indice} nombreColor={item}></ItemColor>
                    </div>
                ))}
        </div>
    );
};

export default ListaColores;