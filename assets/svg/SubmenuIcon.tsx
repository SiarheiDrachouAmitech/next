import classes from './SubMenuIcon.module.css';

export default function SubMenuIcon(props: { stroke?: string }): JSX.Element {
    const {
        stroke = 'black'
    } = props;

    return (
        <svg className={classes.submenuIconSvg} width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={classes.submenuIconPath} d="M1 1L6.5 6.5L12 1" stroke={stroke} strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
    )
}