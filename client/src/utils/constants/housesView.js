import React from "react";
import image1 from "../../components/HouseCard/HousesList/img_1.png";
// import image from "../../components/HouseCard/HousesList/santech.png";

export const options = ["Всі", 'Орендовані', 'Вільні'];
//pause
export const pause = (
  <svg width="14.571" height="17" viewBox="0 0 14.571 17">
    <g id="Сгруппировать_1320" data-name="Сгруппировать 1320" transform="translate(-444 -895)">
      <path id="ic_pause_24px" d="M6,22h4.857V5H6ZM15.714,5V22h4.857V5Z" transform="translate(438 890)" fill="#4ad584"/>
    </g>
  </svg>
);
//camazik
export const camaz = (
  <svg width="21.036" height="15.299" viewBox="0 0 21.036 15.299">
    <path id="ic_local_shipping_24px" d="M19.168,7.825H16.3V4H2.912A1.918,1.918,0,0,0,1,5.912V16.43H2.912a2.869,2.869,0,1,0,5.737,0h5.737a2.869,2.869,0,1,0,5.737,0h1.912V11.65ZM5.781,17.865A1.434,1.434,0,1,1,7.215,16.43,1.432,1.432,0,0,1,5.781,17.865ZM18.69,9.259l1.874,2.39H16.3V9.259Zm-1.434,8.606A1.434,1.434,0,1,1,18.69,16.43,1.432,1.432,0,0,1,17.255,17.865Z" transform="translate(-1 -4)" fill="#f88b38"/>
  </svg>
);


// Даные по домам

export const tileData = Array.apply(null, Array(10)).map((_, index) => (
  {
    id: index,
    img: image1,
    contractDate: index,
    contractId: index,
    location: index,
    town: index,
    svg: camaz,
    days: index * 4,
    status: index,
    details: index,
    price: index * 1000,
    percent: index * 10,
    square: index,
    equipment: index,
    detail: index,

  }
)
);
