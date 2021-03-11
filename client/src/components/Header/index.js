import React, {useEffect, useMemo, useState} from 'react';
import Logo from './ui/Logo';
import {useTranslation} from "react-i18next";
import {Collapse, makeStyles} from "@material-ui/core";
import HeaderLink from './components/HeaderLink';
import searchIcon from '../../assert/icons/search-icon.svg';
import buttonArrow from '../../assert/icons/buttonArrow.svg';
import {icons} from '../../assert/header-icons';
import {connect} from "react-redux";

const useStyles = makeStyles({
  header: {
    border: '1px solid #b1b4ba',
    borderTop: 'none',
    backgroundColor: '#eef5ff',
    padding: '51px 20px 48px',
    borderRadius: '0 0 20px 20px',
    position: 'relative',
  },
  mainContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  linksContainer: {
    display: "flex",
    justifyContent: 'center',
    flexWrap: 'wrap',
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

const Header = (props) => {
  const { t, i18n } = useTranslation();
  const [isOpenHeader, handleHeader] = useState(true);
  const classes = useStyles({ isOpenHeader });
  useEffect(()=>{
    setMenu({
      mainLinks: [
        {
          id: 1,
          text: t('menuHome'),
          icon: icons.main,
          to: '/',
          isMain: true
        },
        {
          id: 2,
          text: t('menuSettings'),
          icon: icons.settings,
          to: '/setting',
          isMain: true
        },
      ],
      additionalLinks: [
        {
          id: 3,
          text: t("menuPanel"),
          icon: icons.panel,
          to: '/panel',
          isMain: false,
          role: "USER",
        },
        {
          id: 31,
          text: t("menuPanel"),
          icon: icons.panel,
          to: '/panel/manager',
          isMain: false,
          role: "MANAGER"
        },
        {
          id: 32,
          text: t("menuPanel"),
          icon: icons.panel,
          to: '/panel/admin',
          isMain: false,
          role: "ADMIN"
        },
        {
          id: 4,
          text: t("menuHouses"),
          icon: icons.photo,
          to: '/houses',
          isMain: false,
          role: 'USER:ADMIN',
        },
        {
          id: 5,
          text: t("menuClients"),
          icon: icons.clients,
          to: '/clients',
          isMain: false,
          role: "ADMIN:MANAGER",
        },
        {
          id: 6,
          text: t("menuDocuments"),
          icon: icons.documents,
          to: '/documents',
          isMain: false,
          role: "USER:ADMIN:MANAGER",
        },
        {
          id: 7,
          text: t("menuFinance"),
          icon: icons.finance,
          to: '/finances',
          isMain: false,
          role: "ADMIN:MANAGER",
        },
        {
          id: 8,
          text: t("menuRent"),
          icon: icons.analytic,
          to: '/rent',
          isMain: false,
          role: "ADMIN:MANAGER",
        },
        {
          id: 9,
          text: t("menuStatistic"),
          icon: icons.analytic,
          to: '/statistic',
          isMain: false,
          role: "USER",
        },
        {
          id: 10,
          text: t("menuEmployee"),
          icon: icons.clients,
          to: '/employees',
          isMain: false,
          role: "ADMIN",
        },
        {
          id: 11,
          text: t("menuHistory"),
          icon: icons.photo,
          to: '/history',
          isMain: false,
          role: "ADMIN",
        },
      ]
    })
  },[i18n.language])
  const [menu, setMenu] = useState({
    mainLinks: [
      {
        id: 1,
        text: t('menuHome'),
        icon: icons.main,
        to: '/',
        isMain: true
      },
      {
        id: 2,
        text: t('menuSettings'),
        icon: icons.settings,
        to: '/setting',
        isMain: true
      },
    ],
    additionalLinks: [
      {
        id: 3,
        text: t("menuPanel"),
        icon: icons.panel,
        to: '/panel',
        isMain: false,
        role: "USER",
      },
      {
        id: 31,
        text: t("menuPanel"),
        icon: icons.panel,
        to: '/panel/manager',
        isMain: false,
        role: "MANAGER"
      },
      {
        id: 32,
        text: t("menuPanel"),
        icon: icons.panel,
        to: '/panel/admin',
        isMain: false,
        role: "ADMIN"
      },
      {
        id: 4,
        text: t("menuHouses"),
        icon: icons.photo,
        to: '/houses',
        isMain: false,
        role: 'USER:ADMIN',
      },
      {
        id: 5,
        text: t("menuClients"),
        icon: icons.clients,
        to: '/clients',
        isMain: false,
        role: "ADMIN:MANAGER",
      },
      {
        id: 6,
        text: t("menuDocuments"),
        icon: icons.documents,
        to: '/documents',
        isMain: false,
        role: "USER:ADMIN:MANAGER",
      },
      {
        id: 7,
        text: t("menuFinance"),
        icon: icons.finance,
        to: '/finances',
        isMain: false,
        role: "ADMIN:MANAGER",
      },
      {
        id: 8,
        text: t("menuRent"),
        icon: icons.analytic,
        to: '/rent',
        isMain: false,
        role: "ADMIN:MANAGER",
      },
      {
        id: 9,
        text: t("menuStatistic"),
        icon: icons.analytic,
        to: '/statistic',
        isMain: false,
        role: "USER",
      },
      {
        id: 10,
        text: t("menuEmployee"),
        icon: icons.clients,
        to: '/employees',
        isMain: false,
        role: "ADMIN",
      },
      {
        id: 11,
        text: t("menuHistory"),
        icon: icons.photo,
        to: '/history',
        isMain: false,
        role: "ADMIN",
      },
    ]
  })

  const mainList = useMemo(() =>
      menu.mainLinks.map(link =>
      <HeaderLink key={link.id} {...link}/>), []);

  const additionalList = useMemo(() =>
      menu.additionalLinks
      .filter(link => link.role.split(':').includes(props.user.role))
      .map(link => <HeaderLink key={link.id} {...link}/>), []
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
          <input className={classes.searchInput} placeholder={t("search")} type="text"/>
        </div>
      </div>
      <Collapse classes={{}} in={isOpenHeader} appear={true}>
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
const mapStateToProps = (state) => {
  return {
    user: state.auth.user
  };
};
export default connect(mapStateToProps, null)(Header);

