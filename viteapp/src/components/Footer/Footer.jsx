import React from 'react';
import styles from "./Footer.module.css"
import arrow from '../../assets/icon-send.png'
import qrCode from '../../assets/QrCode.png'
import GooglePlay from '../../assets/GooglePlay.png'
import AppStore from '../../assets/AppStore.png'
import Facebook from '../../assets/Facebook.png'
import Twitter from '../../assets/Twitter.png'
import Instagram from '../../assets/Instagram.png'
import Linkedin from '../../assets/Linkedin.png'
import UpArrow from '../../assets/UpArrow.png'

const Footer = ({}) => {
    return (
        <div className={styles.Footer}>
            <img src={UpArrow} alt="subir" className={styles.subir}/>
            <div className={styles.list}>
                <div>
                    <p className={styles.titulo}>Exclusive</p>
                    <p className={styles.subtitulo}>Subscribe</p>
                    <p className={styles.descricao}>Get 10% off your first order</p>
                    <div className={styles.pesquisa}>
                        <input type="email" name="email" id="email" placeholder="Enter your email" className={styles.email}/>
                        <img src={arrow} alt="arrow" className={styles.imgArrow}/>
                    </div>
                </div>
            
                <div className={styles.support}>
                    <p className={styles.subtitulo}>Support</p>
                    <p className={styles.descricao}>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                    <p className={styles.descricao}>exclusive@gmail.com</p>
                    <p className={styles.descricao}>+88015-88888-9999</p>
                </div>

                <div>
                    <p className={styles.subtitulo}>Account</p>
                    <p className={styles.descricao}>My Account</p>
                    <p className={styles.descricao}>Login / Register</p>
                    <p className={styles.descricao}>Cart</p>
                    <p className={styles.descricao}>Wishlist</p>
                    <p className={styles.descricao}>Shop</p>
                </div>

                <div>
                    <p className={styles.subtitulo}>Quick Link</p>
                    <p className={styles.descricao}>Privacy Policy</p>
                    <p className={styles.descricao}>Terms Of Use</p>
                    <p className={styles.descricao}>FAQ</p>
                    <p className={styles.descricao}>Contact</p>
                </div>

                <div>
                    <p className={styles.subtitulo}>Download App</p>
                    <p className={styles.obs}>Save $3 with App New User Only</p>
                    <div className={styles.download}>
                        <img src={qrCode} alt="qr code" className={styles.qrCode}/>
                        <img src={GooglePlay} alt="Google Play" className={styles.google}/>
                        <img src={AppStore} alt="App Store" className={styles.apple}/>
                    </div>
                    <div className={styles.icons}>
                        <img src={Facebook} alt="Facebook" />
                        <img src={Twitter} alt="Twitter" />
                        <img src={Instagram} alt="Instagram" />
                        <img src={Linkedin} alt="Linkedin" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer