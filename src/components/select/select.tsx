import './select.scss';
import React, {ChangeEvent} from 'react';

type SelectProps = {
  setTasksPerPageCount: (count: number) => void;
}

function Select({setTasksPerPageCount}: SelectProps):JSX.Element {
  const onSelectChange = (evt: ChangeEvent<HTMLSelectElement>) => {
    setTasksPerPageCount(Number(evt.currentTarget.value));
  }

  return (
    <div className="select">
      <label className="select__label color-grey" htmlFor="tasks">по</label>
      <div className="select__wrap">
        <select className="select__select" name="tasks" id="tasks" onChange={onSelectChange}>
          <option className="select__option" value="5">5</option>
          <option className="select__option" value="10">10</option>
          <option className="select__option" value="15">15</option>
          <option className="select__option" value="25">25</option>
          <option className="select__option" value="50">50</option>
        </select>
      </div>
      <span className="select__label color-grey">записей</span>
    </div>
  )
}
export default Select;
