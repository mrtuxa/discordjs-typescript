export type ChartDataset = { x: dayjs.Dayjs; y: number };

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
