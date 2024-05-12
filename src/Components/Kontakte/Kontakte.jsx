import style from './kontakte.module.css'
import {Map} from '../Map/Map'
export const Kontakte = () => {
    return (
        <div className={style.kontakteContainer}>
            <h3 className={style.kontakteTitle}>Kontakte</h3>
            <div className={style.kontakteCardsWrapper}>
                <div className={style.kontakteCard}>
                    <ul className={style.cardItems}>
                        <li style={style.cardItem}>Telefon: 123-456-789</li>
                        <li style={style.cardItem}>WhatsApp: 123-456-789</li>
                        <li style={style.cardItem}>E-Mail: info@wolfglobalpersonal.com</li>
                        <li style={style.cardItem}>Adresse: Riesaer Str. 74, 04328 Leipzig, Deutschland </li>
                        <li style={style.cardItem}>Arbeitszeiten: Montag - Freitag: 9:00 - 17:00 Uhr</li>
                    </ul>
                </div>
                <div className={style.kontakteCardMap}> 
                    <Map/>
                </div>
            </div>
        </div>
    )
}