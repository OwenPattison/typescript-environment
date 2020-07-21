import React from "react";
import { shallow } from "enzyme";

import { Header } from "./header";

describe("Header", () => {
    it("Renders header wrapper", () => {
        const wrapper = shallow(<Header />);
        const headerWrapper = wrapper.find("div").prop("className");

        expect(headerWrapper).toBe("header");
    });
});
