import style from './leistungen.module.css'

export const Leistungen = () => {
    return (
        <div className={style.leistungenContainer}>
            <div className={style.titleContainer}>
                <h2 className={style.leistungenTitle}>Unsere Leistungen</h2>
                <p className={style.leistungenText}>Von Feuerbekämpfung bis zu Sicherheitsschulungen - wir sind Ihre Experten</p>
            </div>
            <div className={style.leistungenItems}>
                <div className={style.leistungenItem}>
                    <h3>Feuerwehr</h3>
                    <p>Professionelle Feuerbekämpfung und Prävention Ihre Sicherheit</p>
                </div>
                <div className={style.leistungenItem}>
                    <h3>Schulungen</h3>
                    <p>Interaktive Schulungen den Ernstfall undpraxisnahe Sicherheitstipps</p>
                </div>
                <div className={style.leistungenItem}>
                    <h3>Territorium</h3>
                    <p>Umfassende Inspektionen und Rundgange fur maximale Sicherheit auf Ihrem Gelende</p>
                </div>
                <div className={style.leistungenItem}>
                    <h3>Notfall</h3>
                    <p>Schnelle Reaktionen und Notfallmassnahmen fur Ihre Sicherheit in jeder Situation</p>
                </div>
            </div>
        </div>
    )
}