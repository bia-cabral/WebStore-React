import React, { useState, useEffect } from 'react';
import styles from './Ads.module.css'
import PS5 from '../../assets/img1.png'
import Womens from '../../assets/img2.png'
import Speakers from '../../assets/img3.png'
import Perfume from '../../assets/img4.png'

const Ads = ({title, subtitle}) => {
    return (
        <div className={styles.section}>
            <div className={styles.conteiner}>
                <div className={styles.rediv}></div>
                <p>{subtitle}</p>
            </div>
            <div className={styles.linhaTitulo}>
                <h1 className={styles.titulo}>{title}</h1>
            </div>

            <div className={styles.imagens}>
                <img src={PS5} alt="PS5" className={styles.img1}/>
                <img src={Womens} alt="Women's" className={styles.img2}/>
                <img src={Speakers} alt="Speakers" className={styles.img3}/>
                <img src={Perfume} alt="`Perfumes" className={styles.img4}/>
            </div>
        </div>
    )
}

export default Ads