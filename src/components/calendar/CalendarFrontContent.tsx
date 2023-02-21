import { Table } from "react-bootstrap";
import { BaseCalenderConponentProps } from "./BaseCalenderConponentProps";
import CalendarFrontDayCell from "./CalendarFrontDayCell";
import { weekdayJA, weekdayTW } from "./commonValue";

function CalendarFrontContent({ date }: BaseCalenderConponentProps) {
    const renderThead = () => {
        return Array(7)
            .fill(null)
            .map((_, i) => (
                <th key={i} className="text-center calendar-front-week">
                    {weekdayTW[i]}/{weekdayJA[i]}
                </th>
            ));
    };
    const renderDates = () => {
        const startDate = date.startOf("week");
        return Array(5)
            .fill(null)
            .map((_, i) => {
                const weekStartDate = startDate.add(i * 7, "days");
                return (
                    <tr key={i}>
                        {Array(7)
                            .fill(null)
                            .map((_, j) => {
                                const currentDate = weekStartDate.add(j, "days");
                                const hasOverflowDate = i === 4 && currentDate.add(1, "week").month() === date.month();
                                return (
                                    <td className="calendar-front-date-cell " key={j}>
                                        <div className="position-relative">
                                            <CalendarFrontDayCell date={date} currentDate={currentDate} />
                                            {hasOverflowDate && (
                                                <div className="position-relative calendar-front-date-overflow border-top mt-4">
                                                    <CalendarFrontDayCell
                                                        date={date}
                                                        currentDate={currentDate.add(1, "week")}
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </td>
                                );
                            })}
                    </tr>
                );
            });
    };
    return (
        <div>
            <Table bordered>
                <thead>
                    <tr>{renderThead()}</tr>
                </thead>
                <tbody>{renderDates()}</tbody>
            </Table>
        </div>
    );
}

export default CalendarFrontContent;
