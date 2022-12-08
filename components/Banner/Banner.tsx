import classes from './Banner.module.css'

export default function Banner(props: { heading: string, text: string}): JSX.Element {
    const {
        heading,
        text,
    } = props;

    return (<section className={`${classes.banner} ${classes.bannerBg}`}>
        <div className={classes.bannerContainer}>
            <h2 className={classes.bannerContainerHeading}>{heading}</h2>

            <p className={classes.bannerContainerText}>{text}</p>
        </div>
    </section>)
}