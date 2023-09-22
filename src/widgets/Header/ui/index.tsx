import styles from './styles.module.scss';
import {Container} from "@/shares/ui/Container";
import {NavigationBar} from "@/entities/NavigationBar";
import {LangSwitcher} from "@/features/LangSwitcher";
import {ThemeSwitcher} from "@/features/ThemeSwitcher";

const Header = () => {
    return (
        <header className={styles.root}>
            <Container>
                <div className={styles.wrapper}>
                    <NavigationBar/>
                    <ThemeSwitcher/>
                    <LangSwitcher/>
                </div>
            </Container>
        </header>
    );
};

export {Header};