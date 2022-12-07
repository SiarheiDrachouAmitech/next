export default function Close(props: { onClose: () => void, fill?: string }): JSX.Element {
    const {
        fill = '#FB0000',
        onClose
    } = props;

    return (
        <svg onClick={onClose} className="close" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M29.5089 12.8422L27.1589 10.4922L20.0005 17.6505L12.8422 10.4922L10.4922 12.8422L17.6505 20.0005L10.4922 27.1589L12.8422 29.5089L20.0005 22.3505L27.1589 29.5089L29.5089 27.1589L22.3505 20.0005L29.5089 12.8422Z" fill={fill} />
        </svg>
    )
}