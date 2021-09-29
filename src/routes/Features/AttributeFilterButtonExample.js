// (C) 2007-2020 GoodData Corporation
import React, { Component } from "react";

import { LineChart } from "@gooddata/sdk-ui-charts";
import { filterIsEmpty, isPositiveAttributeFilter, newNegativeAttributeFilter } from "@gooddata/sdk-model";
import { Ldm, LdmExt } from "../../md";
import { AttributeFilterButton } from "@gooddata/sdk-ui-filters";

export class AttributeFilterButtonExample extends Component {
    state = {
        filters: [],
        error: undefined,
    };

    onLoadingChanged = (...params) => {
        // eslint-disable-next-line no-console
        console.info("AttributeFilterExample onLoadingChanged", ...params);
    };

    onApply = (filter) => {
        // eslint-disable-next-line no-console
        console.log("AttributeFilterExample onApply", filter);
        this.setState({ filters: [], error: undefined });
        if (isPositiveAttributeFilter(filter)) {
            this.filterPositiveAttribute(filter);
        } else {
            this.filterNegativeAttribute(filter);
        }
    };

    onError = (...params) => {
        // eslint-disable-next-line no-console
        console.info("AttributeFilterExample onLoadingChanged", ...params);
    };

    filterPositiveAttribute(filter) {
        let filters;
        const {
            positiveAttributeFilter: { displayForm },
        } = filter;
        const inElements = filter.positiveAttributeFilter.in;
        const checkLengthOfFilter = !filterIsEmpty(filter);
        if (checkLengthOfFilter) {
            filters = [
                {
                    positiveAttributeFilter: {
                        displayForm,
                        in: inElements,
                    },
                },
            ];
        } else {
            this.setState({
                error: "The filter must have at least one item selected",
            });
        }
        this.setState({ filters });
    }

    filterNegativeAttribute(filter) {
        let filters;
        const {
            negativeAttributeFilter: { notIn, displayForm },
        } = filter;
        const checkLengthOfFilter = !filterIsEmpty(filter);
        if (checkLengthOfFilter) {
            filters = [
                {
                    negativeAttributeFilter: {
                        displayForm,
                        notIn,
                    },
                },
            ];
        }
        this.setState({ filters });
    }

    render() {
        const { filters } = this.state;

        return (
            <div className="s-attribute-filter">
                <AttributeFilterButton
                    filter={newNegativeAttributeFilter(Ldm.LocationResort, [])}
                    onApply={this.onApply}
                    onError={this.onError}
                />

                <div style={{ height: 300 }} className="s-line-chart">
                    <LineChart
                        measures={[LdmExt.TotalSales2]}
                        trendBy={Ldm.LocationResort}
                        filters={filters}
                        onLoadingChanged={this.onLoadingChanged}
                        onError={this.onError}
                    />
                </div>
            </div>
        );
    }
}

export default AttributeFilterButtonExample;