import React from "react";
import MainCarousel from "../components/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../components/HomeSectionCarousel/HomeSectionCarousel";
import { mens_kurta } from './../../Data/men_kurta';
import { mensShoesPage1 } from './../../Data/shoes';
// import { men_shirt} from'./../../Data/Men/men_shirt.json';
import Footer from "../components/Footer/Footer";
import { sareePage1 } from './../../Data/Saree/page1';
import { dressPage1 } from './../../Data/dress/page1';
import { gounsPage1 } from './../../Data/Gouns/gouns';
import { lehngacholiPage2 } from './../../Data/Saree/lenghaCholiPage2';
import { womentop } from './../../Data/Women/womentop';
import { womenjeans } from "../../Data/Women/womenpants";
import { menjeans } from './../../Data/Men/menjeans';

const HomePage = () => {
  return (
    <div>
      <div>
        <MainCarousel />
      </div>

      <div className=" space-y-10 py-10 flex flex-col justify-center px-5">
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"} />
        <HomeSectionCarousel data={mensShoesPage1} sectionName={"Men's Shoes"}  />
        <HomeSectionCarousel  data={menjeans} sectionName={"Men's Pants"}  />
        <HomeSectionCarousel  data={sareePage1} sectionName={"Women's Saree"} />
        <HomeSectionCarousel data={dressPage1} sectionName={"Women's Dress"} />
        <HomeSectionCarousel data={gounsPage1} sectionName={"Gouns"}  />
        <HomeSectionCarousel  data={lehngacholiPage2} sectionName={"Lehanga Choli"}  />
        <HomeSectionCarousel  data={womentop} sectionName={"Women Tops"} />
        <HomeSectionCarousel  data={womenjeans} sectionName={"Women Pants"} />
      </div>
    
    </div>
  );
};

export default HomePage;
