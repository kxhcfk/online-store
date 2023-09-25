import {classNames} from "./classNames";

test("string class and null", () => {
    expect(classNames("class", null)).toBe("class");
});