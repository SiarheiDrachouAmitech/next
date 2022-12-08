import { AboutDescriptionModel } from "../../models/models";
import classes from './AboutTeams.module.css';

export default function AboutTeams(props: AboutDescriptionModel): JSX.Element {
    const {
        array, heading, headingStyle, arrayStyle
    } = props;

    return (
        <div className={classes.aboutTeams}>
        <h5 className={classes.h5}>{heading}</h5>

        {array && <ol className={classes.ol}>
            {array.map((list: string, index: number) => {
                return (
                    <li key={index}>{list}</li>
                )
            })}
            
        </ol>}
    </div>
)}