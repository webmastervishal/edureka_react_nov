import { shallow } from "enzyme";
import Counter from "./../pages/Counter";

describe("Counter component", () => {
  test("Initial value of counter is 0", () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper.find("#counter").text()).toBe("Count: 0");
  });

  test("Increment button", () => {
    const wrapper = shallow(<Counter />);
    wrapper.find("#increment").simulate("click");
    expect(wrapper.find("#counter").text()).toBe("Count: 1");
  });
});
