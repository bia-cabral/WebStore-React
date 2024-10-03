import React from 'react';
import styles from "./Details.module.css"

const Details = ({dictInfos}) => {
    return (
        <div className={styles.detalhes}>
            {
                dictInfos.map((info) => (
                    <div className={styles.info}>
                        <img src={info.img} alt="informação" className={styles.img}/>
                        <p className={styles.titulo}>{info.titulo}</p>
                        <p className={styles.subtitulo}>{info.subtitulo}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Details