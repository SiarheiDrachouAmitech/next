import Steps from "./Steps/Steps"
import Description from "./Description/Description"

export default function About(): JSX.Element {

    return (
        <section className="about">
            <Steps />
            
            <Description />
        </section>
    )
}