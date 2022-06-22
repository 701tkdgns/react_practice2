import { BiHome, BiMusic, BiPhone, BiTag } from "react-icons/bi";

const headerItems = [
    {
        title: 'Home',
        url: '#home',
        cName: 'header__item-links',
        icons: BiHome,
    },
    {
        title: 'Services',
        url: '#services',
        cName: 'header__item-links',
        icons: BiMusic,
    },
    {
        title: 'Projects',
        url: '#projects',
        cName: 'header__item-links',
        icons: BiPhone,
    },
    {
        title: 'Contact us',
        url: '#contact',
        cName: 'header__item-links',
        icons: BiTag,
    },
]

export default headerItems