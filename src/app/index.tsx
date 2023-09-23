import "./styles/index.scss";

import {Header} from "@/widgets/Header";
import {RouterProvider} from "@/app/providers/RouterProvider";
import {useTheme} from "@/shares/theme";
import {classNames} from "@/shares/lib/classNames";

const App = () => {
    const {theme} = useTheme();
    
    const t = 0;
    
    return (
        <div className={classNames("app", theme)}>
            <Header />
            
            <div
                style={{
                    marginTop: 3,
                    display: "block",
                }}
            />
            
            {t ? (
                <div>
                    123 &rbrace;
                </div>
            ) : null}
            
            <main>
                <RouterProvider />
            </main>
        </div>
    );
};

export {App};