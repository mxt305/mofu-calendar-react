import dayjs from "dayjs";
import CalendarFrontContent from "./CalendarFrontContent";
import CalendarFrontLegend from "./CalendarFrontLegend";
import CalendarFrontTitle from "./CalendarFrontTitle";
import CalendarFrontYear from "./CalendarFrontYear";
import Layout from "./Layout";

export interface CalendarFrontProps {
    year: number;
    month: number;
}

function CalendarFront({ year, month }: CalendarFrontProps) {
    const currentDayjs = dayjs(`${year}-${month}-01`);
    return (
        <Layout>
            <div className="d-flex align-items-start">
                <div className="d-flex flex-column calendar-front-left justify-content-center">
                    <CalendarFrontTitle date={currentDayjs} />
                    <div className="calendar-front-image bg-secondary bg-opacity-25">Image Here</div>
                    <div className="calendar-help-text">
                        📷fooさん
                    </div>
                </div>
                <div className="flex-grow-1">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <CalendarFrontLegend />
                        </div>
                        <div>
                            <CalendarFrontYear date={currentDayjs} />
                        </div>
                    </div>
                    <div>
                        <CalendarFrontContent date={currentDayjs} />
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default CalendarFront;
