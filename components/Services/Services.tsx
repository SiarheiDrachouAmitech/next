import { ServiceModel } from '../../models/models';
import ServiceImage from './ServiceImage/ServiceImage';

export default function Services(): JSX.Element {
    const services: ServiceModel[] =  [
        {
            id: 1,
            heading: `
                Благоустройство
            `,
            text: `
                Выполнение работ любой сложности и объемов
            `,
        },
        {
            id: 2,
            heading: `
                Генподряд
            `,
            text: `
                Ключевые профессиональные навыки высшего инженерного состава нашей организации
            `,
        },
        {
            id: 3,
            heading: `
                Инженерные сети
            `,
            text: `
                Достаточная технологическая база и оснастка нашей техники, позволяют нам закрывать нулевой цикл 
            `,
        },
        {
            id: 4,
            heading: `
                Земляные работы
            `,
            text: `
                Выполнение всего перечня работ нулевого цикла - избавит любого заказчика от головной боли
            `,
        },
        {
            id: 5,
            heading: `
                Укладка асфальта
            `,
            text: `
                Наши грамотные и технически подкованные специалисты, достойно выполняют работы
            `,
        },
        {
            id: 6,
            heading: `
                Устройство газона
            `,
            text: `
                Финальные очертания ландшафного парка возводят эстетику всприятия проекта
            `,
        },
        {
            id: 7,
            heading: `
                Ландшафтный подрядчик
            `,
            text: `
                Настоящие инженерные решения в гармонии с настоящей природой
            `,
        },
        {
            id: 8,
            heading: `
                Разработка ландшафтного дизайна
            `,
            text: `
                Ландшафный дизайн, это не просто картинка
            `,
        },
    ]

    return (
    <section className="services">
        <h2 className="services__heading">
            Наши услуги
        </h2>

        <ul className="services-list">
            {services.map((service) => {
            return (<li className="services-list-item" key={service.heading}>
                <ServiceImage itemId={service.id} />

                <figcaption>{service.heading}</figcaption>

                <p>{service.text}</p>
            </li>)
        })}
        </ul>
    </section>
    )}