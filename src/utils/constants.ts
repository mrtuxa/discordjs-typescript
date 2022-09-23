import {ChartJSNodeCanvas} from "chartjs-node-canvas";

export const EVERYONE = "@everyone";

export const chartJSNodeCanvas = new ChartJSNodeCanvas({
    width: 1200,
    height: 400,
    backgroundColour: '#2E3036',
    plugins: {
        globalVariableLegacy: ['chartjs-adapter-dayjs-3']
    }
})