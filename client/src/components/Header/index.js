import React, { lazy, useMemo, useState } from 'react';
import Logo from './ui/Logo';
import { useTranslation } from "react-i18next";
import { makeStyles, Collapse } from "@material-ui/core";
import HeaderLink from './components/HeaderLink';
import searchIcon from '../../assert/icons/search-icon.svg';
import buttonArrow from '../../assert/icons/buttonArrow.svg';
import { icons } from '../../assert/header-icons';
import { connect } from "react-redux";

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
  const { t } = useTranslation();

  const [isOpenHeader, handleHeader] = useState(true);

  const classes = useStyles({ isOpenHeader });
  const links = {
    mainLinks: [
      {
        id: 1,
        text:t('menuHome'),
        icon: icons.main,
        to: '/',
        isMain: true
      },
      {
        id: 2,
        text:t('menuSettings'),
        icon: icons.settings,
        to: '/setting',
        isMain: true
      },
    ],
    additionalLinks: [
      {
        id: 3,
        text:t("menuPanel"),
        icon: icons.panel,
        to: '/panel',
        isMain: false,
        isUser: true,
        isAdmin: false,
        isManager: false
      },
      {
        id: 31,
        text:t("menuPanel"),
        icon: icons.panel,
        to: '/panel/manager',
        isMain: false,
        isUser: false,
        isAdmin: false,
        isManager: true
      },
      {
        id: 32,
        text:t("menuPanel"),
        icon: icons.panel,
        to: '/panel/admin',
        isMain: false,
        isUser: false,
        isAdmin: true,
        isManager: false
      },
      {
        id: 4,
        text:t("menuHouses"),
        icon: icons.photo,
        to: '/houses',
        isMain: false,
        isUser: true,
        isAdmin: true,
        isManager: false
      },
      {
        id: 5,
        text:t("menuClients"),
        icon: icons.clients,
        to: '/clients',
        isMain: false,
        isUser: false,
        isAdmin: true,
        isManager: true
      },
      {
        id: 6,
        text:t("menuDocuments"),
        icon: icons.documents,
        to: '/documents',
        isMain: false,
        isUser: true,
        isAdmin: true,
        isManager: true
      },
      {
        id: 7,
        text:t("menuFinance"),
        icon: icons.finance,
        to: '/finances',
        isMain: false,
        isUser: false,
        isAdmin: true,
        isManager: true
      },
      {
        id: 8,
        text:t("menuRent"),
        icon: icons.analytic,
        to: '/rent',
        isMain: false,
        isUser: false,
        isAdmin: true,
        isManager: true
      },
      {
        id: 9,
        text:t("menuStatistic"),
        icon: icons.analytic,
        to: '/statistic',
        isMain: false,
        isUser: true,
        isAdmin: false,
        isManager: false
      },
      {
        id: 10,
        text:t("menuEmployee"),
        icon: icons.photo,
        to: '/employees',
        isMain: false,
        isUser: false,
        isAdmin: true,
        isManager: false
      },
      {
        id: 11,
        text: t("menuHistory"),
        icon: icons.photo,
        to: '/history',
        isMain: false,
        isUser: false,
        isAdmin: true,
        isManager: false
      },
    ]
  };

  const mainList = useMemo(() =>
    links.mainLinks.map(link =>
      <HeaderLink key={link.id} {...link}/>), []);
  
  const additionalListClient = useMemo(() =>
    links.additionalLinks.map(link =>{
      if(link.isUser === true)
        return <HeaderLink key={link.id} {...link}/>;
    }), []
  );
  const additionalListManager = useMemo(() =>
    links.additionalLinks.map(link =>{
      if(link.isManager === true)
        return <HeaderLink key={link.id} {...link}/>;
    }), []
  );
  const additionalListAdmin = useMemo(() =>
    links.additionalLinks.map(link =>{
      if(link.isAdmin === true)
        return <HeaderLink key={link.id} {...link}/>;
    }), []
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
          <input className={classes.searchInput} placeholder= {t("search")} type="text"/>
        </div>
      </div>
      <Collapse classes={{
      }} in={isOpenHeader} appear={true}>
        <div className={classes.collapseContainer}>
          <div className={classes.linksContainer}>
            {(props.user.role === "USER" && additionalListClient) ||
            (props.user.role === "MANAGER" && additionalListManager) ||
            (props.user.role === "ADMIN" && additionalListAdmin)}
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

