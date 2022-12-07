export default function Banner(props: { heading: string, text: string}): JSX.Element {
    const {
        heading,
        text,
    } = props;

    return (<section className="banner banner--bg">
        <div className="banner-container">
            <h2 className="banner-container__heading" >{heading}</h2>

            <p className="banner-container__text" >{text}</p>
        </div>
    </section>)
}