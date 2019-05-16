import Card from "../Card";

describe("Card", () => {
  it("renders correctly", () => {
    const wrapper = mount(<Card xl />);
    const value = wrapper.find("div");
    expect(value).toHaveStyleRule("flex-direction", "column");
  });
});
