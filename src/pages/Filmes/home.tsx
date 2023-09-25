import styles from './Filmes.module.scss';
import logo from '../../assets/logo.png';

export default function Filmes(){

    return(
        <main>
            <nav className={styles.screen}>
            <img src={logo} alt="logo" />
            </nav>
        </main>
    );
}