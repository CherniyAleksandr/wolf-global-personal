import { AboutUs } from "../AboutUs/AboutUs"
import { Footer } from "../Footer/Footer"
import { Fragen } from "../HauftigeFragen/Fragen"
import { Kontakte } from "../Kontakte/Kontakte"
import { MainBanner } from "../Main/MainBanner"
import { Team } from "../Team/Team"
import { Leistungen } from "../UnsereLeistungen/Leistungen"


export const MainPage = () => {
    return (
        <>
            <MainBanner/>
            <AboutUs />
            <Leistungen />
            <Fragen />
            <Team />
            <Kontakte />
            <Footer/>
        </>
    )
}