import clsx from "clsx";
import dayjs from "dayjs";
import { Lunar } from "lunar-typescript";
import { BaseCalenderConponentProps } from "./BaseCalenderConponentProps";
import jpHolidays from "./data/jpHoliday";
import twHolidays from "./data/twHoliday";
import trans from "./trans";

export type CalendarFrontDayCellProps = BaseCalenderConponentProps & {
    currentDate: dayjs.Dayjs;
};

function CalendarFrontDayCell({ date, currentDate }: CalendarFrontDayCellProps) {
    const isInCurrentMonth = date.month() === currentDate.month();
    const getClassName = () => {
        if (!isInCurrentMonth) {
            return "text-black-50";
        } else if (currentDate.day() === 0) {
            return "text-danger";
        } else if (currentDate.day() === 6) {
            return "text-primary";
        }
        return "";
    };
    const currentLunar = Lunar.fromDate(currentDate.toDate());
    const jq = trans(currentLunar.getJieQi());
    const getLunarText = () => {
        if (currentLunar.getDay() === 1) {
            return `${trans(currentLunar.getMonthInChinese())}月 ${jq}`;
        }
        return `${trans(currentLunar.getDayInChinese())} ${jq}`;
    };
    const rokuyou = trans(currentLunar.getLiuYao());
    const twHolidayData = twHolidays.find((holiday) => holiday.date === currentDate.format("YYYY-MM-DD"));
    const isTwMakeUpDate = twHolidayData && twHolidayData.type === "makeUp";
    const isTwTrueHoliday = twHolidayData && twHolidayData.type !== "makeUp";
    const jpHolidayData = jpHolidays.find((holiday) => holiday.date === currentDate.format("YYYY-MM-DD"));
    console.log(currentDate.format("YYYY-MM-DD"), jq);
    return (
        <div className={getClassName()}>
            <div className="d-flex align-items-center ps-1">
                <div>
                    <span className="calendar-date-number">{currentDate.date()}</span>
                </div>
                <div className="calendar-date-text ms-2">
                    <span
                        className={clsx(
                            "me-2",
                            isTwTrueHoliday && isInCurrentMonth ? "text-danger" : "",
                            isTwMakeUpDate && isInCurrentMonth ? "text-black" : ""
                        )}
                    >
                        {getLunarText()}
                    </span>
                    <br />
                    <span className={jpHolidayData && isInCurrentMonth ? "text-danger" : ""}>{rokuyou}</span>
                </div>
            </div>
            <div className="calendar-date-text" style={{ marginTop: "-5px" }}>
                {twHolidayData && (
                    <>
                        <span
                            className={clsx(
                                "calendar-date-symbol",
                                "mx-1",
                                isTwTrueHoliday && isInCurrentMonth ? "text-danger" : "",
                                isTwMakeUpDate && isInCurrentMonth ? "text-black" : ""
                            )}
                        >
                            {isTwTrueHoliday ? "★" : "☆"}
                        </span>
                        <span
                            className={clsx(
                                isTwTrueHoliday && isInCurrentMonth ? "text-danger" : "",
                                isTwMakeUpDate && isInCurrentMonth ? "text-black" : ""
                            )}
                        >
                            {twHolidayData.name}
                        </span>
                    </>
                )}
                {jpHolidayData && (
                    <>
                        {twHolidayData && <br />}
                        <span className={clsx("calendar-date-symbol", "mx-1", isInCurrentMonth ? "text-danger" : "")}>
                            ●
                        </span>
                        <span className={isInCurrentMonth ? "text-danger" : ""}>{jpHolidayData.name}</span>
                    </>
                )}
            </div>
        </div>
    );
}

export default CalendarFrontDayCell;
