import classes from './Description.module.css';

export default function Description(): JSX.Element {
    return (
    <article className={classes.description}>
        <h2 className={classes.descriptionHeading}>
            О нас
        </h2>

        <div className={classes.descriptionContainer}>
            <p className={classes.descriptionContainerText}>
                Строительная компания ООО «ЯраМарк» основана
                <br />
                командой опытных специалистов - профессионалов своего
                <br />
                дела. 
            </p>

            <p className={classes.descriptionContainerText}>
                Стратегия строительной компании ООО «ЯраМарк» — это
                <br />
                постоянное развитие, повышение конкурентоспособности
                <br />
                за счёт качества и надёжности, эффективность бизнеса в
                <br />
                строительном сегменте рынка. 
            </p>

            <p className={classes.descriptionContainerText}>
                Благодаря высокому профессиональному уровню управления
                <br />
                строительством, применению современных строительных
                <br />
                решений, новейших производственных технологий,
                <br />
                использованию первоклассного штата сотрудников,
                <br />
                выполнение всех видов работ производится в запланированные
                <br />
                сроки при оптимальной стоимости строительства. 
            </p>
        </div>
    </article>
    )}