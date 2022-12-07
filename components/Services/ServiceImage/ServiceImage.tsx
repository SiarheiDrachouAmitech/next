
    import ServiceImage1 from "../../../assets/svg/ServiceImage1";
    import ServiceImage2 from "../../../assets/svg/ServiceImage2";
    import ServiceImage3 from "../../../assets/svg/ServiceImage3";
    import ServiceImage4 from "../../../assets/svg/ServiceImage4";
    import ServiceImage5 from "../../../assets/svg/ServiceImage5";
    import ServiceImage6 from "../../../assets/svg/ServiceImage6";
    import ServiceImage7 from "../../../assets/svg/ServiceImage7";
    import ServiceImage8 from "../../../assets/svg/ServiceImage8";

export default function ServiceImage(props: { itemId: number }): JSX.Element {
    const { itemId } = props;

    if(itemId === 1) return <div className="service-image"><ServiceImage1  /></div>
    if(itemId === 2) return <div className="service-image"><ServiceImage2  /></div>
    if(itemId === 3) return <div className="service-image"><ServiceImage3  /></div>
    if(itemId === 4) return <div className="service-image"><ServiceImage4  /></div>
    if(itemId === 5) return <div className="service-image"><ServiceImage5  /></div>
    if(itemId === 6) return <div className="service-image"><ServiceImage6  /></div>
    if(itemId === 7) return <div className="service-image"><ServiceImage7  /></div>

    return <div className="service-image"><ServiceImage8 /></div>
}