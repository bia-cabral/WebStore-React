import React, { useState } from 'react';
import styles from "./Categories.module.css"
import setaEsquerda from '../../assets/LeftArrow.png'
import setaDireita from '../../assets/RightArrow.png'

const Categories = ({subtitle, title, dictCategoria}) => {

    const [hoveredCategory, setHoveredCategory] = useState(null);

    const handleMouseEnter = (label) => {
        setHoveredCategory(label);
    };

    const handleMouseLeave = () => {
        setHoveredCategory(null);
    };


    return (
        <div className={styles.section}>
            <div className={styles.conteiner}>
                <div className={styles.rediv}></div>
                <p>{subtitle}</p>
            </div>
            <div className={styles.linhaTitulo}>
                <h1 className={styles.titulo}>{title}</h1>

                <div className={styles.grupoSetas}>
                    <img src={setaEsquerda} alt="seta esquerda" className={styles.imgseta}/>
                    <img src={setaDireita} alt="seta direita" className={styles.imgseta}/>
                </div>
            </div>

            <div className={styles.listCategories}>
                {
                    dictCategoria.map((categoria) => (
                        <div 
                            className={styles.unCategoria} 
                            key={categoria.label}
                            onMouseEnter={() => handleMouseEnter(categoria.label)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img
                                src={hoveredCategory === categoria.label ? categoria.imgCategoriaHover : categoria.imgCategoria}
                                alt={categoria.nomeCategoria}
                                style={{
                                    cursor: 'pointer'
                                }}
                            />
                            <p>{categoria.nomeCategoria}</p>
                        </div>
                    ))
                }
            </div>
            <hr className={styles.line}/>
        </div>
    )
}

export default Categories