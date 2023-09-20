import "./styles/index.scss";

import styles from './styles.module.scss'
import {Header} from "@/widgets/Header";
import {RouterProvider} from "@/app/providers/RouterProvider";
import {useTheme} from "@/shares/theme";
import {classNames} from "@/shares/lib/classNames";

const App = () => {
    const {theme} = useTheme();
    
    return (
        <div className={classNames("app", theme)}>
            <Header/>
            
            <RouterProvider/>
        </div>
    );
};

export {App};