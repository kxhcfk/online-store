import "./styles/index.scss";
import {RouterProvider} from "@/app/providers/RouterProvider/ui";

import styles from './styles.module.scss'
import {Header} from "@/widgets/Header";

const App = () => {
    return (
        <div className={styles.root}>
            <Header/>
            
            <RouterProvider/>
        </div>
    );
};

export {App};