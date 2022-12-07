import { useCallback, useEffect, useState } from "react";
import ArrowLeft from "../../assets/svg/ArrowLeft";
import ArrowRight from "../../assets/svg/ArrowRight";
import { ObjectCarouselModel } from "../../models/models";

export default function ObjectCarousel(props: { images: ObjectCarouselModel[]}): JSX.Element {
    const { images } = props;

    let [selectSrc, setSelectSrc] = useState(images[0].src);
    let [selectWEBPSrc, setSelectWEBPSrc] = useState(images[0].WEBPsrc || '');
    let [selectAlt, setSelectAlt] = useState(images[0].alt);
    let [selectIndex, setSelectIndex] = useState(0);

    const selectImage = useCallback((type: string) => {
        const currentIndex = type === 'increase' ?
            ++selectIndex :
            --selectIndex;
        
        if(currentIndex < 0) {
            setSelectSrc(images[0].src)
            setSelectWEBPSrc(images[0].WEBPsrc || '')
            setSelectAlt(images[0].alt)
            return ;
        }

        if(currentIndex > images.length - 1) {
            setSelectSrc(images[images.length - 1].src)
            setSelectWEBPSrc(images[images.length - 1].WEBPsrc || '')
            setSelectAlt(images[images.length - 1].alt)

            return ;
        }

        setSelectSrc(images[currentIndex].src)
        setSelectWEBPSrc(images[currentIndex].WEBPsrc || '')
        setSelectAlt(images[currentIndex].alt)
        setSelectIndex(currentIndex)

    }, [images, selectIndex])
    
    return (
    <section className="carousel">
        <div className="carousel--big">
            <ArrowLeft selectImage={selectImage} />

            <picture>
                <source srcSet={selectWEBPSrc} type="image/webp" />
                <img src={selectSrc} alt={selectAlt} />
            </picture>

            <ArrowRight selectImage={selectImage} />
        </div>
        <ul className="carousel-list">
            {images.map((img: ObjectCarouselModel, index: number) => {
                return (<li className="carousel-list__item carousel-list__item--small" key={img.id} onClick={() => setSelectIndex(index)}>
                <img src={img.src} alt={img.alt} />
            </li>)}
            )}
        </ul>
    </section>
    )
}