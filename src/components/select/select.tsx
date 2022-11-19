import './select.scss';
import React, {ChangeEvent} from 'react';

type SelectProps = {
  setTasksAmount: (count: number) => void;
}

function Select({setTasksAmount}: SelectProps):JSX.Element {
  const onSelectChange = (evt: ChangeEvent<HTMLSelectElement>) => {
    setTasksAmount(Number(evt.currentTarget.value));
  }

  return (
    <div className="select">
      <label className="select__label color-grey" htmlFor="tasks">по</label>
      <select className="select__select" name="tasks" id="tasks" onChange={onSelectChange}>
        <option className="select__option" value="5">5</option>
        <option className="select__option" value="10">10</option>
        <option className="select__option" value="15">15</option>
        <option className="select__option" value="25">25</option>
        <option className="select__option" value="50">50</option>
      </select>
    </div>
  )
}
export default Select;
