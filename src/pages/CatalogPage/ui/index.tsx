import {useTranslation} from "react-i18next";

const CatalogPage = () => {
    
    const {t} = useTranslation('catalog');
    
    return (
        <div>
            {t('тест')}
        </div>
    );
};

export default CatalogPage;