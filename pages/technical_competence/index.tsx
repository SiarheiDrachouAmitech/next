import { useCallback, useMemo, useState } from "react";
import SubmenuIcon from "../../assets/svg/SubmenuIcon";
import PreviewModal from "../../components/PreviewModal/PreviewModal";
import { ObjectCarouselModel } from "../../models/models";
import Head from "../../node_modules/next/dist/shared/lib/head";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Navigation/Navigation';

export default function TechnicalCompetence(): JSX.Element {
  const certificates = useMemo(() => {
    return [
      {
        src: "https://yaramark.by/img/certificates.jpg",
        WEBPsrc: "https://yaramark.by/img/certificates.webp",
        alt: `Сертификат соответствия `,
      },
      {
        src: "https://yaramark.by/img/certificates1.jpg",
        WEBPsrc: "https://yaramark.by/img/certificates1.webp",
        alt: `Сертификат соответствия `,
      },
      {
        src: "https://yaramark.by/img/certificates2.jpg",
        WEBPsrc: "https://yaramark.by/img/certificates2.webp",
        alt: `Сертификат соответствия `,
      },
      {
        src: "https://yaramark.by/img/certificates3.jpg",
        WEBPsrc: "https://yaramark.by/img/certificates3.webp",
        alt: `Сертификат соответствия `,
      },
      {
        src: "https://yaramark.by/img/certificates4.jpg",
        WEBPsrc: "https://yaramark.by/img/certificates4.webp",
        alt: `Сертификат соответствия `,
      },
      {
        src: "https://yaramark.by/img/certificates5.jpg",
        WEBPsrc: "https://yaramark.by/img/certificates5.webp",
        alt: `Сертификат соответствия `,
      },
      {
        src: "https://yaramark.by/img/certificates6.jpg",
        WEBPsrc: "https://yaramark.by/img/certificates6.webp",
        alt: `Сертификат соответствия `,
      },
      {
        src: "https://yaramark.by/img/certificates7.jpg",
        WEBPsrc: "https://yaramark.by/img/certificates7.webp",
        alt: `Сертификат соответствия `,
      },
      {
        src: "https://yaramark.by/img/certificates8.jpg",
        WEBPsrc: "https://yaramark.by/img/certificates8.webp",
        alt: `Сертификат соответствия `,
      },
      {
        src: "https://yaramark.by/img/certificates9.jpg",
        WEBPsrc: "https://yaramark.by/img/certificates9.webp",
        alt: `Сертификат соответствия `,
      },
      {
        src: "https://yaramark.by/img/certificates10.jpg",
        WEBPsrc: "https://yaramark.by/img/certificates10.webp",
        alt: `Сертификат соответствия `,
      },
      {
        src: "https://yaramark.by/img/certificates11.jpg",
        WEBPsrc: "https://yaramark.by/img/certificates11.webp",
        alt: `Сертификат соответствия `,
      },
      {
        src: "https://yaramark.by/img/certificates12.jpg",
        WEBPsrc: "https://yaramark.by/img/certificates12.webp",
        alt: `Сертификат соответствия `,
      },
      {
        src: "https://yaramark.by/img/certificates13.jpg",
        WEBPsrc: "https://yaramark.by/img/certificates13.webp",
        alt: `Сертификат соответствия `,
      },
      {
        src: "https://yaramark.by/img/certificates14.jpg",
        WEBPsrc: "https://yaramark.by/img/certificates14.webp",
        alt: `Сертификат соответствия `,
      },
    ];
  }, []);
  const attestates = useMemo(() => {
    return [
      {
        src: "https://yaramark.by/img/attestate-of-conformity.jpg",
        WEBPsrc: "https://yaramark.by/img/attestate-of-conformity.webp",
        alt: `Сертификат соответствия`,
      },
      {
        src: "https://yaramark.by/img/attestate-of-conformity1.jpg",
        WEBPsrc: "https://yaramark.by/img/attestate-of-conformity1.webp",
        alt: `Сертификат соответствия`,
      },
      {
        src: "https://yaramark.by/img/attestate-of-conformity2.jpg",
        WEBPsrc: "https://yaramark.by/img/attestate-of-conformity2.webp",
        alt: `Сертификат соответствия`,
      },
    ];
  }, []);
  const evidences = useMemo(() => {
    return [
      {
        src: "https://yaramark.by/img/evidence.jpg",
        WEBPsrc: "https://yaramark.by/img/evidence.webp",
        alt: `Свидетельство о технической компетентности`,
      },
      {
        src: "https://yaramark.by/img/evidence1.jpg",
        WEBPsrc: "https://yaramark.by/img/evidence1.webp",
        alt: `Свидетельство о технической компетентности`,
      },
      {
        src: "https://yaramark.by/img/evidence2.jpg",
        WEBPsrc: "https://yaramark.by/img/evidence2.webp",
        alt: `Свидетельство о технической компетентности`,
      },
      {
        src: "https://yaramark.by/img/evidence3.jpg",
        WEBPsrc: "https://yaramark.by/img/evidence3.webp",
        alt: `Свидетельство о технической компетентности`,
      },
      {
        src: "https://yaramark.by/img/evidence4.jpg",
        WEBPsrc: "https://yaramark.by/img/evidence4.webp",
        alt: `Свидетельство о технической компетентности`,
      },
    ];
  }, []);
  const reviews = useMemo(() => {
    return [
      {
        src: "https://yaramark.by/img/review.jpg",
        WEBPsrc: "https://yaramark.by/img/review.webp",
        alt: `Отзыв о проделанной работе`,
      },
      {
        src: "https://yaramark.by/img/review1.jpg",
        WEBPsrc: "https://yaramark.by/img/review1.webp",
        alt: `Отзыв о проделанной работе`,
      },
      {
        src: "https://yaramark.by/img/review2.jpg",
        WEBPsrc: "https://yaramark.by/img/review2.webp",
        alt: `Отзыв о проделанной работе`,
      },
      {
        src: "https://yaramark.by/img/review3.jpg",
        WEBPsrc: "https://yaramark.by/img/review3.webp",
        alt: `Отзыв о проделанной работе`,
      },
      {
        src: "https://yaramark.by/img/review4.jpg",
        WEBPsrc: "https://yaramark.by/img/review4.webp",
        alt: `Отзыв о проделанной работе`,
      },
      {
        src: "https://yaramark.by/img/review5.jpg",
        WEBPsrc: "https://yaramark.by/img/review5.webp",
        alt: `Отзыв о проделанной работе`,
      },
      {
        src: "https://yaramark.by/img/review6.jpg",
        WEBPsrc: "https://yaramark.by/img/review6.webp",
        alt: `Отзыв о проделанной работе`,
      },
      {
        src: "https://yaramark.by/img/review7.jpg",
        WEBPsrc: "https://yaramark.by/img/review7.webp",
        alt: `Отзыв о проделанной работе`,
      },
      {
        src: "https://yaramark.by/img/review8.jpg",
        WEBPsrc: "https://yaramark.by/img/review8.webp",
        alt: `Отзыв о проделанной работе`,
      },
      {
        src: "https://yaramark.by/img/review9.jpg",
        WEBPsrc: "https://yaramark.by/img/review9.webp",
        alt: `Отзыв о проделанной работе`,
      },
      {
        src: "https://yaramark.by/img/review10.jpg",
        WEBPsrc: "https://yaramark.by/img/review10.webp",
        alt: `Отзыв о проделанной работе`,
      },
    ];
  }, []);
  const [isCertificates, setIsCertificates] = useState(true);
  const [isAttestates, setIsAttestates] = useState(false);
  const [isEvidences, setIsEvidences] = useState(false);
  const [isReviews, setIsReviews] = useState(false);
  let [isOpenPreview, setIsOpenPreview] = useState(false);
  let [selectSrc, setSelectSrc] = useState('');
  let [selectWEBPSrc, setSelectWEBPSrc] = useState('');
  let [selectAlt, setSelectAlt] = useState('');

  const onClose = useCallback(() => {
    setIsOpenPreview(false);
    setSelectSrc('');
    setSelectWEBPSrc('');
    setSelectAlt('');
  }, []);

  const openPreview = useCallback((preview: ObjectCarouselModel) => {
    setSelectSrc(preview.src);
    setSelectWEBPSrc(preview.WEBPsrc || '');
    setSelectAlt(preview.alt);
    setIsOpenPreview(true)
  }, []);


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
      {isOpenPreview && <PreviewModal onClose={onClose} previewSrc={selectSrc} previewWEBPSrc={selectWEBPSrc} previewAlt={selectAlt} />}
      <main className="main">
        <section className="technical-competence">
          <div className="technical-competence-container">
            <h3 className="technical-competence-container__heading" onClick={() => setIsCertificates(true)}>
              Сертификаты
              <SubmenuIcon />
            </h3>

            {isCertificates && <ul className="technical-competence-container-list">
              {certificates.map((image) => {
                return (
                  <li
                    className="technical-competence-container-list__item"
                    key={image.src}
                    onClick={() => openPreview(image)}
                  >
                    <picture>
                      <source srcSet={image.WEBPsrc} type="image/webp" />
                      <img src={image.src} alt={image.alt} />
                    </picture>
                  </li>
                );
              })}
            </ul>}
          </div>

          <div className="technical-competence-container">
            <h3 className="technical-competence-container__heading" onClick={() => setIsAttestates(true)}>
              Аттестаты
              <SubmenuIcon />
            </h3>

            {isAttestates && <ul
              className="technical-competence-container-list" 
            >
              {attestates.map((image) => {
                return (
                  <li
                    className="technical-competence-container-list__item"
                    key={image.src}
                    onClick={() => openPreview(image)}
                  >
                    <picture>
                      <source srcSet={image.WEBPsrc} type="image/webp" />
                      <img src={image.src} alt={image.alt} />
                    </picture>
                  </li>
                );
              })}
            </ul>}
          </div>

          <div className="technical-competence-container">
            <h3 className="technical-competence-container__heading" onClick={() => setIsEvidences(true)}>
              Свидетельства
              <SubmenuIcon />
            </h3>

            {isEvidences && <ul
              className="technical-competence-container-list" 
            >
              {evidences.map((image) => {
                return (
                  <li
                    className="technical-competence-container-list__item"
                    key={image.src}
                    onClick={() => openPreview(image)}
                  >
                    <picture>
                      <source srcSet={image.WEBPsrc} type="image/webp" />
                      <img src={image.src} alt={image.alt} />
                    </picture>
                  </li>
                );
              })}
            </ul>}
          </div>

          <div className="technical-competence-container">
            <h3 className="technical-competence-container__heading" onClick={() => setIsReviews(true)}>
              Отзывы
              <SubmenuIcon />
            </h3>

            {isReviews && <ul className="technical-competence-container-list" >
              {reviews.map((image) => {
                return (
                  <li
                    className="technical-competence-container-list__item"
                    key={image.src}
                    onClick={() => openPreview(image)}
                  >
                    <picture>
                      <source srcSet={image.WEBPsrc} type="image/webp" />
                      <img src={image.src} alt={image.alt} />
                    </picture>
                  </li>
                );
              })}
            </ul>}
          </div>
        </section>
      </main>

<Footer />
    </>
  );
}
