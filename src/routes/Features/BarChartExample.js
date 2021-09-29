// (C) 2007-2019 GoodData Corporation
import React from "react";
import { BarChart } from "@gooddata/sdk-ui-charts";
import { Ldm, LdmExt } from "../../md";
import { modifyMeasure } from "@gooddata/sdk-model";

const style = { height: 300 };

 const TotalSales1 = modifyMeasure(Ldm.$TotalSales, (m) => m.format("#,##0").alias("$ Total Sales"));


export const BarChartExample = () => {
    return (
        <div style={style} className="s-bar-chart">
            <BarChart measures={[TotalSales1]} 
            // viewBy={Ldm.LocationResort} 
            />
        </div>
    );
};