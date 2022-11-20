import { render, shallow } from "enzyme";
import Login from "../pages/Login";
import renderer from "react-test-renderer";

describe("Login component", () => {
  test("Number of input boxes to be 3", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("input").length).toBe(3);
  });

  test("Input should be empty", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("input[name='email']").props().value).toBe("");
  });

  test("snapshot matching", () => {
    const tree = renderer.create(<Login />);
    expect(tree).toMatchSnapshot();
  });
});
