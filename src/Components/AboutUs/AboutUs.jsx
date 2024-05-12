import style from "./aboutUs.module.css"

export const AboutUs = () => {
    return (
        <div className={style.aboutUsContainer}>
            <div className={style.aboutTextContainer}>
                <h2 className={style.aboutUsTitle}> Wer sind wir ?</h2>
                <p className={style.aboutUsText}><strong>Wolf Global Solutions</strong> ist ganz dicht dran. Am Mittelstand, an dessen Entscheidern und anpassenden Lösungen.</p>
                <p className={style.aboutUsText}>Unser Team besteht aus erfahrenen Experten und überzeugt mit exzellentem Teamwork. Auch nutzen wir unser Business Netzwerk. Es berät den Mittelstand auf Augenhöhe.</p>
                <p className={style.aboutUsText}>Mit viel Know-how, jeder Menge Fingerspitzengefühl und passenden Beratern.
                </p>
            </div>
        </div>
    )
}