import style from './impressum.module.css'

export const Impressum = () => {
    return (
        <div className={style.impressumWrapper}>
            <h4>Impressum</h4>
            <h5>Angaben gemäß § 5 TMG</h5>
            <div className={style.infoBlock}>
                <ul>
                    <li>Wolf Global Solutions GbR und Wolf Glonal Personal GbR</li>
                    <li>Adresse: Riesaer Str. 74, 04328, Leipzig</li>
                    <li>Regestriert in Leipzig</li>
                    <li>Gewerbeamt Leipzig</li>
                    <li>Geschäftführer der Wolf Global Solution GbR und der Wolf Global Personal GbR ist : Steffen Raasch</li>
                    <li>Vertreten durch: Tanja Kudroscheva</li>
                </ul>
                <div className={style.impressumKontakt}>
                    <h4>Kontakt</h4>
                    <ul>
                        <li>Telefon: +49 176 55243390</li>
                        <li>Mobile: +49 176 457 649 61</li>
                        <li>Telefax: +49 34205 – 6 60 31</li>
                        <li>E-Mail: kundenanfrage@wgsgbr.de</li>
                    </ul>
                    <h4>Umsatzsteuer-ID</h4>
                    <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
                        Steuernummer:
                        EU-Streitschlichtung
                        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr.
                        Unsere E-Mail-Adresse finden Sie oben im Impressum.
                        Verbraucher¬streit¬beilegung/Universal¬schlichtungs¬stelle
                        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                    </p>
                </div>
            </div>
        </div>
    )
}