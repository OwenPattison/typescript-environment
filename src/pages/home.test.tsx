import React from "react";
import { shallow } from "enzyme";

import { Home } from "./home";

describe("Home", () => {
    it("Renders title", () => {
        const wrapper = shallow(<Home />);
        const header = wrapper.find("h1").text();

        expect(header).toBe("typescript environment");
    });
});
