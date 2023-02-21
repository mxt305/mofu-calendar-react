import { BaseCalenderConponentProps } from "./BaseCalenderConponentProps";

function CalendarFrontYear({ date }: BaseCalenderConponentProps) {
    const year = date.year();
    return (
        <div className="text-end">
            <span className="calendar-front-year me-2">{year}</span>
            <span className="calendar-front-year-sub">
                令和{year - 2018}年/民國{year - 1911}年
            </span>
        </div>
    );
}

export default CalendarFrontYear;
