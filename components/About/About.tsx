import Steps from "./Steps/Steps"
import Description from "./Description/Description"
import classes from './About.module.css';

export default function About(): JSX.Element {

    return (
        <section className={classes.about}>
            <Steps />
            
            <Description />
        </section>
    )
}