import "./styles/index.scss";

import styles from './styles.module.scss'
import {Header} from "@/widgets/Header";
import {RouterProvider} from "@/app/providers/RouterProvider";
import {useTheme} from "@/shares/theme";
import {classNames} from "@/shares/lib/classNames";
import {useTranslation} from "react-i18next";

const App = () => {
    const {theme} = useTheme();
    const {t} = useTranslation();
    
    return (
        <div className={classNames("app", theme)}>
            <Header/>
            
            {t("test")}
            
            <main>
                <RouterProvider/>
            </main>
        </div>
    );
};

export {App};