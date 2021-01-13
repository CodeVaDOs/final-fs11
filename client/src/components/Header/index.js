import React, { useMemo, useState } from 'react';
import Logo from './ui/Logo';
import { useTranslation } from "react-i18next";
import { Collapse, makeStyles } from "@material-ui/core";

import HeaderLink from './components/HeaderLink';

import searchIcon from '@assert/icons/search-icon.svg';
import buttonArrow from '@assert/icons/buttonArrow.svg';
import { icons } from '@assert/header-icons/index';

const links = {
  mainLinks: [
    {
      id: 1,
      text: 'Главная',
      icon: icons.main,
      to: '/',
      isMain: true
    },
    {
      id: 2,
      text: 'Настройки',
      icon: icons.settings,
      to: '/setting',
      isMain: true
    },
  ],
  additionalLinks: [
    {
      id: 3,
      text: 'Панель',
      icon: icons.panel,
      to: '/panel',
      isMain: false

    },
    {
      id: 4,
      text: 'Клиенты',
      icon: icons.clients,
      to: '/clients',
      isMain: false

    },
    {
      id: 5,
      text: 'Документы',
      icon: icons.documents,
      to: '/documents',
      isMain: false

    },
    {
      id: 6,
      text: 'Финансы',
      icon: icons.finance,
      to: '/finances',
      isMain: false

    },
    {
      id: 7,
      text: 'Аренда',
      icon: icons.analytic,
      to: '/rent',
      isMain: false

    },
    {
      id: 8,
      text: 'Трансляция',
      icon: icons.photo,
      to: '/streaming',
      isMain: false
    },
    {
      id: 9,
      text: 'Дома',
      icon: icons.photo,
      to: '/houses',
      isMain: false
    },
  ]
};


const useStyles = makeStyles({
  header: {
    border: '1px solid #b1b4ba',
    borderTop: 'none',
    backgroundColor: '#eef5ff',
    padding: '51px 20px 48px',
    borderRadius: '0 0 20px 20px',
    minWidth: '890px',
    position: 'relative',
  },

  mainContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  linksContainer: {
    display: "flex",
    justifyContent: 'space-around',
    alignItems: 'center',
    minWidth: '285px'
  },

  searchContainer: {
    height: '39px',
    borderRadius: '8px',
    backgroundColor: '#f7faff',
    padding: '0 16px',
    display: 'flex',
    alignItems: 'center',
    width: '262px'
  },

  searchImg: {
    width: '22px',
    height: '22px'
  },

  searchInput: {
    background: 'none',
    border: 'none',
    color: '#b1b4ba',
    fontSize: '18px',
    fontWeight: 500,
    outline: 'none',
    height: '24px',
    marginLeft: '14px'

  },

  collapseContainer: {
    marginTop: '32px'
  },

  collapseButton: {
    border: '1px solid #b1b4ba',
    backgroundColor: '#eef5ff',
    borderRadius: '50%',
    height: '39px',
    width: '39px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',

    bottom: '-' + 39 / 2 + 'px',
    cursor: 'pointer',
    outline: 'none'

  },

  collapseButtonImage: props => ({
    transform: props.isOpenHeader ? 'rotateX(0deg)' : 'rotateX(180deg)',
    transition: '300ms linear',
  })
});

const Header = () => {
  const { t } = useTranslation();

  const [isOpenHeader, handleHeader] = useState(true);

  const classes = useStyles({ isOpenHeader });


  const mainList = useMemo(() =>
    links.mainLinks.map(link =>
      <HeaderLink key={link.id} {...link}/>), []);

  const additionalList = useMemo(() =>
    links.additionalLinks.map(link =>
      <HeaderLink key={link.id} {...link}/>), []
  );

  return (
    <header className={classes.header}>
      <div className={classes.mainContainer}>
        <Logo/>
        <div className={classes.linksContainer}>
          {mainList}
        </div>
        <div className={classes.searchContainer}>
          <img className={classes.searchImg} src={searchIcon} alt="search icon"/>
          <input className={classes.searchInput} placeholder="Поиск" type="text"/>
        </div>
      </div>

      <Collapse classes={{

      }} in={isOpenHeader} appear={true}>
        <div className={classes.collapseContainer}>
          <div className={classes.linksContainer}>
            {additionalList}
          </div>
        </div>
      </Collapse>

      <button className={classes.collapseButton} onClick={handleHeader.bind(null, !isOpenHeader)}>
        <img className={classes.collapseButtonImage} src={buttonArrow} alt="button arrow"/>
      </button>
    </header>
  );
};

export default React.memo(Header);
