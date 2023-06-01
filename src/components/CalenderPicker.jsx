import { DatePicker } from "antd";
import "antd/dist/reset.css";
import { useEffect, useState } from "react";
import moment from "moment/moment";
import { useDispatch } from "react-redux";
import { caculateDays } from "../features/dayRange/dayRangeSlice";

const { RangePicker } = DatePicker;
const CalenderPicker = () => {
  // const { days } = useSelector((store) => store.dayRange);
  const dispatch = useDispatch();

  const [dates, setDates] = useState([]);
  let startDate = moment(dates[0], "MM-DD-YYYY");
  let endDate = moment(dates[1], "MM-DD-YYYY");

  //Caculate days range
  let noDays = [];
  while (startDate.isSameOrBefore(endDate)) {
    noDays.push(startDate.clone().format("DD/MM/YYYY"));
    startDate.add(1, "days");
  }
  const numberOfDays = noDays.length;
  // console.log(numberOfDays);//output : days range from Reduxstore

  //useEffect for every change when user pick
  useEffect(() => {
    dispatch(caculateDays(numberOfDays));
  }, [numberOfDays, dispatch]);

  return (
    <div className="w-full flex justify-center items-center">
      <RangePicker
        className=" w-full text-3xl"
        onChange={(values) => {
          setDates(
            values?.map((item) => {
              return item.format("MM-DD-YYYY");
            })
          );
        }}
      />
    </div>
  );
};

export default CalenderPicker;
