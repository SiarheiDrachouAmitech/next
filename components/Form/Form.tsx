export default function Form(props: any): JSX.Element {
    const isPhoneNumber = false,
    isBlurPhoneNumber = false,
    isName = false,
    isBlurName = false,
    isSuccess: 'loading' | 'success' | 'error' = 'loading',
    isDisabled = false;

    return (
        <form className="form">
        <fieldset >
            <legend>Номер телефона</legend>
        </fieldset>

        {!isPhoneNumber && !isBlurPhoneNumber && <p className="error-message">Некорректный мобильный номер!</p>}

        <fieldset >
            <legend>Имя</legend>
            <input placeholder="Введите имя" type="text" />
        </fieldset>

        {!isName && !isBlurName && <p className="error-message">Введите имя!</p>}

        <fieldset>
            <legend>Коментарий</legend>
            <textarea cols="30" rows="5" placeholder="Напишите тут"></textarea>
        </fieldset>

        <fieldset className="form-timerange">
            <legend>Желаемое время для звонка</legend>

            <div className="form-timerange-container div-select">
                <div className="div-select">
                    <span>c</span>
                    <select defaultValue={'8:00'}>
                        <option value="8:00" >8:00</option>
                        <option value="9:00">9:00</option>
                        <option value="10:00">10:00</option>
                        <option value="11:00">11:00</option>
                        <option value="12:00">12:00</option>
                        <option value="13:00">13:00</option>
                        <option value="14:00">14:00</option>
                        <option value="15:00">15:00</option>
                        <option value="16:00">16:00</option>
                        <option value="17:00">17:00</option>
                    </select>
                </div>

                <div className="div-select">
                    <span>до</span>
                    <select defaultValue={'9:00'}>
                        <option value="9:00" >9:00</option>
                        <option value="10:00">10:00</option>
                        <option value="11:00">11:00</option>
                        <option value="12:00">12:00</option>
                        <option value="13:00">13:00</option>
                        <option value="14:00">14:00</option>
                        <option value="15:00">15:00</option>
                        <option value="16:00">16:00</option>
                        <option value="17:00">17:00</option>
                        <option value="18:00">18:00</option>
                    </select>
                </div>
            </div>
        </fieldset>

        {isSuccess === 'success' && <p className="success-message">
            Заявка успешно отправлена!
        </p>}

        {isSuccess === 'error' && <p className="success-message">
            Ошибка! Попробуйте ещё раз.
        </p>}

        <button type="button"  disabled={isDisabled}>Отправить</button>
    </form>
    )
}