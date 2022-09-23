import dayjs from "dayjs";

export type ChartDataset = { x: dayjs.Dayjs, y: number};

export type GuildMemberCountChart = {
    link?: string;
    fileName?: string;
    imgPath?: string;
    thirtyDaysCount?: number;
    sevedDaysCount?: number;
    oneDayCount?: number;
    lookback?: number;
    error?: string;
};

export interface Event<K extends keyof ClientEvents> {
    name: K;
    once?: boolean;
    execute: (...args: ClientEvents[K]) => Awaitable<void>;
}

