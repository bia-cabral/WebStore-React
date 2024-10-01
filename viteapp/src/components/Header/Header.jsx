import styles from "./Header.module.css"
import Promotion from "../Promotion/Promotion"
import lupa from '../../assets/lupa.png'
import coracao from '../../assets/whishlist.png'
import carrinho from '../../assets/carrinho.png'

export default function Header () {
    return <header>
        <Promotion />
        <div className={styles.cabecalho}>
            <h1 className={styles.siteName}>Exclusive</h1>
            <nav>
                <ul className={styles.lista}>
                    <li className={styles.pgAtual}>Home</li>
                    <li>Contact</li>
                    <li>About</li>
                    <li>Sign up</li>
                </ul>
            </nav>

            <div className={styles.divona}>
                <div className={styles.conteiner}>
                    <input type="text" name="" id="" placeholder="What are you looking for?" className={styles.busca}/>
                    <img src={lupa} alt="" className={styles.imgLupa}/>
                </div>
                <img src={coracao} alt="" />
                <img src={carrinho} alt="" />
            </div>
        </div>
    </header>
}