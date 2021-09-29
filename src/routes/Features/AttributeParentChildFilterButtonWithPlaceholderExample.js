// (C) 2007-2020 GoodData Corporation
import React from "react";
import { newComposedPlaceholder, newPlaceholder, PlaceholdersProvider } from "@gooddata/sdk-ui";
import { AttributeFilterButton } from "@gooddata/sdk-ui-filters";
import { BarChart } from "@gooddata/sdk-ui-charts";
import { attributeDisplayFormRef, idRef, newNegativeAttributeFilter } from "@gooddata/sdk-model";
import { Ldm, LdmExt } from "../../md";

const stateFilterPlaceholder = newPlaceholder(
    newNegativeAttributeFilter(attributeDisplayFormRef(Ldm.LocationState), {
        uris: [],
    }),
);

const cityFilterPlaceholder = newPlaceholder(
    newNegativeAttributeFilter(attributeDisplayFormRef(Ldm.LocationCity), {
        uris: [],
    }),
);

const composedLocationFilterPlaceholder = newComposedPlaceholder([
    stateFilterPlaceholder,
    cityFilterPlaceholder,
]);

const AttributeParentChildFilterButtonWithPlaceholder = () => {
    const onError = (...params) => {
        // eslint-disable-next-line no-console
        console.info("AttributeFilterExample error", ...params);
    };

    const onLoadingChanged = (...params) => {
        // eslint-disable-next-line no-console
        console.info("AttributeFilterExample onLoadingChanged", ...params);
    };

    return (
        <div className="s-attribute-filter">
            <div style={{ display: "flex" }}>
                <AttributeFilterButton connectToPlaceholder={stateFilterPlaceholder} onError={onError} />
                <AttributeFilterButton
                    parentFilters={[stateFilterPlaceholder]}
                    parentFilterOverAttribute={idRef(LdmExt.locationIdAttributeIdentifier)}
                    connectToPlaceholder={cityFilterPlaceholder}
                />
            </div>
            <div style={{ height: 300 }} className="s-line-chart">
                <BarChart
                    measures={[LdmExt.TotalSales2]}
                    viewBy={Ldm.LocationCity}
                    filters={[composedLocationFilterPlaceholder]}
                    onLoadingChanged={onLoadingChanged}
                    onError={onError}
                />
            </div>
        </div>
    );
};

export const AttributeParentChildFilterButtonWithPlaceholderExample = () => {
    return (
        <PlaceholdersProvider>
            <AttributeParentChildFilterButtonWithPlaceholder />
        </PlaceholdersProvider>
    );
};