import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss";

export default function DayListItem(props) {
   const dayClass = classNames('day-list__item', {
    'day-list__item--selected': props.selected,
    'day-list__item--full': props.spots===0
   })

  return (
    <li className={dayClass} onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{props.spots} spots remaining</h3>
    </li>
  );
}


// The <li> represents the entire day item
// The <h2> should display the day name
// The <h3> should display the spots remaining for a day
// when spots === 0 apply the .day-list__item--full styles
// day-list__item all the time
// day-list__item--selected class name if props.selected is true
// day-list__item--full class name if props.spots is 0.