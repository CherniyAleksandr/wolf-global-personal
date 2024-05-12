import style from './footer.module.css'

export const Footer = () => {
    return (
        <div className={style.footerWrapper}>
            <p>2024 <strong> © Wolf Global Personal.</strong> Alle Rechte vorbehalten.</p>
            <a href="#">Impressum</a>
        </div>
    )
}