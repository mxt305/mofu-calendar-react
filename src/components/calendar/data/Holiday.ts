type HolidayType = "holiday" | "substitute" | "bridge" | "makeUp";

export interface Holiday {
    date: string;
    name: string;
    type: HolidayType;
}
