import logo from "../../assets/images/Header/WolfGlobalLogo1.jpg";
import style from "./header.module.css";

export const Header = () => {
    return (
        <div className={style.headerContainer}>
            <header className={style.header}>
                <div className={style.logoTextWrapper}>
                    <img className={style.logo} src={logo} alt="logo" />
                    <span className={style.logoText}><strong>Wolf Global Personal</strong></span>
                </div>
                <div className={style.listContainer}>
                    <ul className={style.listItems}>
                        <li className={style.listItem}>Überblick</li>
                        <li className={style.listItem}>Dienstleistungen</li>
                        <li className={style.listItem}>Kontakt</li>
                    </ul>
                    <button className={style.headerButton}>Jetzt kontaktieren</button>
                </div>
            </header>
        </div>
    )
}