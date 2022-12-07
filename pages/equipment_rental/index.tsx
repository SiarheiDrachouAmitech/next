import { useCallback, useMemo, useState } from "react";
import RentCard from "../../components/RentCard/RentCard";
import RequestModal from "../../components/RequestModal/RequestModal";

import Head from "../../node_modules/next/dist/shared/lib/head";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Navigation/Navigation';

export default function EquipmentRental(): JSX.Element {
  const categoryArray = [
    "Экскаваторы",
    "Погрузчики",
    "Каток",
    "Бульдозеры",
    "Самосвалы",
    "МАЗ/КАМАЗ",
    "Вся техника",
  ];
  const cardArray = useMemo(() => {
    return [
      {
        name: "HYUNDAI ROBEX 210 LC - 9s",
        technicType: "Гусеничный",
        src: "https://yaramark.by/img/Huyndai-R220-LC-9S.jpg",
        WEBPsrc: "https://yaramark.by/img/Huyndai-R220-LC-9S.webp",
        alt: "Гусеничный экскаватор HYUNDAI ROBEX 210 LC - 9",
        ladle: "1,2 м<sup>3</sup>",
        weight: "22 т",
        swampCaterpillar: "70 см",
        trackWidth: "",
        bladeWidth: "",
        diggingDepth: "",
        count: 3,
        type: "Экскаваторы",
      },
      {
        name: "Huyndai Robex R260 LC-9S",
        technicType: "Гусеничный",
        src: "https://yaramark.by/img/Huyndai-Robex-R260-LC-9S.jpg",
        WEBPsrc: "https://yaramark.by/img/Huyndai-Robex-R260-LC-9S.webp",
        alt: "Гусеничный экскаватор Huyndai Robex R260 LC-9S",
        ladle: "1,4 м<sup>3</sup>",
        weight: "25 т",
        swampCaterpillar: "80 см",
        trackWidth: "",
        bladeWidth: "",
        diggingDepth: "",
        type: "Экскаваторы",
        count: 2,
      },
      {
        name: "Huyndai Robex R220 LC-9s",
        technicType: "Гусеничный",
        src: "https://yaramark.by/img/Huyndai-Robex-R260-LC-9S.jpg",
        WEBPsrc: "https://yaramark.by/img/Huyndai-Robex-R260-LC-9S.webp",
        alt: "Гусеничный экскаватор Huyndai Robex R220 LC-9s",
        ladle: "1,2 м<sup>3</sup>",
        weight: "22 т",
        swampCaterpillar: "80 см",
        trackWidth: "",
        bladeWidth: "",
        diggingDepth: "",
        type: "Экскаваторы",
        count: 2,
      },
      {
        name: "Бульдозер Caterpiller D6M LGP",
        technicType: "Бульдозер",
        src: "https://yaramark.by/img/Бульдозер-Caterpiller-D6M-LGP.jpg",
        WEBPsrc: "https://yaramark.by/img/Бульдозер-Caterpiller-D6M-LGP.webp",
        alt: "Бульдозер Caterpiller D6M LGP",
        ladle: "",
        weight: "",
        swampCaterpillar: "",
        trackWidth: "86 см",
        bladeWidth: "4 м",
        diggingDepth: "",
        type: "Бульдозеры",
        count: 2,
      },
      {
        name: "Грунтовый каток BOMAG BW213",
        technicType: "Грунтовый каток",
        src: "https://yaramark.by/img/Грунтовый-каток-BOMAG-BW213.jpg",
        WEBPsrc: "https://yaramark.by/img/Грунтовый-каток-BOMAG-BW213.webp",
        alt: "Грунтовый каток BOMAG BW213",
        ladle: "",
        weight: "14 т",
        swampCaterpillar: "",
        trackWidth: "",
        bladeWidth: "",
        diggingDepth: "",
        type: "Каток",
        count: 2,
      },
      {
        name: "МАЗ 6502H9-422-052",
        technicType: "МАЗ",
        src: "https://yaramark.by/img/МАЗ-6502H9-422-052.jpg",
        WEBPsrc: "https://yaramark.by/img/МАЗ-6502H9-422-052.webp",
        alt: "МАЗ 6502H9-422-052 6х6 полный привод, 20 тонн, с повышенными бортами",
        ladle: "",
        weight: "20 т",
        swampCaterpillar: "",
        trackWidth: "",
        bladeWidth: "",
        diggingDepth: "",
        type: "МАЗ/КАМАЗ",
        count: 3,
      },
      {
        name: "Погрузчик SD LG 956F",
        technicType: "Погрузчик фронтальный",
        src: "https://yaramark.by/img/Погрузчик-SDLG-956F.jpg",
        WEBPsrc: "https://yaramark.by/img/Погрузчик-SDLG-956F.webp",
        alt: "Погрузчик SD LG 956F",
        ladle: "3 м<sup>3</sup>",
        weight: "5 т",
        swampCaterpillar: "",
        trackWidth: "",
        bladeWidth: "",
        diggingDepth: "",
        type: "Погрузчики",
        count: 2,
      },
      {
        name: "Самосвал МАЗ 5516",
        technicType: "Самосвал",
        src: "https://yaramark.by/img/Самосвал-МАЗ-5516.png",
        WEBPsrc: "https://yaramark.by/img/Самосвал-МАЗ-5516.webp",
        alt: "Самосвал МАЗ 5516 20 тонн, с повышенными бортами",
        ladle: "",
        weight: "20 т",
        swampCaterpillar: "",
        trackWidth: "",
        bladeWidth: "",
        diggingDepth: "",
        type: "Самосвалы",
        count: 8,
      },
      {
        name: "Самосвал МАЗ 6501",
        technicType: "Самосвал",
        src: "https://yaramark.by/img/Самосвал-МАЗ-6501.jpg",
        WEBPsrc: "https://yaramark.by/img/Самосвал-МАЗ-6501.webp",
        alt: "Самосвал МАЗ 6501 20 тонн, с повышенными бортами",
        ladle: "",
        weight: "20 т",
        swampCaterpillar: "",
        trackWidth: "",
        bladeWidth: "",
        diggingDepth: "",
        type: "Самосвалы",
        count: 9,
      },
      {
        name: "Экскаватор-погрузчик Case 695R SR-4PS",
        technicType: "Экскаватор-погрузчик",
        src: "https://yaramark.by/img/Экскаватор-погрузчик-Case-695R-SR-4PS.jpg",
        WEBPsrc:
          "https://yaramark.by/img/Экскаватор-погрузчик-Case-695R-SR-4PS.webp",
        alt: "Экскаватор-погрузчик Case 695R SR-4PS Равно колёсный, крабовый ход, челюстной ковш 1,3 м3",
        ladle: "1,3 м<sup>3</sup>",
        weight: "",
        swampCaterpillar: "",
        trackWidth: "",
        bladeWidth: "",
        diggingDepth: "",
        type: "Погрузчики",
        count: 1,
      },
    ];
  }, []);
  const [isOpenRequestModal, setIsOpenRequestModal] = useState(false);
  const [selectedType, setSelectedType] = useState("Вся техника");
  const [currentCardArray, setCurrentCardArray] = useState(cardArray);
  const getIsOpenRequestModal = useCallback((value: boolean) => {
    setIsOpenRequestModal(value);
  }, []);
  const filterCategory = useCallback(
    (category: string) => {
      setSelectedType(category);

      category === "Вся техника"
        ? setCurrentCardArray(cardArray)
        : setCurrentCardArray(
            cardArray.filter((card) => card.type === category)
          );
    },
    [cardArray]
  );
  let [isMobile, setIsMobile] = useState(false);

  const getIsMobile = (value: boolean) => {
      setIsMobile(value);
  }

  const onCloseMobileMenu = useCallback(() => {
    setIsMobile(false);
}, [setIsMobile]);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

<Header isMobile={isMobile} getIsMobile={getIsMobile} />

  <Navigation isMobile={isMobile} onClose={onCloseMobileMenu} />
      {isOpenRequestModal && <RequestModal onClose={getIsOpenRequestModal} />}
      <main className="main">
        <section className="rent">
          <ul className="rent-category-list">
            {categoryArray.map((category) => {
              return (
                <li
                  v-for="category in categoryArray"
                  key={category}
                  className="rent-category-list__item"
                >
                  <button
                    className={
                      selectedType === category
                        ? "rent-category-list__item__button rent-category-list__item__button--active"
                        : "rent-category-list__item__button"
                    }
                    onClick={() => filterCategory(category)}
                  >
                    {category}
                  </button>
                </li>
              );
            })}
          </ul>

          <ul className="rent-card-list">
            {currentCardArray.map((card) => {
              return (
                <RentCard
                  key={card.name}
                  getIsOpenRequest={getIsOpenRequestModal}
                  card={card}
                />
              );
            })}
          </ul>
        </section>
      </main>

<Footer />
    </>
  );
}
