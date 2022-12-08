import { useState } from 'react';
import classes from './Form.module.css';

export default function Form(props: any): JSX.Element {
    let [isPhoneNumber, setIsPhoneNumber] = useState(false);
    let [isBlurPhoneNumber, setIsBlurPhoneNumber] = useState(false);
    let [isName, setIsName] = useState(false);
    let [isBlurName, setIsBlurName] = useState(false);
    let [isSuccess, setIsSuccess] = useState('loading');
    let [isDisabled, setIsDisabled] = useState(false);


    return (
        <form className={classes.form}>
        <fieldset >
            <legend>Номер телефона</legend>
        </fieldset>

        {!isPhoneNumber && !isBlurPhoneNumber && <p className={classes.errorMessage}>Некорректный мобильный номер!</p>}

        <fieldset >
            <legend>Имя</legend>
            <input placeholder="Введите имя" type="text" />
        </fieldset>

        {!isName && !isBlurName && <p className={classes.errorMessage}>Введите имя!</p>}

        <fieldset>
            <legend>Коментарий</legend>
            <textarea placeholder="Напишите тут"></textarea>
        </fieldset>

        <fieldset className={classes.formTimerange}>
            <legend>Желаемое время для звонка</legend>

            <div className={`${classes.formTimerangeContainer} ${classes.divSelect}`}>
                <div className={classes.divSelect}>
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

                <div className={classes.divSelect}>
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

        {isSuccess === 'success' && <p className={classes.successMessage}>
            Заявка успешно отправлена!
        </p>}

        {isSuccess === 'error' && <p className={classes.successMessage}>
            Ошибка! Попробуйте ещё раз.
        </p>}

        <button type="button"  disabled={isDisabled}>Отправить</button>
    </form>
    )
}