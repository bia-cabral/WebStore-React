import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import banner from './assets/banner.png'
import styles from './index.module.css'
import Header from './components/Header/Header.jsx'
import Section from './components/Section/Section.jsx'
import Categories from './components/Categories/Categories.jsx'
import Announcement from './components/Announcement/Announcement.jsx'
import Ads from './components/Ads/Ads.jsx'
import Prod from './assets/controle.png'
import Teclado from './assets/Teclado.png'
import Televisao from './assets/Televisao.png'
import Cadeira from './assets/cadeira.png'
import TresEstrelas from './assets/ThreeStar.png'
import QuatroEstrelas from './assets/FourStar.png'
import FourHalfStar from './assets/FourHalfStar.png'
import CincoEstrelas from './assets/FiveStar.png'
import Cellphone from './assets/Category-CellPhone.png'
import Computer from './assets/Category-Computer.png'
import SmartWatch from './assets/Category-SmartWatch.png'
import Camera from './assets/Category-Camera.png'
import Headphone from './assets/Category-Headphone.png'
import Games from './assets/Category-Gamepad.png'
import Coat from './assets/coat.png'
import Bag from './assets/bag.png'
import CPU from './assets/cpu.png'
import Bookshelf from './assets/book-shelf.png'
import DogFood from './assets/dog-food.png'
import Canon from './assets/camera.png'
import Laptop from './assets/laptop.png'
import Curology from './assets/curology.png'
import EletricCar from './assets/EletricCar.png'
import Soccer from './assets/Soccer.png'
import GamePad from './assets/gamepad.png'
import Jacket from './assets/jacket.png'

const textoSection = "Today"
const tituloSection = "Flash Sales"
const textoSelling = "This Month"
const tituloSelling = "Best Selling Products"
const textoExplore = "Our Products"
const tituloExplore = "Explore Our Products"
const textoAds = "Featured"
const tituloAds = "New Arrival"
const botoesAdicionaisSection = {
  "titulo": "setas",
  "base": "botao",
  "cronometro": "true",
  "line": "true"
}
const botoesAdicionaisSelling = {
  "titulo": "botao",
  "base": "none",
  "cronometro": "false",
  "line": "false"
}
const botoesAdicionaisExplore = {
  "titulo": "setas",
  "base": "botao",
  "cronometro": "false",
  "line": "false"
}
const ProdutosSection = [
  {
    "srcProd": Prod,
    "tag": "-40%",
    "corTag": "#DB4444",
    "tituloProd": "HAVIT HV-G92 Gamepad",
    "valorAtual": "$120",
    "valorOriginal": "$160",
    "qntEstrelas": CincoEstrelas,
    "qntAvaliacoes": "88",
  },
  {
    "srcProd": Teclado,
    "tag": "-35%",
    "corTag": "#DB4444",
    "tituloProd": "AK-900 Wired Keyboard",
    "valorAtual": "$960",
    "valorOriginal": "$1160",
    "qntEstrelas": QuatroEstrelas,
    "qntAvaliacoes": "75"
  },
  {
    "srcProd": Televisao,
    "tag": "-30%",
    "corTag": "#DB4444",
    "tituloProd": "IPS LCD Gaming Monitor",
    "valorAtual": "$370",
    "valorOriginal": "$400",
    "qntEstrelas": CincoEstrelas,
    "qntAvaliacoes": "99"
  },
  {
    "srcProd": Cadeira,
    "tag": "-25%",
    "corTag": "#DB4444",
    "tituloProd": "S-Series Comfort Chair ",
    "valorAtual": "$375",
    "valorOriginal": "$400",
    "qntEstrelas": FourHalfStar,
    "qntAvaliacoes": "99"
  }
]
const Categorias = [
  {
    "imgCategoria": Cellphone,
    "nomeCategoria": "Phones",
    "label": "Cellphone"
  },
  {
    "imgCategoria": Computer,
    "nomeCategoria": "Computers",
    "label": "Computer"
  },
  {
    "imgCategoria": SmartWatch,
    "nomeCategoria": "SmartWatch",
    "label": "SmartWatch"
  },
  {
    "imgCategoria": Camera,
    "nomeCategoria": "Camera",
    "label": "Camera"
  },
  {
    "imgCategoria": Headphone,
    "nomeCategoria": "HeadPhones",
    "label": "Headphone"
  },
  {
    "imgCategoria": Games,
    "nomeCategoria": "Gaming",
    "label": "Games"
  }
]
const ProdutosSelling = [
  {
    "srcProd": Coat,
    "tag": "",
    "corTag": "",
    "tituloProd": "The north coat",
    "valorAtual": "$260",
    "valorOriginal": "$360",
    "qntEstrelas": CincoEstrelas,
    "qntAvaliacoes": "65",
  },
  {
    "srcProd": Bag,
    "tag": "",
    "corTag": "",
    "tituloProd": "Gucci duffle bag",
    "valorAtual": "$960",
    "valorOriginal": "$1160",
    "qntEstrelas": FourHalfStar,
    "qntAvaliacoes": "65",
  },
  {
    "srcProd": CPU,
    "tag": "",
    "corTag": "",
    "tituloProd": "RGB liquid CPU Cooler",
    "valorAtual": "$160",
    "valorOriginal": "$170",
    "qntEstrelas": FourHalfStar,
    "qntAvaliacoes": "65",
  },
  {
    "srcProd": Bookshelf,
    "tag": "",
    "corTag": "",
    "tituloProd": "Small BookShelf",
    "valorAtual": "$360",
    "valorOriginal": "",
    "qntEstrelas": CincoEstrelas,
    "qntAvaliacoes": "65",
  }
]
const ProdutosExlpore = [
  {
    "srcProd": DogFood,
    "tag": "",
    "corTag": "",
    "tituloProd": "Breed Dry Dog Food",
    "valorAtual": "$100",
    "valorOriginal": "",
    "qntEstrelas": TresEstrelas,
    "qntAvaliacoes": "35",
  },
  {
    "srcProd": Canon,
    "tag": "",
    "corTag": "",
    "tituloProd": "CANON EOS DSLR Camera",
    "valorAtual": "$360",
    "valorOriginal": "",
    "qntEstrelas": QuatroEstrelas,
    "qntAvaliacoes": "95",
  },
  {
    "srcProd": Laptop,
    "tag": "",
    "corTag": "",
    "tituloProd": "ASUS FHD Gaming Laptop",
    "valorAtual": "$700",
    "valorOriginal": "",
    "qntEstrelas": CincoEstrelas,
    "qntAvaliacoes": "325",
  },
  {
    "srcProd": Curology,
    "tag": "",
    "corTag": "",
    "tituloProd": "Curology Product Set",
    "valorAtual": "$500",
    "valorOriginal": "",
    "qntEstrelas": QuatroEstrelas,
    "qntAvaliacoes": "145",
  },
  {
    "srcProd": EletricCar,
    "tag": "NEW",
    "corTag": "#00FF66",
    "tituloProd": "Kids Electric Car",
    "valorAtual": "$960",
    "valorOriginal": "",
    "qntEstrelas": CincoEstrelas,
    "qntAvaliacoes": "65",
  },
  {
    "srcProd": Soccer,
    "tag": "",
    "corTag": "",
    "tituloProd": "Jr. Zoom Soccer Cleats",
    "valorAtual": "$1160",
    "valorOriginal": "",
    "qntEstrelas": CincoEstrelas,
    "qntAvaliacoes": "35",
  },
  {
    "srcProd": GamePad,
    "tag": "NEW",
    "corTag": "#00FF66",
    "tituloProd": "GP11 Shooter USB Gamepad",
    "valorAtual": "$660",
    "valorOriginal": "",
    "qntEstrelas": FourHalfStar,
    "qntAvaliacoes": "65",
  },
  {
    "srcProd": Jacket,
    "tag": "",
    "corTag": "",
    "tituloProd": "Quilted Satin Jacket",
    "valorAtual": "$660",
    "valorOriginal": "",
    "qntEstrelas": FourHalfStar,
    "qntAvaliacoes": "55",
  }
]


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <img className={styles.banner} src={banner}/>
    <Section subtitle={textoSection} title={tituloSection} dictProduto={ProdutosSection} adicionais={botoesAdicionaisSection}/>
    <Categories subtitle={"Categories"} title={"Browse By Category"} dictCategoria={Categorias}/>
    <Section subtitle={textoSelling} title={tituloSelling} dictProduto={ProdutosSelling} adicionais={botoesAdicionaisSelling}/>
    <Announcement/>
    <Section subtitle={textoExplore} title={tituloExplore} dictProduto={ProdutosExlpore} adicionais={botoesAdicionaisExplore}/>
    <Ads subtitle={textoAds} title={tituloAds}/>
  </StrictMode>
)
