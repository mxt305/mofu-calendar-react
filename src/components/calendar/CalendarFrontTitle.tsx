import { BaseCalenderConponentProps } from "./BaseCalenderConponentProps";
import { japanMonthName } from "./commonValue";
import { GiFox, GiFoxTail, GiJasmine } from "react-icons/gi";
//import FoxStamp from "./svg/FoxStamp";
//import JinjaStamp from "./svg/JinjaStamp";

function CalendarFrontTitle({ date }: BaseCalenderConponentProps) {
    const isFullmonth = date.daysInMonth() === 31;
    const monthName = date.locale("zh-TW").format("MMMM");
    return (
        <div className="d-flex align-items-end justify-content-center">
            <div className="calendar-front-title-main position-relative">
                <div className="position-relative" style={{ zIndex: 100 }}>
                    {monthName}
                </div>
                <div
                    className="position-absolute"
                    style={{ top: 64 / 2 - 40 + "pt", left: (monthName.length * 64) / 2 - 40 + "pt", zIndex: 0 }}
                >
                    {isFullmonth ? (
                        <GiFox fill="#eccbb5" className="calendar-front-stamp" />
                    ) : (
                        <GiJasmine fill="#eccbb5" className="calendar-front-stamp" />
                    )}
                </div>
            </div>
            <div className="mb-2">
                <span className="calendar-front-title-sub border border-danger rounded text-danger">
                    {japanMonthName[date.month()]}
                </span>
            </div>
        </div>
    );
}

export default CalendarFrontTitle;
