import React, { useState, useEffect } from 'react';
import styles from './Section.module.css';
import setaEsquerda from '../../assets/LeftArrow.png';
import setaDireita from '../../assets/RightArrow.png';
import iconHeart from '../../assets/FillHeart.png';
import iconEye from '../../assets/FillEye.png';

const Section = ({ title, subtitle, dictProduto, adicionais }) => {
    const [time, setTime] = useState(259200);
    const [selectedRadios, setSelectedRadios] = useState({}); // Armazenar seleção por produto

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

    const classeDesconto = (desc) => {
        if (desc.length > 0) {
            return styles.Desc;
        } else {
            return styles.Hide;
        }
    };

    const classeAdicionaisSetas = (add) => {
        if (add !== "setas") {
            return styles.Hide;
        } else {
            return styles.grupoSetas;
        }
    };

    const classeAdicionaisBotoes = (add) => {
        if (add !== "botao") {
            return styles.Hide;
        } else {
            return styles.button;
        }
    };

    const classeAdicionaisTextButton = () => {
        if (adicionais["base"] !== "botao") {
            return styles.Hide;
        } else {
            return styles.textButton;
        }
    };

    const classeAdicionaisCronometro = () => {
        if (adicionais["cronometro"] !== "true") {
            return styles.Hide;
        } else {
            return styles.relogio;
        }
    };

    const classeAdicionaisLine = () => {
        if (adicionais["line"] !== "true") {
            return styles.Hide;
        } else {
            return styles.line;
        }
    };

    const classeAdicionaisCores = () => {
        if (adicionais["cores"] !== "true") {
            return styles.Hide;
        } else {
            return styles.cores;
        }
    };

    return (
        <div className={styles.section}>
            <div className={styles.conteiner}>
                <div className={styles.rediv}></div>
                <p>{subtitle}</p>
            </div>
            <div className={styles.linhaTitulo}>
                <h1 className={styles.titulo}>{title}</h1>

                <div className={classeAdicionaisCronometro()}>
                    <div className={styles.cronometroDays}>
                        <p className={styles.info}>Days</p>
                        <h1 className={styles.timer}>{dias}</h1>
                    </div>
                    <p className={styles.doisPontos}>:</p>
                    <div className={styles.cronometroHours}>
                        <p className={styles.info}>Hours</p>
                        <h1 className={styles.timer}>{horas}</h1>
                    </div>
                    <p className={styles.doisPontos}>:</p>
                    <div className={styles.cronometroMinutes}>
                        <p className={styles.info}>Minutes</p>
                        <h1 className={styles.timer}>{minutos}</h1>
                    </div>
                    <p className={styles.doisPontos}>:</p>
                    <div className={styles.cronometroSeconds}>
                        <p className={styles.info}>Seconds</p>
                        <h1 className={styles.timer}>{segundos}</h1>
                    </div>
                </div>

                <div className={classeAdicionaisSetas(adicionais.titulo)}>
                    <img src={setaEsquerda} alt="seta esquerda" className={styles.imgseta} />
                    <img src={setaDireita} alt="seta direita" className={styles.imgseta} />
                </div>

                <p className={classeAdicionaisBotoes(adicionais.titulo)}>View All</p>
            </div>

            <div className={styles.listProdutos}>
                {dictProduto.map((produto) => (
                    <div className={styles.produtos} key={produto.label}>
                        <div className={styles.infos}>
                            <img src={iconHeart} alt="favoritos" className={styles.icon} />
                            <img src={iconEye} alt="visualizar" className={styles.icon} />
                        </div>
                        <div className={classeDesconto(produto.tag)} style={{ backgroundColor: produto.corTag }}>{produto.tag}</div>
                        <div className={styles.unProd}>
                            <img src={produto.srcProd} alt="produto" className={styles.imgProd} />
                            <div className={styles.addCarrinho}>
                                Add To Cart
                            </div>
                        </div>
                        <p className={styles.tituloProd}>{produto.tituloProd}</p>
                        <div className={styles.preco}>
                            <p className={styles.valorAtual}>{produto.valorAtual}</p>
                            <p className={styles.valorOriginal}>{produto.valorOriginal}</p>
                        </div>
                        <div className={styles.avaliacao}>
                            <img src={produto.qntEstrelas} alt="estrelas" />
                            <p className={styles.qntAvaliacoes}>({produto.qntAvaliacoes})</p>
                        </div>

                        <div className={classeAdicionaisCores()}>
                            <div className={styles.radioContainer}>
                                <label htmlFor={`${produto.label}-1`}>
                                    <input
                                        type="radio"
                                        id={`${produto.label}-1`}
                                        name={produto.label}
                                        checked={selectedRadios[produto.label] === `${produto.label}-1`}
                                        onChange={() => setSelectedRadios({ ...selectedRadios, [produto.label]: `${produto.label}-1` })}
                                        style={{ display: 'none' }}
                                    />
                                    <div className={styles.customRadio}>
                                        <span
                                            style={{
                                                background: produto.cor1,
                                                width: selectedRadios[produto.label] === `${produto.label}-1` ? '12px' : '24px',
                                                height: selectedRadios[produto.label] === `${produto.label}-1` ? '12px' : '24px',
                                                display: 'inline-block',
                                                borderRadius: '50%',
                                                transition: 'width 0.2s ease, height 0.2s ease, border 0.2s ease'
                                            }}
                                        ></span>
                                    </div>
                                </label>
                            </div>

                            <div className={styles.radioContainer}>
                                <label htmlFor={`${produto.label}-2`}>
                                    <input
                                        type="radio"
                                        id={`${produto.label}-2`}
                                        name={produto.label}
                                        checked={selectedRadios[produto.label] === `${produto.label}-2`}
                                        onChange={() => setSelectedRadios({ ...selectedRadios, [produto.label]: `${produto.label}-2` })}
                                        style={{ display: 'none' }}
                                    />
                                    <div className={styles.customRadio}>
                                        <span
                                            style={{
                                                background: produto.cor2,
                                                width: selectedRadios[produto.label] === `${produto.label}-2` ? '12px' : '24px',
                                                height: selectedRadios[produto.label] === `${produto.label}-2` ? '12px' : '24px',
                                                display: 'inline-block',
                                                borderRadius: '50%',
                                                transition: 'width 0.2s ease, height 0.2s ease, border 0.2s ease'
                                            }}
                                        ></span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <p className={classeAdicionaisTextButton()}>View All Products</p>
            <hr className={classeAdicionaisLine()} />
        </div>
    );
};

export default Section;