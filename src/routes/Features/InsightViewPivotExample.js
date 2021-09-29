// (C) 2007-2019 GoodData Corporation
import React from "react";
import { InsightView } from "@gooddata/sdk-ui-ext";

import * as Ldm  from  "../../md/full";

const style = { height: 300 };


export const InsightViewPivotExample = () => {
    return (
        <div style={style} className="s-insightView-chart">
            <InsightView insight={Ldm.Insights.BarChart} />
        </div>
    );
};