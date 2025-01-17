import React, { useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";

import { getShiftList } from "../../../services/shiftServices";
import { insertAssign } from "../../../services/calendarService";
import { AssignShiftContext } from "../../Context/AssignShiftContext";
import { useDrop } from "react-dnd";
import { Day } from "./Day";
import "./Calendar.css";

import { Shift } from "./Shift";

// const days = [
//   {
//     Name: "Sunday",
//     Day: "",
//     Shifts: [],
//   },
//   {
//     Name: "Monday",
//     Day: "",
//     Shifts: [],
//   },
//   {
//     Name: "Tuesday",
//     Day: "",
//     Shifts: [],
//   },
//   {
//     Name: "Wednesday",
//     Day: "",
//     Shifts: [],
//   },
//   {
//     Name: "Thursday",
//     Day: "",
//     Shifts: [],
//   },
//   {
//     Name: "Friday",
//     Day: "",
//     Shifts: [],
//   },
//   {
//     Name: "Saturday",
//     Day: "",
//     Shifts: [],
//   },
// ];

// const getNextWeekDays = () => {
//   const today = moment();
//   const nextWeek = today.clone().add(1, "weeks");

//   for (let i = 0; i < 7; i++) {
//     const day = nextWeek.clone().add(i, "days");
//     days[i].Day = day.format("YYYY-MM-DD");
//   }
// };

export const Calendar = () => {
  const [shifts, setShifts] = useState([]);
  const [countShift, setCountShift] = useState(0);
  const [loading, setLoading] = useState(true);

  const incCount = () => setCountShift(countShift + 1);
  const decCount = () => setCountShift(countShift - 1);

  const { days, assignmentDetails } = useContext(AssignShiftContext);

  const handleSaveAssignment = async () => {
    //insert assign to DB
    const result = await insertAssign(assignmentDetails);
    if (result && result.EC != -1) {
      toast.success(result.EM);
    } else if (result && result.EM) {
      toast.error(result.EM);
    } else {
      toast.error(result);
    }
  };

  const init = async () => {
    const data = await getShiftList();
    if (data && data.EC != -1) {
      setShifts(data.DT);
    } else {
      setShifts([]);
    }
  };

  useEffect(() => {
    init();
    setLoading(false);
  }, []);

  return (
    <div>
      <div className=" position-relative">
        {/* <div ref={dropToRemove} className={isOver2 ? "trash drop" : "trash"}>
          <span></span>
          <i></i>
        </div> */}
        <div className="shift-wrapper">
          <div className="shift-list">
            {shifts &&
              shifts.map((s, idx) => {
                return <Shift key={idx} shift={s} />;
              })}
          </div>
        </div>
        <div className="calendar-wrapper">
          <div className="calendar-container">
            {days.map((d, idx) => (
              <Day
                key={idx}
                index={idx}
                data={d}
                incCount={incCount}
                decCount={decCount}
                loading={loading}
              />
            ))}
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div>Total shift: {countShift}</div>
            <div>Total hours: {countShift * 4} hours</div>
          </div>
          <div className="col">
            <button
              className="btn btn-clr-primary text-black"
              onClick={handleSaveAssignment}
            >
              Save Assignment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
