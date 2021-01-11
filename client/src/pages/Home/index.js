import React from "react";
import { useTranslation } from "react-i18next";


const Home = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t('home')} </h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores deserunt, dignissimos doloremque ea enim eos est excepturi explicabo fuga labore magnam perferendis perspiciatis quam quasi suscipit tempora veniam vitae.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, amet architecto aspernatur atque blanditiis cupiditate debitis eligendi ipsam libero maxime minima nihil nisi nobis perferendis sunt, tempore veniam vero, voluptatum?
      </p>
      {/*<PanelAdminNewUser/>*/}
    </div>
  );

};

export default Home;
