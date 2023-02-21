import dayjs from "dayjs";
import { useState } from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import CalendarFront from "./calendar/CalendarFront";

function MainPage() {
    const [currentDate, setCurrentDate] = useState(dayjs().date(1));
    const handleGoBack = () => {
        setCurrentDate(currentDate.add(-1, "month"));
    };
    const handleGoNext = () => {
        setCurrentDate(currentDate.add(1, "month"));
    };
    return (
        <div>
            <Navbar bg="light">
                <Container>
                    <div className="d-flex justify-content-between align-items-center w-100">
                        <div>
                            <Button variant="outline-primary" onClick={handleGoBack}>
                                <FaArrowLeft />
                            </Button>
                        </div>
                        <div>
                            <Button variant="outline-primary" onClick={handleGoNext}>
                                <FaArrowRight />
                            </Button>
                        </div>
                    </div>
                </Container>
            </Navbar>
            <div>
                <CalendarFront year={currentDate.year()} month={currentDate.month() + 1} />
            </div>
        </div>
    );
}

export default MainPage;
