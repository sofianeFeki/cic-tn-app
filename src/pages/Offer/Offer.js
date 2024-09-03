import React, { useEffect, useState } from 'react';
import SpecialOffers from '../../components/home/SpecialOffers/SpecialOffers';
import Breadcrumbs from '../../components/pageProps/Breadcrumbs';
import { useParams } from 'react-router-dom';
import ShopSideNav from '../../components/pageProps/shopPage/ShopSideNav';
import Brand from '../../components/pageProps/shopPage/shopBy/Brand';
import Color from '../../components/pageProps/shopPage/shopBy/Color';
import Category from '../../components/pageProps/shopPage/shopBy/Category';
import { useDispatch } from 'react-redux';
import { setFilter, toggleBrand, toggleColor } from '../../redux/orebiSlice';
import SubCategory from '../../components/pageProps/shopPage/shopBy/subCtegory';
import ProductBanner from '../../components/pageProps/shopPage/ProductBanner';
import { Helmet } from 'react-helmet-async';

const Offer = () => {
  const [prevLocation] = useState('');
  const { category } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFilter());
  }, [dispatch, category]);
  return (
    <div className="bg-gray-100">
      <div className="max-w-container mx-auto px-4 ">
        <Breadcrumbs title={category} prevLocation={prevLocation} />
        <Helmet>
          <title>Chemical Ink Company | {category}</title>
          <meta
            name="description"
            content={`Découvrez nos produits ${category} chez Chemical Ink Company. Nous offrons une large gamme de ${category} de haute qualité.`}
          />
          <meta
            name="keywords"
            content={`Chemical Ink company, cic-tn, ${category} tunisie,${category} prix tunisie, acheter ${category} tunisie, produits ${category} tunisie`}
          />
          <link
            rel="canonical"
            href={`https://www.cic-tn.com/category/${category}`}
          />
          <meta
            property="og:title"
            content={`Chemical Ink Company | ${category}`}
          />
          <meta
            property="og:description"
            content={`Explorez notre sélection de ${category} et profitez des meilleures offres disponibles en Tunisie.`}
          />
          <meta
            property="og:url"
            content={`https://www.cic-tn.com/category/${category}`}
          />
          <meta property="og:type" content="website" />
        </Helmet>

        {/* ================= Products Start here =================== */}
        <div className="w-full h-full flex pb-20 gap-10">
          <div className="w-[20%] lgl:w-[25%] hidden mdl:inline-flex h-full">
            <ShopSideNav />
          </div>
          <div className="w-full mdl:w-[80%] lgl:w-[75%] h-full flex flex-col gap-10">
            <SpecialOffers />
          </div>
        </div>
        {/* ================= Products End here ===================== */}
      </div>
    </div>
  );
};

export default Offer;
