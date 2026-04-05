import React from 'react';
import { mount } from 'enzyme';
import OfficialSiteBanner from './OfficialSiteBanner';
import { FlexContainer, FlexRow, FlexCol } from '../FlexGrid';

describe('OfficialSiteBanner', () => {
  let props;
  let mountedOfficialSiteBanner;

  const wrapper = () => {
    if (!mountedOfficialSiteBanner) {
      mountedOfficialSiteBanner = mount(
        <OfficialSiteBanner {...props} />
      );
    }
    return mountedOfficialSiteBanner;
  };

  beforeEach(() => {
    props = {
      fluid: undefined,
    };
    mountedOfficialSiteBanner = undefined;
  });

  it("renders a header", () => {
      const header = wrapper().render().length;
      expect(wrapper().render().length).toBeGreaterThan(0);
    });

  it("renders a `FlexContainer`", () => {
    expect(wrapper().contains(FlexContainer)).toBe(true);
  });

  describe("the rendered FlexContainer", () => {
    beforeEach(() => {
      props.fluid = true;
    });

    it("is passed the fluid prop", () => {
      expect(wrapper().prop('fluid')).toBe(true);
    });
  });

});
