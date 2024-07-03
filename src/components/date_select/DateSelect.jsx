import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendar } from "react-icons/fa";
import { registerLocale } from "react-datepicker";
import { ptBR } from "date-fns/locale"
import styles from "./DateSelect.module.css";

registerLocale("ptBR", ptBR);

const DateSelect = ({ date, setDate }) => {
  return (
    <DatePicker
      className={styles.date}
      showIcon
      selected={date.value}
      onChange={(e) => setDate({ ...date, value: e })}
      dateFormat="dd/MM/yyyy"
      locale="ptBR"
      icon={<FaCalendar className={styles.icon} />}
    />
  );
}
export default DateSelect;