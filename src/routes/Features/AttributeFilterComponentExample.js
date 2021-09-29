// (C) 2007-2020 GoodData Corporation
import React, { Component } from "react";
import { AttributeFilter } from "@gooddata/sdk-ui-filters";
import { idRef, newPositiveAttributeFilter, newNegativeAttributeFilter, uriRef } from "@gooddata/sdk-model";
import { Ldm, LdmExt } from "../../md";

export class AttributeFilterComponentExample extends Component {
    onApply = (...params) => {
        // eslint-disable-next-line no-console
        console.log("AttributeFilterComponentExample onApply", ...params);
    };

    render() {
        return (
            <div>
                <div>attribute defined by identifier</div>
                <AttributeFilter
                    filter={newPositiveAttributeFilter(idRef(LdmExt.EmployeeNameIdentifier), [])}
                    fullscreenOnMobile={false}
                    onApply={this.onApply}
                />

                <br />
                <div>attribute defined by display form uri</div>
                <AttributeFilter
                    filter={newNegativeAttributeFilter(uriRef(LdmExt.employeeNameDisplayFormUri), [])}
                    onApply={this.onApply}
                />

                <br />
                <div>attribute defined by filter definition, including selection</div>
                <AttributeFilter
                    filter={newPositiveAttributeFilter(Ldm.EmployeeName.Default, ["Abbie Adams"])}
                    onApply={this.onApply}
                />
            </div>
        );
    }
}

export default AttributeFilterComponentExample;