import { Header } from "../Header/Header"
import style from "./mainBanner.module.css"

export const MainBanner = () => {

    return (
        <div className={style.bannerContainer}>
                <Header />
                    <div className={style.informationContainer}>
                        <h2 className={style.mainTitle}>Feuer & Sicherheit</h2>
                        <p className={style.mainText}>DIE EXPERTINNEN im BUSINESS
                            Wir leben Mittelstand
                            Passende Lösungen. Passende Berater</p>
                        <button className={style.mainButton}>Mehr erfahren</button>
                </div>
        </div>
    )
}