import React, { useState, useEffect } from 'react';
import styles from './Announcement.module.css'
import anuncio from '../../assets/anuncio-categorias.png'

const Announcement = () => {
    const [time, setTime] = useState(518400);

    useEffect(() => {
    if (time > 0) {
        const interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
        }, 1000);

        return () => clearInterval(interval);
    }
    }, [time]);

    const montarCronometro = (segundos) => {
        const dias = Math.floor(segundos / (3600 * 24));
        const horas = Math.floor((segundos % (3600 * 24)) / 3600);
        const minutos = Math.floor((segundos % 3600) / 60);
        const segundosRestantes = segundos % 60;

        return { dias, horas, minutos, segundos: segundosRestantes };
    };

    const { dias, horas, minutos, segundos } = montarCronometro(time);

    return (
        <div className={styles.anuncio}>
            <img src={anuncio} alt="anúncio" className={styles.img}/>

            <div className={styles.timer}>
                <div className={styles.cronometroDays}>
                    <p className={styles.dias}>{dias}</p>
                    <p className={styles.info}>Days</p>
                </div>

                <div className={styles.cronometroHours}>
                    <p className={styles.horas}>{horas}</p>
                    <p className={styles.info}>Hours</p>
                </div>

                <div className={styles.cronometroMinutes}>
                    <p className={styles.minutos}>{minutos}</p>
                    <p className={styles.info}>Minutes</p>
                </div>

                <div className={styles.cronometroSeconds}>
                    <p className={styles.segundos}>{segundos}</p>
                    <p className={styles.info}>Seconds</p>
                </div>
            </div>

            <p className={styles.textButton}>Buy Now!</p>
        </div>
    )
}

export default Announcement