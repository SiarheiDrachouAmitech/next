export default function Preview(): JSX.Element {

    return (
        <section className="preview">
        <div className="preview-container">
            <h1 className="preview__heading">
                Строительная компания
                <span>ЯраМарк</span>
            </h1>

            <p className="preview__text">
                <span>Качество, Надежность и Доверие</span>
                <br />
                — это основные критерии, на которых
                <br />
                построены основные принципы работы
                <br />
                строительной компании
                <span>ООО «ЯраМарка» </span>
            </p>

            <a className="button--primary" href="#footer">
                Заказать звонок
            </a>
        </div>
    </section>
    )
}