import { ObjectCarouselModel } from "../../models/models";
import Link from "../../node_modules/next/link"

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
    <section className="reviews">
        <h2 className="reviews__heading">
            Отзывы
        </h2>

        <ul className="reviews-list">
            {reviews.map((review) => {
            return (<li className="reviews-list__item" key={review.src} onClick={() => {openPreview(review)}}>
                <picture>
                    {review.WEBPsrc && <source
                        srcSet={review.WEBPsrc}
                        type="image/webp"
                    />}
                    <img src={review.src} alt={review.alt} />
                </picture>
            </li>)})}
        </ul>

        <a className="reviews__link button--secondary" href="/technical_competence">Просмотреть все</a>
    </section>
    )}