
import AboutTeams from './AboutTeams';
import { AboutDescriptionModel } from '../../models/models';

export default function AboutDescription(props: any): JSX.Element {
    const lists: AboutDescriptionModel[] = [
        {
            heading: `Наша компания имеет разрешительную документацию для производства выше указанных работ.`,
            array: null,
            headingStyle: {
                marginBottom: '20px',
            },
            arrayStyle: {},
        },
        {
            heading: `Коллектив ООО «ЯраМарк» состоит из профессионалов своего дела, для осуществления работ данной отрасли имеются:`,
            array: null,
            headingStyle: {
                marginBottom: '33px',
            },
            arrayStyle: {},
        },
        {
            heading: `Оказываемые услуги:`,
            array: [
                `
                    все виды земляных работ (выторфовка, снятие разноуровневого грунта, 
                    вертикальная планировка территории, устройство котлованов любой сложности с последующей 
                    обратной засыпкой);
                `,
                `
                    благоустройство территории (установка борта, посадки газона, посадка зеленных насаждений, 
                    устройство плиточного, бетонного и асфальтобетонного покрытия любой сложности);
                `,
                `
                    наружные сети (канализации, водопровода, ливневой канализации, очистные сооружения);
                `,
                `
                    строительство автомобильных дорог (весь комплекс работ).
                `,
                `
                    общестроительные работы; 
                `,
            ],
            headingStyle: {
                marginBottom: '33px',
            },
            arrayStyle: {
                listStyleType: 'number',
                marginBottom: '130px',
            }
        },
        {
            heading: `Управляющий`,
            array: null,
            headingStyle: {
                marginBottom: '10px',
            },
            arrayStyle: {
                listStyleType: 'disc',
                marginBottom: '33px',
            }
        },
        {
            heading: `Отдел бухгалтера:`,
            array: [
                `главный бухгалтер`,
                `специалист по кадрам`,
            ],
            headingStyle: {
                marginBottom: '10px',
            },
            arrayStyle: {
                listStyleType: 'disc',
                marginBottom: '33px',
            }
        },
        {
            heading: `Аттестованные специалисты:`,
            array: [
                `главный инженер`,
                `производитель работ`,
                `мастер строительного участка`,
                `инженер по сметной работе`,
                `инженер по охране труда`,
            ],
            headingStyle: {
                marginBottom: '10px',
            },
            arrayStyle: {
                listStyleType: 'disc',
                marginBottom: '33px',
            }
        },
        {
            heading: `Произодственно-технический отдел (ПТО):`,
            array: [
                `начальник отдела`,
                `инженер ПТО`,
            ],
            headingStyle: {
                marginBottom: '10px',
            },
            arrayStyle: {
                listStyleType: 'disc',
                marginBottom: '33px',
            }
        },
        {
            heading: `Служба геодезиста:`,
            array: [
                `ведущий геодезист`,
                `инженер геодезист`,
            ],
            headingStyle: {
                marginBottom: '10px',
            },
            arrayStyle: {
                listStyleType: 'disc',
                marginBottom: '33px',
            }
        },
        {
            heading: `В огранизации создан профсаюз`,
            array: null,
            headingStyle: {
                marginBottom: '33px',
            },
            arrayStyle: {},
        },
        {
            heading: `Нашей организацией четко отлажена система покупки основных строительных материалов, имеем свой офис и производственную базу.`,
            array: null,
            headingStyle: {
                marginBottom: '33px',
            },
            arrayStyle: {},
        }
    ];

    return (
        <article className="about-us">
        <h3 className="about-us__heading">
            Форма собственности – частная, действуем на основании Устава
        </h3>

        {lists.map((list: AboutDescriptionModel) => {
        return (
            <div key={list.heading}>
                <AboutTeams array={list.array} heading={list.heading} headingStyle={list.headingStyle} arrayStyle={list.arrayStyle} />
            </div>
        )})}
    </article>
    )
}