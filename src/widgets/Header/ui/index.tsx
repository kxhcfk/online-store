import styles from './styles.module.scss';
import {Container} from "@/shares/ui/Container";
import {NavigationBar} from "@/entities/NavigationBar";

const Header = () => {
    return (
        <header className={styles.root}>
            <Container>
                <div className={styles.wrapper}>
                    <NavigationBar/>
                </div>
            </Container>
        </header>
    );
};

export {Header};