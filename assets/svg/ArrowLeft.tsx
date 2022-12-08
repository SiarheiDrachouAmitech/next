import classes from './ArrowLeft.module.css';

export default function ArrowLeft(props: { selectImage: (type: string) => void }): JSX.Element  {
    const { selectImage } = props;
    
    return (
        <svg onClick={() => selectImage('decrease')} className={classes.arrowLeftSvg} width="24" height="41" viewBox="0 0 24 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 2L3 20.5L22 39" stroke="#FFCB00" strokeWidth="3"/>
    </svg>
    )
}