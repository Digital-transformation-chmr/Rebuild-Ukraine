import {useTranslation} from 'react-i18next';

const Footer = () => {

    const {t} = useTranslation();

    return (
        <footer className="h-[150px] bg-orange-400">
            {t('footer')}
        </footer>
    );
};

export default Footer;