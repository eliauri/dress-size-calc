import React, { useEffect } from 'react'
import M from 'materialize-css';

export const SelectComponent = (props) => {
    useEffect(() => {
        var elems = document.querySelectorAll('select');
        var options = document.querySelectorAll('option');
        var instances = M.FormSelect.init(elems, options);
    }, []);

    return (
        <div className='input-field'>
            <select
                value={props.select}
                onChange={(e) => {
                    props.selectChange(e.target);
                }}>
                <option value="male" defaultValue>Мужской</option>
                <option value="female">Женский</option>
            </select>
            <label>Выберите ваш пол</label>
        </div>
    )
}
