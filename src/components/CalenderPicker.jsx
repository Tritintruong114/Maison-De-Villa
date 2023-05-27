import { DatePicker } from "antd";
import "antd/dist/reset.css";
import { useState } from "react";
import moment from "moment";
const { RangePicker } = DatePicker;
const CalenderPicker = () => {
  const [dates, setDates] = useState([]);
  console.log(dates);
  return (
    <div>
      <RangePicker
        onChange={(values) => {
          setDates(
            values.map((item) => {
              return moment(item).format("DD-MM-YYYY");
            })
          );
        }}
      />
    </div>
  );
};

export default CalenderPicker;
