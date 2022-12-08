import classes from './Menu.module.css';

export default function Menu(props: { getIsMobile : (value: boolean) => void }): JSX.Element {
    const {getIsMobile } = props;

    return (
        <svg onClick={() => getIsMobile(true)} className={classes.menuSvg} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 27H30M6 9H30H6ZM6 18H18H6Z" stroke="#FFCB00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}