import { ThemeProvider } from 'react-bootstrap';
import styles from './brand-intro.module.scss';

function BrandIntro(){
    return(
        <div className={styles.brand_intro}>
            This is the brand intro component.
        </div>
    )
}

export default BrandIntro;