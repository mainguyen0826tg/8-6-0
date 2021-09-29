import React from "react";
import Page from "../components/Page";
import AttributeFilterButtonExample from "./Features/AttributeFilterButtonExample";
// import AttributeFilterComponentExample from "./Features/AttributeFilterComponentExample";
import AttributeFilterExample, { AttributeFilterComponentExample } from "./Features/AttributeFilterComponentExample";
import { AttributeParentChildFilterButtonWithPlaceholderExample } from "./Features/AttributeParentChildFilterButtonWithPlaceholderExample";
import { BarChartExample } from "./Features/BarChartExample";
import { InsightViewPivotExample } from "./Features/InsightViewPivotExample";


// import DashboardViewWithAdvancedCustomizations from "./Features/DashboardViewWithAdvancedCustomizations";
// import { DashboardViewWithAdvancedCustomizations } from "./Features/DashboardViewWithAdvancedCustomizations";

const Home = () => {
    return (
        <Page>
            <h2>InsightView</h2>  
            {/* <div>
                <h3>Pivot Table Example</h3>
                <InsightViewPivotExample />
                <hr />
            </div> */}
           
            <div>
                <h3>AttributeParentChildFilterExample</h3> 
                <AttributeParentChildFilterButtonWithPlaceholderExample />
            </div>
            {/* <div>
                <h3>AttributeFilterComponentExample</h3>
                <AttributeFilterComponentExample />
                <hr />
            </div>
          
            <div>
                <h3>AttributeFilterButtonExample</h3>
                <AttributeFilterButtonExample />
                <hr />
            </div> */}
            
            {/* <div>
                <h3>RankingFilterExample</h3>
                <RankingFilterExample />
                <hr />
            </div> */}
            {/* <div>
                <h3>MultipleFilter</h3>
                <MultipleFilter />
                <hr />
            </div> */}
            {/* <div>
                <h3>AttributeFilterExample</h3>
                <AttributeFilterExample />
                <hr /> 
            </div> */}

            {/* <div>
                <h3>DashboardView</h3>
                <SimpleDashboardView1 />
                <hr />
            </div> */}

            {/* <div>
                <h3>DashboardView</h3>
                <SimpleDashboardView />
                <hr />
            </div> */}
            {/* <div>
                <h3>DashboardView3</h3>
                <SimpleDashboardView2 />
                <hr />
            </div> */}

            {/* <div>
                <h3>Drillingdancing</h3>
                <Drillingdancing />
                <hr />
            </div> */}
            <div>
                {/* <h3>DashboardViewWithAdvancedCustomizations</h3> */}
                {/* <DashboardViewWithAdvancedCustomizations /> */}
                <hr />
            </div>
        </Page>
    );
};

export default Home;
