import classes from './Preview.module.css';

export default function Preview(): JSX.Element {

    return (
        <section className={classes.preview}>
        <div className={classes.previewContainer}>
            <h1 className={classes.previewHeading}>
                Строительная компания
                <span>ЯраМарк</span>
            </h1>

            <p className={classes.previewText}>
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