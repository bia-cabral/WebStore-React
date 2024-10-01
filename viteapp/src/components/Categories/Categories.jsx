import React, { useState } from 'react';
import styles from "./Categories.module.css"
import setaEsquerda from '../../assets/LeftArrow.png'
import setaDireita from '../../assets/RightArrow.png'
import CellphoneWhite from '../../assets/Category-CellPhone-White.png'
import ComputerWhite from '../../assets/Category-Computer-White.png'
import SmartWatchWhite from '../../assets/Category-SmartWatch-White.png'
import CameraWhite from '../../assets/Category-Camera-White.png'
import HeadphoneWhite from '../../assets/Category-Headphone-White.png'
import GamesWhite from '../../assets/Category-Gamepad-White.png'
const Categories = ({subtitle, title, dictCategoria}) => {
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
                        <div className={styles.unCategoria}>
                            <img
                                src={categoria.imgCategoria}
                                alt={categoria.nomeCategoria}
                                style={{ cursor: 'pointer' }}
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