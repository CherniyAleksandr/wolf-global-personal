import style from './fragen.module.css'

export const Fragen = () => {
    return (
        <div className={style.fragenContainer}>
            <div className={style.fragenInfoContainer}>
                <h2 className={style.fragenInfoTitle}>
                    Häufig gestellte Fragen
                </h2>
                <div className={style.fragenInfoItem}>
                    <h3>Wie kann ich mich schützen?</h3>
                    <p>Unsere Experten bieten individuelle Beratung und Schulungen, um Ihre
                        Sicherheit zu gewährleisten.</p>
                </div>
                <div className={style.fragenInfoItem}>
                    <h3>Was tun im Notfall?</h3>
                    <p>Rufen Sie sofort die Feuerwehr an und folgen Sie den Anweisungen
                        unserer geschulten Mitarbeiter.</p>
                </div>
                <div className={style.fragenInfoItem}>
                    <h3>Welche Ausrüstung ist wichtig?</h3>
                    <p>Wir empfehlen hochwertige Feuerlöscher und Rauchmelder für den
                        bestmöglichen Schutz.</p>
                </div>
                <div className={style.fragenInfoItem}>
                    <h3>Kann ich bei Ihnen arbeiten?</h3>
                    <p>Schicken Sie uns Ihre Bewerbung und werden Sie Teil unseres
                        engagierten Teams.</p>
                </div>
                <div className={style.fragenInfoItem}>
                    <h3>Wie melde ich mich zu einem Training
                        an?</h3>
                    <p>Kontaktieren Sie uns telefonisch oder über unser Kontaktformular, um
                        Ihren Platz zu sichern</p>
                </div>
            </div>
        </div>
    )
}