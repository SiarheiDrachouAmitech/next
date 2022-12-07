import Head from "next/dist/shared/lib/head";
import { useCallback, useMemo, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";
import Router from "../../node_modules/next/router";
import ObjectPage from "../../views/objectPage";
import { ObjectDescriptionModel } from "../../models/models";

export default function Object(): JSX.Element {
  let [isMobile, setIsMobile] = useState(false);
  const path = Router?.router?.state?.query?.object;
  
  const getIsMobile = (value: boolean) => {
    setIsMobile(value);
  };

  const onCloseMobileMenu = useCallback(() => {
    setIsMobile(false);
  }, [setIsMobile]);

  const vileyka: ObjectDescriptionModel = useMemo(() => {
    return {
        location: 'Приход храма Покрова Пресвятой Богородицы г. Вилейка Молодечненская епархия Белорусской Православной церкви',
        year: '01.09.2021 г.',
        sqrt: '520',
        images: [
            {
                id: 'vileyka-1',
                src: 'https://yaramark.by/img/vileyka-1.jpg',
                alt: `Приход храма Покрова Пресвятой Богородицы г. Вилейка Молодечненская епархия Белорусской Православной церкви`,
            },
            {
                id: 'vileyka-2',
                src: 'https://yaramark.by/img/vileyka-2.jpg',
                alt: `Приход храма Покрова Пресвятой Богородицы г. Вилейка Молодечненская епархия Белорусской Православной церкви`,
            },
            {
                id: 'vileyka-3',
                src: 'https://yaramark.by/img/vileyka-3.jpg',
                alt: `Приход храма Покрова Пресвятой Богородицы г. Вилейка Молодечненская епархия Белорусской Православной церкви`,
            },
            {
                id: 'vileyka-4',
                src: 'https://yaramark.by/img/vileyka-4.jpg',
                alt: `Приход храма Покрова Пресвятой Богородицы г. Вилейка Молодечненская епархия Белорусской Православной церкви`,
            },
            {
                id: 'vileyka-5',
                src: 'https://yaramark.by/img/vileyka-5.jpg',
                alt: `Приход храма Покрова Пресвятой Богородицы г. Вилейка Молодечненская епархия Белорусской Православной церкви`,
            },
            {
                id: 'vileyka-6',
                src: 'https://yaramark.by/img/vileyka-6.jpg',
                alt: `Приход храма Покрова Пресвятой Богородицы г. Вилейка Молодечненская епархия Белорусской Православной церкви`,
            },
            {
                id: 'vileyka-7',
                src: 'https://yaramark.by/img/vileyka-7.jpg',
                alt: `Приход храма Покрова Пресвятой Богородицы г. Вилейка Молодечненская епархия Белорусской Православной церкви`,
            },
        ],
        heading: 'Полный комплекс работ по благоустройству:',
        lists: [
            'Устройство отмостки',
            'Установка тротуарного борта',
            'Устройство литочного основания',
        ],
        headingStyle: {
            marginBottom: '33px',
        },
        arrayStyle: {
            marginBottom: '130px',
        }
    };
  }, []);

  const uprooting: ObjectDescriptionModel = useMemo(() => {
    return {
        location: 'Корчевание и вытряхивание пней с расчисткой территории',
        year: '31.07.2020 г.',
        sqrt: '60000',
        images: [
            {
                id: 'uprooting-1',
                src: 'https://yaramark.by/img/uprooting-1.jpg',
                alt: `Корчевание и вытряхивание пней с расчисткой территории`,
            },
            {
                id: 'uprooting-2',
                src: 'https://yaramark.by/img/uprooting-2.jpg',
                alt: `Корчевание и вытряхивание пней с расчисткой территории`,
            },
            {
                id: 'uprooting-3',
                src: 'https://yaramark.by/img/uprooting-3.jpg',
                alt: `Корчевание и вытряхивание пней с расчисткой территории`,
            },
            {
                id: 'uprooting-4',
                src: 'https://yaramark.by/img/uprooting-4.jpg',
                alt: `Корчевание и вытряхивание пней с расчисткой территории`,
            },
            {
                id: 'uprooting-5',
                src: 'https://yaramark.by/img/uprooting-5.jpg',
                alt: `Корчевание и вытряхивание пней с расчисткой территории`,
            },
            {
                id: 'uprooting-6',
                src: 'https://yaramark.by/img/uprooting-6.jpg',
                alt: `Корчевание и вытряхивание пней с расчисткой территории`,
            },
            {
                id: 'uprooting-7',
                src: 'https://yaramark.by/img/uprooting-7.jpg',
                alt: `Корчевание и вытряхивание пней с расчисткой территории`,
            },
            {
                id: 'uprooting-8',
                src: 'https://yaramark.by/img/uprooting-8.jpg',
                alt: `Корчевание и вытряхивание пней с расчисткой территории`,
            },
            {
                id: 'uprooting-9',
                src: 'https://yaramark.by/img/uprooting-9.jpg',
                alt: `Корчевание и вытряхивание пней с расчисткой территории`,
            },
            {
                id: 'uprooting-10',
                src: 'https://yaramark.by/img/uprooting-10.jpg',
                alt: `Корчевание и вытряхивание пней с расчисткой территории`,
            },
            {
                id: 'uprooting-11',
                src: 'https://yaramark.by/img/uprooting-11.jpg',
                alt: `Корчевание и вытряхивание пней с расчисткой территории`,
            },
            {
                id: 'uprooting-12',
                src: 'https://yaramark.by/img/uprooting-12.jpg',
                alt: `Корчевание и вытряхивание пней с расчисткой территории`,
            },
        ],
        heading: 'Полный комплекс работ по благоустройству:',
        lists: [
            'Корчевание и вытряхивание пней с расчисткой территории',
        ],
        headingStyle: {
            marginBottom: '33px',
        },
        arrayStyle: {
            marginBottom: '130px',
        }
    };
  }, []);

  const svisloch: ObjectDescriptionModel = useMemo(() => {
    return {
        location: '«Республиканский центр обработки данных',
        year: '13.07.2020 г.',
        sqrt: '5100',
        images: [
            {
                id: 'svisloch-1',
                src: 'https://yaramark.by/img/svisloch-1.jpg',
                alt: `«Республиканский центр обработки данных`,
            },
            {
                id: 'svisloch-2',
                src: 'https://yaramark.by/img/svisloch-2.jpg',
                alt: `«Республиканский центр обработки данных`,
            },
            {
                id: 'svisloch-3',
                src: 'https://yaramark.by/img/svisloch-3.jpg',
                alt: `«Республиканский центр обработки данных`,
            },
            {
                id: 'svisloch-4',
                src: 'https://yaramark.by/img/svisloch-4.jpg',
                alt: `«Республиканский центр обработки данных`,
            },
            {
                id: 'svisloch-5',
                src: 'https://yaramark.by/img/svisloch-5.jpg',
                alt: `«Республиканский центр обработки данных`,
            },
            {
                id: 'svisloch-6',
                src: 'https://yaramark.by/img/svisloch-6.jpg',
                alt: `«Республиканский центр обработки данных`,
            },
            {
                id: 'svisloch-7',
                src: 'https://yaramark.by/img/svisloch-7.jpg',
                alt: `«Республиканский центр обработки данных`,
            },
            {
                id: 'svisloch-8',
                src: 'https://yaramark.by/img/svisloch-8.jpg',
                alt: `«Республиканский центр обработки данных`,
            },
            {
                id: 'svisloch-9',
                src: 'https://yaramark.by/img/svisloch-9.jpg',
                alt: `«Республиканский центр обработки данных`,
            },
        ],
        heading: 'Полный комплекс работ по благоустройству:',
        lists: [
            'Устройство основания',
            'Устройство асфальтобетонного покрытия',
            'Устройство борта дорожного и тротуарного',
            'Устройство плиточного основания',
            'Устройство отмостки',
            'Озеленение территории',
        ],
        headingStyle: {
            marginBottom: '33px',
        },
        arrayStyle: {
            marginBottom: '130px',
        }
    };
  }, []);

  const stone: ObjectDescriptionModel = useMemo(() => {
    return {
        location: 'Унитарное предприятие "Компания по управлению недвижимостью индустриального парка"',
        year: '09.04.2021 г.',
        sqrt: '170',
        images: [
            {
                id: 'stone-1',
                src: 'https://yaramark.by/img/stone-1.jpg',
                alt: `«Модернизация благоустройства жилого дома с инвентарным номером 614/С-47068 по адресу: Республика Беларусь, Минская область, Смолевичский район, Китайско-Белорусский индустриальный парк «Великий Камень», ул. Дружная, 1»`,
            },
            {
                id: 'stone-2',
                src: 'https://yaramark.by/img/stone-2.jpg',
                alt: `«Модернизация благоустройства жилого дома с инвентарным номером 614/С-47068 по адресу: Республика Беларусь, Минская область, Смолевичский район, Китайско-Белорусский индустриальный парк «Великий Камень», ул. Дружная, 1»`,
            },
            {
                id: 'stone-3',
                src: 'https://yaramark.by/img/stone-3.jpg',
                alt: `«Модернизация благоустройства жилого дома с инвентарным номером 614/С-47068 по адресу: Республика Беларусь, Минская область, Смолевичский район, Китайско-Белорусский индустриальный парк «Великий Камень», ул. Дружная, 1»`,
            },
            {
                id: 'stone-4',
                src: 'https://yaramark.by/img/stone-4.jpg',
                alt: `«Модернизация благоустройства жилого дома с инвентарным номером 614/С-47068 по адресу: Республика Беларусь, Минская область, Смолевичский район, Китайско-Белорусский индустриальный парк «Великий Камень», ул. Дружная, 1»`,
            },
            {
                id: 'stone-5',
                src: 'https://yaramark.by/img/stone-5.jpg',
                alt: `«Модернизация благоустройства жилого дома с инвентарным номером 614/С-47068 по адресу: Республика Беларусь, Минская область, Смолевичский район, Китайско-Белорусский индустриальный парк «Великий Камень», ул. Дружная, 1»`,
            },
            {
                id: 'stone-6',
                src: 'https://yaramark.by/img/stone-6.jpg',
                alt: `«Модернизация благоустройства жилого дома с инвентарным номером 614/С-47068 по адресу: Республика Беларусь, Минская область, Смолевичский район, Китайско-Белорусский индустриальный парк «Великий Камень», ул. Дружная, 1»`,
            },
            {
                id: 'stone-7',
                src: 'https://yaramark.by/img/stone-7.jpg',
                alt: `«Модернизация благоустройства жилого дома с инвентарным номером 614/С-47068 по адресу: Республика Беларусь, Минская область, Смолевичский район, Китайско-Белорусский индустриальный парк «Великий Камень», ул. Дружная, 1»`,
            },
            {
                id: 'stone-8',
                src: 'https://yaramark.by/img/stone-8.jpg',
                alt: `«Модернизация благоустройства жилого дома с инвентарным номером 614/С-47068 по адресу: Республика Беларусь, Минская область, Смолевичский район, Китайско-Белорусский индустриальный парк «Великий Камень», ул. Дружная, 1»`,
            },
            {
                id: 'stone-9',
                src: 'https://yaramark.by/img/stone-9.jpg',
                alt: `«Модернизация благоустройства жилого дома с инвентарным номером 614/С-47068 по адресу: Республика Беларусь, Минская область, Смолевичский район, Китайско-Белорусский индустриальный парк «Великий Камень», ул. Дружная, 1»`,
            },
            {
                id: 'stone-10',
                src: 'https://yaramark.by/img/stone-10.jpg',
                alt: `«Модернизация благоустройства жилого дома с инвентарным номером 614/С-47068 по адресу: Республика Беларусь, Минская область, Смолевичский район, Китайско-Белорусский индустриальный парк «Великий Камень», ул. Дружная, 1»`,
            },
            {
                id: 'stone-11',
                src: 'https://yaramark.by/img/stone-11.jpg',
                alt: `«Модернизация благоустройства жилого дома с инвентарным номером 614/С-47068 по адресу: Республика Беларусь, Минская область, Смолевичский район, Китайско-Белорусский индустриальный парк «Великий Камень», ул. Дружная, 1»`,
            },
            {
                id: 'stone-12',
                src: 'https://yaramark.by/img/stone-12.jpg',
                alt: `«Модернизация благоустройства жилого дома с инвентарным номером 614/С-47068 по адресу: Республика Беларусь, Минская область, Смолевичский район, Китайско-Белорусский индустриальный парк «Великий Камень», ул. Дружная, 1»`,
            },
            {
                id: 'stone-13',
                src: 'https://yaramark.by/img/stone-13.jpg',
                alt: `«Модернизация благоустройства жилого дома с инвентарным номером 614/С-47068 по адресу: Республика Беларусь, Минская область, Смолевичский район, Китайско-Белорусский индустриальный парк «Великий Камень», ул. Дружная, 1»`,
            },
            {
                id: 'stone-14',
                src: 'https://yaramark.by/img/stone-14.jpg',
                alt: `«Модернизация благоустройства жилого дома с инвентарным номером 614/С-47068 по адресу: Республика Беларусь, Минская область, Смолевичский район, Китайско-Белорусский индустриальный парк «Великий Камень», ул. Дружная, 1»`,
            },
        ],
        heading: 'Полный комплекс работ по благоустройству:',
        lists: [
            'Устройство борта тротуарного и дорожного',
            'Устройство плиточного основания',
            'Устройство отмостки',
            'Установка ограждения'
        ],
        headingStyle: {
            marginBottom: '33px',
        },
        arrayStyle: {
            marginBottom: '130px',
        }
    };
  }, []);

  const shelter: ObjectDescriptionModel = useMemo(() => {
    return {
        location: 'Социально-педагогический центр Центрального района г. Минска',
        year: '05.04.2020 г.',
        sqrt: '40',
        images: [
            {
                id: 'shelter-1',
                src: 'https://yaramark.by/img/shelter-1.jpg',
                alt: `Благоустройство территории детского социального приюта по адресу: г. Минск, ул. М. Танка, 34а. Благотворительность`,
            },
            {
                id: 'shelter-2',
                src: 'https://yaramark.by/img/shelter-2.jpg',
                alt: `Благоустройство территории детского социального приюта по адресу: г. Минск, ул. М. Танка, 34а. Благотворительность`,
            },
            {
                id: 'shelter-3',
                src: 'https://yaramark.by/img/shelter-3.jpg',
                alt: `Благоустройство территории детского социального приюта по адресу: г. Минск, ул. М. Танка, 34а. Благотворительность`,
            },
            {
                id: 'shelter-4',
                src: 'https://yaramark.by/img/shelter-4.jpg',
                alt: `Благоустройство территории детского социального приюта по адресу: г. Минск, ул. М. Танка, 34а. Благотворительность`,
            },
            {
                id: 'shelter-5',
                src: 'https://yaramark.by/img/shelter-5.jpg',
                alt: `Благоустройство территории детского социального приюта по адресу: г. Минск, ул. М. Танка, 34а. Благотворительность`,
            },
            {
                id: 'shelter-6',
                src: 'https://yaramark.by/img/shelter-6.jpg',
                alt: `Благоустройство территории детского социального приюта по адресу: г. Минск, ул. М. Танка, 34а. Благотворительность`,
            },
            {
                id: 'shelter-7',
                src: 'https://yaramark.by/img/shelter-7.jpg',
                alt: `Благоустройство территории детского социального приюта по адресу: г. Минск, ул. М. Танка, 34а. Благотворительность`,
            },
        ],
        heading: 'Полный комплекс работ по благоустройству:',
        lists: [
            'Ремонт основания из плитки',
            'Ремонт отмостки',
        ],
        headingStyle: {
            marginBottom: '33px',
        },
        arrayStyle: {
            marginBottom: '130px',
        }
    };
  }, []);

  const ruxtex: ObjectDescriptionModel = useMemo(() => {
    return {
        location: 'Общество с ограниченной ответственностью «Санвеста»',
        year: '01.09.2020 г.',
        sqrt: '7200',
        images: [
            {
                id: 'ruxtex-1',
                src: 'https://yaramark.by/img/ruxtex-1.jpg',
                alt: `«Создание производства оптомеханических компонентов, электронных узлов и лазерного оборудования на их базе. 3-ья очередь» работы по устройству оснований под полы`,
            },
            {
                id: 'ruxtex-2',
                src: 'https://yaramark.by/img/ruxtex-2.jpg',
                alt: `«Создание производства оптомеханических компонентов, электронных узлов и лазерного оборудования на их базе. 3-ья очередь» работы по устройству оснований под полы`,
            },
            {
                id: 'ruxtex-3',
                src: 'https://yaramark.by/img/ruxtex-3.jpg',
                alt: `«Создание производства оптомеханических компонентов, электронных узлов и лазерного оборудования на их базе. 3-ья очередь» работы по устройству оснований под полы`,
            },
            {
                id: 'ruxtex-4',
                src: 'https://yaramark.by/img/ruxtex-4.jpg',
                alt: `«Создание производства оптомеханических компонентов, электронных узлов и лазерного оборудования на их базе. 3-ья очередь» работы по устройству оснований под полы`,
            },
            {
                id: 'ruxtex-5',
                src: 'https://yaramark.by/img/ruxtex-5.jpg',
                alt: `«Создание производства оптомеханических компонентов, электронных узлов и лазерного оборудования на их базе. 3-ья очередь» работы по устройству оснований под полы`,
            },
            {
                id: 'ruxtex-6',
                src: 'https://yaramark.by/img/ruxtex-6.jpg',
                alt: `«Создание производства оптомеханических компонентов, электронных узлов и лазерного оборудования на их базе. 3-ья очередь» работы по устройству оснований под полы`,
            },
            {
                id: 'ruxtex-7',
                src: 'https://yaramark.by/img/ruxtex-7.jpg',
                alt: `«Создание производства оптомеханических компонентов, электронных узлов и лазерного оборудования на их базе. 3-ья очередь» работы по устройству оснований под полы`,
            },
            {
                id: 'ruxtex-8',
                src: 'https://yaramark.by/img/ruxtex-8.jpg',
                alt: `«Создание производства оптомеханических компонентов, электронных узлов и лазерного оборудования на их базе. 3-ья очередь» работы по устройству оснований под полы`,
            },
            {
                id: 'ruxtex-9',
                src: 'https://yaramark.by/img/ruxtex-9.jpg',
                alt: `«Создание производства оптомеханических компонентов, электронных узлов и лазерного оборудования на их базе. 3-ья очередь» работы по устройству оснований под полы`,
            },
            {
                id: 'ruxtex-10',
                src: 'https://yaramark.by/img/ruxtex-10.jpg',
                alt: `«Создание производства оптомеханических компонентов, электронных узлов и лазерного оборудования на их базе. 3-ья очередь» работы по устройству оснований под полы`,
            },
        ],
        heading: 'Полный комплекс работ по благоустройству:',
        lists: [
            'Исправление существующего основания',
            'Устройство песчаного основания',
            'Устройство щебеночного основания с расклинцовкой',
        ],
        headingStyle: {
            marginBottom: '33px',
        },
        arrayStyle: {
            marginBottom: '130px',
        }
    };
  }, []);

  const minina: ObjectDescriptionModel = useMemo(() => {
    return {
        location: 'Реконструкция зданий РУП «Стройтехнорм» по ул. Кузьмы Минина 7, 11',
        year: '16.11.2021 г.',
        sqrt: '890',
        images: [
            {
                id: 'Minina-1',
                src: 'https://yaramark.by/img/minina-1.jpg',
                alt: `«Реконструкция зданий РУП «Стройтехнорм» по ул. Кузьмы Минина 7, 11»`,
            },
            {
                id: 'Minina-2',
                src: 'https://yaramark.by/img/minina-2.jpg',
                alt: `«Реконструкция зданий РУП «Стройтехнорм» по ул. Кузьмы Минина 7, 11»`,
            },
            {
                id: 'Minina-3',
                src: 'https://yaramark.by/img/minina-3.jpg',
                alt: `«Реконструкция зданий РУП «Стройтехнорм» по ул. Кузьмы Минина 7, 11»`,
            },
            {
                id: 'Minina-4',
                src: 'https://yaramark.by/img/minina-4.jpg',
                alt: `«Реконструкция зданий РУП «Стройтехнорм» по ул. Кузьмы Минина 7, 11»`,
            },
            {
                id: 'Minina-5',
                src: 'https://yaramark.by/img/minina-5.jpg',
                alt: `«Реконструкция зданий РУП «Стройтехнорм» по ул. Кузьмы Минина 7, 11»`,
            },
        ],
        heading: 'Полный комплекс работ по благоустройству:',
        lists: [
            'Устройство борта тротуарного и дорожного',
            'Устройство плиточного основания',
            'Разработка грунта',
            'Вертикальная планировка',
            'Устройство основания под устройство асфальтобетонного покрытия',
            'Устройство наружны сетей ливневой канализации',
        ],
        headingStyle: {
            marginBottom: '33px',
        },
        arrayStyle: {
            marginBottom: '130px',
        }
    };
  }, []);

  const markup: ObjectDescriptionModel = useMemo(() => {
    return {
      location: "ООО «Флоренс компани»",
      year: "30.09.2020 г.",
      sqrt: "2400",
      images: [
        {
          id: "markup-1",
          src: "https://yaramark.by/img/markup-1.jpg",
          alt: `«Техническая модернизация здания специализированного для производства электротехнического, электронного и оптического оборудования (производственный корпус с АБК) с инвентарным номером 614/С-46617» Нанесение разметки`,
        },
        {
          id: "markup-2",
          src: "https://yaramark.by/img/markup-2.jpg",
          alt: `«Техническая модернизация здания специализированного для производства электротехнического, электронного и оптического оборудования (производственный корпус с АБК) с инвентарным номером 614/С-46617» Нанесение разметки`,
        },
        {
          id: "markup-3",
          src: "https://yaramark.by/img/markup-3.jpg",
          alt: `«Техническая модернизация здания специализированного для производства электротехнического, электронного и оптического оборудования (производственный корпус с АБК) с инвентарным номером 614/С-46617» Нанесение разметки`,
        },
        {
          id: "markup-4",
          src: "https://yaramark.by/img/markup-4.jpg",
          alt: `«Техническая модернизация здания специализированного для производства электротехнического, электронного и оптического оборудования (производственный корпус с АБК) с инвентарным номером 614/С-46617» Нанесение разметки`,
        },
        {
          id: "markup-5",
          src: "https://yaramark.by/img/markup-5.jpg",
          alt: `«Техническая модернизация здания специализированного для производства электротехнического, электронного и оптического оборудования (производственный корпус с АБК) с инвентарным номером 614/С-46617» Нанесение разметки`,
        },
        {
          id: "markup-6",
          src: "https://yaramark.by/img/markup-6.jpg",
          alt: `«Техническая модернизация здания специализированного для производства электротехнического, электронного и оптического оборудования (производственный корпус с АБК) с инвентарным номером 614/С-46617» Нанесение разметки`,
        },
      ],
      heading: "Полный комплекс работ по благоустройству:",
      lists: ["Устройство разметки в производственных цехах"],
      headingStyle: {
        marginBottom: "33px",
      },
      arrayStyle: {
        marginBottom: "130px",
      },
    };
  }, []);

  const courts: ObjectDescriptionModel = useMemo(() => {
    return {
      location:
        "Минский объединенный спортивный клуб Федерации профсоюзов Беларуси",
      year: "30.04.2020 г.",
      sqrt: "2550",
      images: [
        {
          id: "courts-1",
          src: "https://yaramark.by/img/courts-1.jpg",
          alt: `Строительство площадки и инженерных сетей для временной воздухоопорной конструкции для размещения теннисных кортов" по адресу: Минская обл., Минский р-н, аг. Ждановичи-1, включая электромонтажные работы`,
        },
        {
          id: "courts-2",
          src: "https://yaramark.by/img/courts-2.jpg",
          alt: `Строительство площадки и инженерных сетей для временной воздухоопорной конструкции для размещения теннисных кортов" по адресу: Минская обл., Минский р-н, аг. Ждановичи-1, включая электромонтажные работы`,
        },
        {
          id: "courts-3",
          src: "https://yaramark.by/img/courts-3.jpg",
          alt: `Строительство площадки и инженерных сетей для временной воздухоопорной конструкции для размещения теннисных кортов" по адресу: Минская обл., Минский р-н, аг. Ждановичи-1, включая электромонтажные работы`,
        },
        {
          id: "courts-4",
          src: "https://yaramark.by/img/courts-4.jpg",
          alt: `Строительство площадки и инженерных сетей для временной воздухоопорной конструкции для размещения теннисных кортов" по адресу: Минская обл., Минский р-н, аг. Ждановичи-1, включая электромонтажные работы`,
        },
        {
          id: "courts-5",
          src: "https://yaramark.by/img/courts-5.jpg",
          alt: `Строительство площадки и инженерных сетей для временной воздухоопорной конструкции для размещения теннисных кортов" по адресу: Минская обл., Минский р-н, аг. Ждановичи-1, включая электромонтажные работы`,
        },
        {
          id: "courts-6",
          src: "https://yaramark.by/img/courts-6.jpg",
          alt: `Строительство площадки и инженерных сетей для временной воздухоопорной конструкции для размещения теннисных кортов" по адресу: Минская обл., Минский р-н, аг. Ждановичи-1, включая электромонтажные работы`,
        },
        {
          id: "courts-7",
          src: "https://yaramark.by/img/courts-7.jpg",
          alt: `Строительство площадки и инженерных сетей для временной воздухоопорной конструкции для размещения теннисных кортов" по адресу: Минская обл., Минский р-н, аг. Ждановичи-1, включая электромонтажные работы`,
        },
        {
          id: "courts-8",
          src: "https://yaramark.by/img/courts-8.jpg",
          alt: `Строительство площадки и инженерных сетей для временной воздухоопорной конструкции для размещения теннисных кортов" по адресу: Минская обл., Минский р-н, аг. Ждановичи-1, включая электромонтажные работы`,
        },
      ],
      heading: "Полный комплекс работ по благоустройству:",
      lists: [
        "Исправление существующего профиля",
        "Устройство основания из щебня",
        "Устройство саортиврого покрытия из теннесита",
      ],
      headingStyle: {
        marginBottom: "33px",
      },
      arrayStyle: {
        marginBottom: "130px",
      },
    };
  }, []);

  const azs80: ObjectDescriptionModel = useMemo(() => {
    return {
      location: "Реконструкция АЗС № 80",
      year: "30.11.2021 г.",
      sqrt: "1300",
      images: [
        {
          id: "AZS80-1",
          src: "https://yaramark.by/img/AZS80-1.jpg",
          alt: `«Реконструкция АЗС № 80»`,
        },
        {
          id: "AZS80-2",
          src: "https://yaramark.by/img/AZS80-2.jpg",
          alt: `«Реконструкция АЗС № 80»`,
        },
        {
          id: "AZS80-3",
          src: "https://yaramark.by/img/AZS80-3.jpg",
          alt: `«Реконструкция АЗС № 80»`,
        },
        {
          id: "AZS80-4",
          src: "https://yaramark.by/img/AZS80-4.jpg",
          alt: `«Реконструкция АЗС № 80»`,
        },
        {
          id: "AZS80-5",
          src: "https://yaramark.by/img/AZS80-5.jpg",
          alt: `«Реконструкция АЗС № 80»`,
        },
        {
          id: "AZS80-6",
          src: "https://yaramark.by/img/AZS80-6.jpg",
          alt: `«Реконструкция АЗС № 80»`,
        },
      ],
      heading: "Полный комплекс работ по благоустройству:",
      lists: [
        "Устройство борта тротуарного и дорожного",
        "Устройство плиточного основания",
        "Устройство бетонных оснований",
      ],
      headingStyle: {
        marginBottom: "33px",
      },
      arrayStyle: {
        marginBottom: "130px",
      },
    };
  }, []);

  const azs64: ObjectDescriptionModel = useMemo(() => {
    return {
      location:
        "«Строительство автозаправочной станции в г. Минске по ул. Запорожская - ул. Передовая» работы по благоустройству территории",
      year: "24.08.2020 г.",
      sqrt: "6 700",
      images: [
        {
          id: "AZS64-1",
          src: "https://yaramark.by/img/AZS64-1.jpg",
          alt: `Строительство автозаправочной станции №64 в г. Минске`,
        },
        {
          id: "AZS64-2",
          src: "https://yaramark.by/img/AZS64-2.jpg",
          alt: `Строительство автозаправочной станции №64 в г. Минске`,
        },
        {
          id: "AZS64-3",
          src: "https://yaramark.by/img/AZS64-3.jpg",
          alt: `Строительство автозаправочной станции №64 в г. Минске`,
        },
        {
          id: "AZS64-4",
          src: "https://yaramark.by/img/AZS64-4.jpg",
          alt: `Строительство автозаправочной станции №64 в г. Минске`,
        },
        {
          id: "AZS64-5",
          src: "https://yaramark.by/img/AZS64-5.jpg",
          alt: `Строительство автозаправочной станции №64 в г. Минске`,
        },
        {
          id: "AZS64-6",
          src: "https://yaramark.by/img/AZS64-6.jpg",
          alt: `Строительство автозаправочной станции №64 в г. Минске`,
        },
        {
          id: "AZS64-7",
          src: "https://yaramark.by/img/AZS64-7.jpg",
          alt: `Строительство автозаправочной станции №64 в г. Минске`,
        },
        {
          id: "AZS64-8",
          src: "https://yaramark.by/img/AZS64-8.jpg",
          alt: `Строительство автозаправочной станции №64 в г. Минске`,
        },
        {
          id: "AZS64-9",
          src: "https://yaramark.by/img/AZS64-9.jpg",
          alt: `Строительство автозаправочной станции №64 в г. Минске`,
        },
        {
          id: "AZS64-10",
          src: "https://yaramark.by/img/AZS64-10.jpg",
          alt: `Строительство автозаправочной станции №64 в г. Минске`,
        },
        {
          id: "AZS64-11",
          src: "https://yaramark.by/img/AZS64-11.jpg",
          alt: `Строительство автозаправочной станции №64 в г. Минске`,
        },
        {
          id: "AZS64-12",
          src: "https://yaramark.by/img/AZS64-12.jpg",
          alt: `Строительство автозаправочной станции №64 в г. Минске`,
        },
        {
          id: "AZS64-13",
          src: "https://yaramark.by/img/AZS64-13.jpg",
          alt: `Строительство автозаправочной станции №64 в г. Минске`,
        },
      ],
      heading: "Полный комплекс работ по благоустройству:",
      lists: [
        "Устройство борта тротуарного и дорожного",
        "Устройство плиточного основания",
        "Разработка грунта",
        "Вертикальная планировка",
        "Устройство основания под устройство асфальтобетонного покрытия",
      ],
      headingStyle: {
        marginBottom: "33px",
      },
      arrayStyle: {
        marginBottom: "130px",
      },
    };
  }, []);

  const azs46: ObjectDescriptionModel = useMemo(() => {
    return {
      location: "На территории «Национального аэропорта Минск»",
      year: "06.08.2021 г.",
      sqrt: "9000",
      images: [
        {
          id: "AZS46-1",
          src: "https://yaramark.by/img/AZS46-1.jpg",
          alt: `Реконструкция АЗС № 46 на территории «Национального аэропорта Минск»`,
        },
        {
          id: "AZS46-2",
          src: "https://yaramark.by/img/AZS46-2.jpg",
          alt: `Реконструкция АЗС № 46 на территории «Национального аэропорта Минск»`,
        },
        {
          id: "AZS46-3",
          src: "https://yaramark.by/img/AZS46-3.jpg",
          alt: `Реконструкция АЗС № 46 на территории «Национального аэропорта Минск»`,
        },
        {
          id: "AZS46-4",
          src: "https://yaramark.by/img/AZS46-4.jpg",
          alt: `Реконструкция АЗС № 46 на территории «Национального аэропорта Минск»`,
        },
        {
          id: "AZS46-5",
          src: "https://yaramark.by/img/AZS46-5.jpg",
          alt: `Реконструкция АЗС № 46 на территории «Национального аэропорта Минск»`,
        },
        {
          id: "AZS46-6",
          src: "https://yaramark.by/img/AZS46-6.jpg",
          alt: `Реконструкция АЗС № 46 на территории «Национального аэропорта Минск»`,
        },
        {
          id: "AZS46-7",
          src: "https://yaramark.by/img/AZS46-7.jpg",
          alt: `Реконструкция АЗС № 46 на территории «Национального аэропорта Минск»`,
        },
        {
          id: "AZS46-8",
          src: "https://yaramark.by/img/AZS46-8.jpg",
          alt: `Реконструкция АЗС № 46 на территории «Национального аэропорта Минск»`,
        },
        {
          id: "AZS46-9",
          src: "https://yaramark.by/img/AZS46-9.jpg",
          alt: `Реконструкция АЗС № 46 на территории «Национального аэропорта Минск»`,
        },
        {
          id: "AZS46-10",
          src: "https://yaramark.by/img/AZS46-10.jpg",
          alt: `Реконструкция АЗС № 46 на территории «Национального аэропорта Минск»`,
        },
        {
          id: "AZS46-11",
          src: "https://yaramark.by/img/AZS46-11.jpg",
          alt: `Реконструкция АЗС № 46 на территории «Национального аэропорта Минск»`,
        },
        {
          id: "AZS46-12",
          src: "https://yaramark.by/img/AZS46-12.jpg",
          alt: `Реконструкция АЗС № 46 на территории «Национального аэропорта Минск»`,
        },
        {
          id: "AZS46-13",
          src: "https://yaramark.by/img/AZS46-13.jpg",
          alt: `Реконструкция АЗС № 46 на территории «Национального аэропорта Минск»`,
        },
        {
          id: "AZS46-14",
          src: "https://yaramark.by/img/AZS46-14.jpg",
          alt: `Реконструкция АЗС № 46 на территории «Национального аэропорта Минск»`,
        },
        {
          id: "AZS46-15",
          src: "https://yaramark.by/img/AZS46-15.jpg",
          alt: `Реконструкция АЗС № 46 на территории «Национального аэропорта Минск»`,
        },
        {
          id: "AZS46-16",
          src: "https://yaramark.by/img/AZS46-16.jpg",
          alt: `Реконструкция АЗС № 46 на территории «Национального аэропорта Минск»`,
        },
        {
          id: "AZS46-17",
          src: "https://yaramark.by/img/AZS46-17.jpg",
          alt: `Реконструкция АЗС № 46 на территории «Национального аэропорта Минск»`,
        },
        {
          id: "AZS46-18",
          src: "https://yaramark.by/img/AZS46-18.jpg",
          alt: `Реконструкция АЗС № 46 на территории «Национального аэропорта Минск»`,
        },
        {
          id: "AZS46-19",
          src: "https://yaramark.by/img/AZS46-19.jpg",
          alt: `Реконструкция АЗС № 46 на территории «Национального аэропорта Минск»`,
        },
        {
          id: "AZS46-20",
          src: "https://yaramark.by/img/AZS46-20.jpg",
          alt: `Реконструкция АЗС № 46 на территории «Национального аэропорта Минск»`,
        },
        {
          id: "AZS46-21",
          src: "https://yaramark.by/img/AZS46-21.jpg",
          alt: `Реконструкция АЗС № 46 на территории «Национального аэропорта Минск»`,
        },
      ],
      heading: "Полный комплекс работ по благоустройству:",
      lists: [
        "Устройство борта тротуарного и дорожного",
        "Устройство плиточного основания",
        "Разработка грунта",
        "Вертикальная планировка",
        "Устройство основания под устройство асфальтобетонного покрытия",
        "Устройство асфальтобетонного покрытия",
      ],
      headingStyle: {
        marginBottom: "33px",
      },
      arrayStyle: {
        marginBottom: "130px",
      },
    };
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header isMobile={isMobile} getIsMobile={getIsMobile} />

      <Navigation isMobile={isMobile} onClose={onCloseMobileMenu} />
      <main className="main">
        {path === 'azs-46' && <ObjectPage pageDescription={azs46}/>}
        {path === 'azs-64' && <ObjectPage pageDescription={azs64}/>}
        {path === 'azs-80' && <ObjectPage pageDescription={azs80}/>}
        {path === 'minsk-united-sports-club' && <ObjectPage pageDescription={courts}/>}
        {path === 'florence-company' && <ObjectPage pageDescription={markup}/>}
        {path === 'stroytekhnorm' && <ObjectPage pageDescription={minina}/>}
        {path === 'sanvest' && <ObjectPage pageDescription={ruxtex}/>}
        {path === 'socio-pedagogical-center' && <ObjectPage pageDescription={shelter}/>}
        {path === 'great-stone' && <ObjectPage pageDescription={stone}/>}
        {path === 'stroytrest-1' && <ObjectPage pageDescription={svisloch}/>}
        {path === 'industrial-park-property-management-company' && <ObjectPage pageDescription={uprooting}/>}
        {path === 'parish-of-the-church-of-the-intercession-of-the-most-holy-theotokos' && <ObjectPage pageDescription={vileyka} />}
      </main>

      <Footer />
    </>
  );
}