import { ObjectCarouselModel } from "../../models/models";
import Link from "../../node_modules/next/link"
import classes from './Reviews.module.css';

export default function Reviews(props: {openPreview: (preview: ObjectCarouselModel) => void}): JSX.Element {
    const { openPreview } = props;
    

    const reviews = [
        {
            id: 1,
            src: `https://yaramark.by/img/review.jpg`,
            WEBPsrc: `https://yaramark.by/img/review.webp`,
            alt: `отзыв`,
        },
        {
            id: 2,
            src: `https://yaramark.by/img/review1.jpg`,
            WEBPsrc: `https://yaramark.by/img/review1.webp`,
            alt: `отзыв`,
        },
        {
            id: 3,
            src: `https://yaramark.by/img/review2.jpg`,
            WEBPsrc: `https://yaramark.by/img/review2.webp`,
            alt: `отзыв`,
        },
    ];
    
    return (
    <section className={classes.reviews}>
        <h2 className={classes.reviewsHeading}>
            Отзывы
        </h2>

        <ul className={classes.reviewsList}>
            {reviews.map((review) => {
            return (<li className={classes.reviewsListItem} key={review.src} onClick={() => {openPreview(review)}}>
                <picture>
                    {review.WEBPsrc && <source
                        srcSet={review.WEBPsrc}
                        type="image/webp"
                    />}
                    <img src={review.src} alt={review.alt} />
                </picture>
            </li>)})}
        </ul>
        <Link href="/technical_competence">
        <a className={`${classes.reviewsLink} button--secondary`}>Просмотреть все</a>
        </Link>
    </section>
    )}