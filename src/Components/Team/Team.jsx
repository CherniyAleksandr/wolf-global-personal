import Martin from '../../assets/images/Team/MartinDevis.jpg'
import Martina from '../../assets/images/Team/MartinaMuller.jpg'
import Tatjana from '../../assets/images/Team/Tatjana.jpg'
import style from './team.module.css'

export const Team = () => {
    return (
        <div className={style.teamContainer}>
            <h2>Unsere Verstarkung !</h2>
            <div className={style.cardsContainer}>
                <div className={style.teamCard}>
                    <img className={style.teamImg} src={Martina} alt="Martina Müller" />
                    <span></span>
                    <h3>Martina Müller</h3>
                    <p>Personalleiterin</p>
                </div>
                <div className={style.teamCard}>
                    <img className={style.teamImg} src={Martin} alt="Martin Davis" />
                    <span></span>
                    <h3>Martin Davis</h3>
                    <p>Leiter Vertrieb Innen- und Aussendienst</p>
                </div>
                <div className={style.teamCard}>
                    <img className={style.teamImg} src={Tatjana} alt="Tatjana Kudreschova" />
                    <span></span>
                    <h3>Tatjana Kudreschova</h3>
                    <p>Assistentin der Geschäftsleitung</p>
                </div>
            </div>
        </div>
    )
}