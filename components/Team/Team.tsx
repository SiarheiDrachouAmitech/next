import Link from "../../node_modules/next/link";
import Person from "../../assets/svg/Person";
import { TeamModel } from "../../models/models";

export default function Team(): JSX.Element {
    const teams: TeamModel[] = [
        {
            id: 1,
            position: `Начальник отдела ПТО`,
            name: `Некрасов Александр Владимирович`,
            tel: `+375(29)138-40-70`,
            person: "male",
        },
        {
            id: 2,
            position: `Главный инженер`,
            name: `Данилевич Олег Олегович`,
            tel: `+375(44)572-54-97`,
            person: "male",
        },
        {
            id: 3,
            position: `Заместитель главного инженера`,
            name: `Иванов Алексей Валерьевич`,
            tel: `+375(44)746-16-37`,
            person: "male",
        },
        {
            id: 4,
            position: `Начальник отдела снабжения`,
            name: `Лешкевич Алексей Андреевич`,
            tel: `+375(29)688-86-19`,
            person: "male",
        },
        {
            id: 5,
            position: `Начальник отдела ПТО`,
            name: `Малова Елена Валерьевна`,
            tel: `+375(29)844-79-81`,
            person: "female",
        },
        {
            id: 6,
            position: `Главный бухгалтер и начальник отдела кадров`,
            name: `Челядинская Екатерина Александровна`,
            tel: `+375(29)101-56-04`,
            person: "female",
        },
        {
            id: 6,
            position: `Инженер по охране труда`,
            name: `Малков Александр Михайлович`,
            tel: `+375(29)174-98-24`,
            person: "male",
        },
        {
            id: 7,
            position: `Производитель работ`,
            name: `Буйневич Сергей Иванович`,
            tel: null,
            person: "male",
        },
        {
            id: 8,
            position: `Производитель работ`,
            name: `Грицкевич Андрей Петрович`,
            tel: null,
            person: "male",
        },
    ];

    return (
    <section className="team">
        <h2 className="team__heading">
            Наша команда
        </h2>

        <ul className="team-list">
            {teams.map((team) => {
                return (
                    <li className="team-list__item team-list__item" key={team.name}>
                        <Person person={team.person} />
                        <p className="team-list__item__heading">{team.name}</p>

                        {team.tel && <Link className="team-list__item__link" href={'tel:' + team.tel}>{team.tel}</Link>}
                        
                        <p className="team-list__item__text">{team.position}</p>
                    </li>
                )
            })}
            
        </ul>
    </section>
    )
}