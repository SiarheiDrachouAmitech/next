import classes from './ArrowRight.module.css';

export default function ArrowRight(props: { selectImage: (type: string) => void }): JSX.Element {
    const { selectImage } = props;
    
    return (
        <svg onClick={() => selectImage('increase')} className={classes.arrowRightSvg} width="24" height="41" viewBox="0 0 24 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 39L21 20.5L2 2" stroke="#FFCB00" strokeWidth="3"/>
    </svg>
    )
}