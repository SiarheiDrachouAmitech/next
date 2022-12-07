import { AboutDescriptionModel } from "../../models/models";

export default function AboutTeams(props: AboutDescriptionModel): JSX.Element {
    const {
        array, heading, headingStyle, arrayStyle
    } = props;

    return (
        <div className="about-teams">
        <h5 className="h5" >{heading}</h5>

        {array && <ol className="ol" >
            {array.map((list: string, index: number) => {
                return (
                    <li key={index}>{list}</li>
                )
            })}
            
        </ol>}
    </div>
)}