import {ButtonHTMLAttributes, useCallback} from "react";

import { classNames } from "@/shares/lib/classNames";

import styles from "./styles.module.scss";
import {Button, ButtonTheme} from "@/shares/ui/Button";
import {useTranslation} from "react-i18next";

import LanguageIcon from "@/icons/language.svg";

interface LangSwitcherProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    readonly theme?: ButtonTheme;
}

const LangSwitcher = (props: LangSwitcherProps) => {
    const { className, onClick, ...otherProps } = props;
    
    const {i18n} = useTranslation();
    
    const handleLangToggleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
        onClick?.(e);
    }, []);
    
    return (
        <Button
            className={classNames(styles.root, className)}
            onClick={handleLangToggleClick}
            {...otherProps}
        >
            <LanguageIcon />
        </Button>
    );
};

export {LangSwitcher, LangSwitcherProps};