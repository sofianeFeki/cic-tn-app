import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Breadcrumbs from '../../components/pageProps/Breadcrumbs';
import { cic1, cic2, cic3 } from '../../assets/images';
import { Helmet } from 'react-helmet-async';

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState('');
  // useEffect(() => {
  //   setPrevLocation(location.state.data || '');
  // }, [location]);

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="À propos" prevLocation={prevLocation} />
      <Helmet>
        <title>Chemical Ink Company | À propos</title>
        <meta
          name="description"
          content=" Bienvenue chez Chemical Ink Company of Bureautic (CIC), votre
            fournisseur en Tunisie spécialisé dans la distribution d'imprimantes et de fournitures informatiques"
        />
        <meta
          name="keywords"
          content="Chemical Ink company, cic-tn, imprimante tunisie , Photocopieur tunisie, consomable imprimante tunisie"
        />
        <link rel="canonical" href="https://www.chemicalink.com/about" />
        <meta property="og:title" content="Chemical Ink Company | À propos" />
        <meta
          property="og:description"
          content="decouvrir l'histoire de Chemical Ink Company cic-tn."
        />
        <meta property="og:url" content="https://www.cic-tn.com/about" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="pb-10 flex flex-col lg:flex-row">
        {/* Text Section */}
        <div className="lg:w-2/3 lg:pr-8">
          <div className="max-w-[720px] text-base text-lightText  mb-2">
            <h1 className="text-primeColor font-semibold text-lg mb-1">
              À propos de "Chemical Ink Company of Bureautic" (CIC)
            </h1>{' '}
            <p>
              Bienvenue chez Chemical Ink Company of Bureautic (CIC), votre
              fournisseur de confiance en Tunisie spécialisé dans la
              distribution de produits destinés aux détaillants spécialisés
              ainsi qu'aux revendeurs B2B et B2C. Notre catalogue inclut une
              gamme complète d'accessoires d'imprimantes et de fournitures
              informatiques de haute qualité. Fondée en 1997, par Monsieur Amor
              Draoui, notre société s'est donnée pour mission de fournir des
              produits d'exception à des prix compétitifs, tout en offrant un
              service client incomparable.
            </p>
          </div>
          <div className="max-w-[720px] text-base text-lightText mb-2">
            <h1 className="text-primeColor font-semibold text-lg  mb-1">
              Notre Histoire
            </h1>{' '}
            <p>
              Depuis notre création en 1997, Chemical Ink Company of Bureautic a
              su bâtir une réputation solide grâce à la fidélité de nos clients
              et à notre engagement indéfectible envers l'excellence. Implantée
              en Tunisie, notre société est rapidement devenue un acteur majeur
              dans le secteur des technologies de l'information.
            </p>
          </div>
          <div className="max-w-[720px] text-base text-lightText mb-2">
            <h1 className="text-primeColor font-semibold text-lg mb-1">
              Portefeuille de marques
            </h1>
            Au fil des années, Chemical Ink Company of Bureautic (CIC) a forgé
            des partenariats solides avec des leaders mondiaux dans le domaine
            des technologies d'impression et des fournitures informatiques. Nous
            sommes le distributeur officiel de la marque{' '}
            <span className="text-blue-500 cursor-pointer font-bold">
              <a href="https://www.ricoh.com" target="_blank">
                RICOH
              </a>
            </span>
            , un partenariat qui témoigne de notre engagement envers la qualité
            et l'innovation. Nous avons élargi notre portefeuille en devenant le
            distributeur officiel de la marque{' '}
            <span className="text-blue-500 cursor-pointer font-bold">
              <a href="https://www.pantum.com" target="_blank">
                PANTUM
              </a>
            </span>
            , renforçant ainsi notre offre avec des solutions d'impression
            performantes et économiques. Plus récemment, nous avons ajouté{' '}
            <span className="text-blue-500 cursor-pointer font-bold">
              <a href="https://www.dascom.com" target="_blank">
                TALLY DASCOM
              </a>
            </span>{' '}
            à notre gamme de marques distribuées, offrant à nos clients des
            solutions d'impression robustes et fiables. De plus, en tant que
            partenaire PLATINIUM de la marque{' '}
            <span className="text-blue-500 cursor-pointer font-bold">
              <a href="https://www.hp.com" target="_blank">
                HP
              </a>
            </span>
            , nous continuons à offrir des produits de pointe à nos clients.
            Nous avons également eu l'honneur de représenter la marque{' '}
            <span className="text-blue-500 cursor-pointer font-bold">
              <a href="https://www.samsung.com" target="_blank">
                SAMSUNG
              </a>
            </span>
            , consolidant ainsi notre position en tant que distributeur de
            confiance dans le secteur.
          </div>

          <div className="max-w-[720px] text-base text-lightText mb-2">
            <h1 className="text-primeColor font-semibold text-lg mb-1">
              Nos Valeurs
            </h1>{' '}
            <p>
              <span className="font-bold">Qualité Incomparable:</span> Chaque
              produit est soigneusement sélectionné pour garantir une qualité
              supérieure et une durabilité optimale, afin de répondre aux
              exigences les plus élevées de nos clients.{' '}
            </p>
            <p>
              <span className="font-bold">Service Client Dévoué :</span>
              La satisfaction de nos clients est au cœur de notre mission. Notre
              équipe, toujours à l'écoute, est disponible pour vous offrir un
              support personnalisé et répondre à tous vos besoins.
            </p>
            <p>
              {' '}
              <span className="font-bold"> Innovation Constante :</span> Nous
              nous engageons à rester à l'avant-garde de l'innovation, en vous
              proposant les dernières tendances et technologies du marché, pour
              que vous puissiez toujours bénéficier des meilleures solutions
              disponibles.
            </p>
          </div>
          <div className="max-w-[720px] text-base text-lightText mb-2">
            <h1 className="text-primeColor font-semibold text-lg mb-1">
              Pourquoi Choisir Chemical Ink Company of Bureautic (CIC) ?
            </h1>{' '}
            <p>
              {' '}
              <span className="font-bold">Vaste Gamme de Produits :</span>
              Explorez notre large sélection, comprenant des cartouches d'encre,
              des toners, une variété d'imprimantes, ainsi que des ordinateurs
              et PC portables. Notre catalogue répond à tous vos besoins en
              matière de technologie et de bureautique.
            </p>{' '}
            <p>
              <span className="font-bold">Livraison Efficace :</span> Avec une
              logistique optimisée et une forte présence en Tunisie, nous
              garantissons des délais de livraison rapides, où que vous soyez.
            </p>{' '}
            <p>
              {' '}
              <span className="font-bold">Satisfaction Garantie :</span> Votre
              satisfaction est notre priorité absolue. Tous nos produits sont
              couverts par une garantie de satisfaction, vous offrant ainsi la
              tranquillité d'esprit et la confiance que vous méritez.
            </p>
          </div>
          <div className="max-w-[720px] text-base text-lightText mb-2">
            <h1 className="text-primeColor font-semibold text-lg mb-1">
              Notre Équipe
            </h1>{' '}
            Notre équipe, composée de professionnels passionnés et expérimentés,
            est entièrement dédiée à vous offrir une expérience d'achat
            inégalée. Convaincus que chaque client mérite une attention
            personnalisée, nous nous engageons à dépasser vos attentes à chaque
            étape, en vous fournissant un service exceptionnel et des solutions
            parfaitement adaptées à vos besoins.
          </div>
          <div className="max-w-[720px] text-base text-lightText mb-2">
            <h1 className="text-primeColor font-semibold text-lg mb-1">
              Contactez-Nous
            </h1>{' '}
            Notre équipe est à votre disposition. Veuillez nous contacter par
            e-mail à l'adresse suivante :{' '}
            <span className="text-blue-500 underline font-bold">
              <Link to="/contact">contact@cic-tn.com</Link>
            </span>{' '}
            ou par téléphone aux numéros suivants :
            <span className="font-bold">+216 71 835 865</span> ou{' '}
            <span span className="font-bold">
              +216 71 834 046.
            </span>
          </div>
          <Link to="/shop">
            <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
              Nos Produits
            </button>
          </Link>
        </div>

        {/* Image Section */}
        <div className="flex-shrink-0 mt-6 lg:mt-0 lg:ml-8 lg:w-1/3">
          <div className="space-y-6">
            {/* First Image with Address */}
            <div className="relative group">
              <img
                src={cic1}
                alt="Company Location 1"
                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 rounded-b-lg">
                <span className="text-white font-semibold text-lg">
                  Z.I MEGRINE SAINT GOBAIN, 2 RUE REDAIEF 2033
                </span>
              </div>
            </div>

            {/* Second Image with Address */}
            <div className="relative group">
              <img
                src={cic3}
                alt="Company Location 2"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 rounded-b-lg">
                <span className="text-white font-semibold text-lg">
                  20 Rue du Koweit Lafayette TUNIS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
