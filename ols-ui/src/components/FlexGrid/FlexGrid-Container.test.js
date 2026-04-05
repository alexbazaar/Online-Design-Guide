import React from 'react';
import { shallow } from 'enzyme';
import FlexContainer from './FlexContainer';
import FlexRow from './FlexRow';
import FlexCol from './FlexCol';

describe('FlexContainer', () => {
  const wrapper = shallow(
    <FlexContainer>
      <FlexRow>
        <FlexCol lg="4" md="6" sm="6">
          Foo
        </FlexCol>
        <FlexCol>
          Bar
        </FlexCol>
      </FlexRow>
    </FlexContainer>
  );

  it('is defined', () => {
    expect(wrapper).toBeDefined();
  });

  it('is a div with correct class', () => {
    expect(wrapper.is('div')).toBeTruthy();
    expect(wrapper.hasClass('container-fluid')).toBe(false);
    expect(wrapper.hasClass('container')).toBe(true);
  });

  it('accepts the fluid paramater', () => {
    const fluidWrapper = shallow(
      <FlexContainer fluid>
        <FlexRow>
          <FlexCol lg="4" md="6" sm="6">
            Foo
          </FlexCol>
          <FlexCol>
            Bear
          </FlexCol>
        </FlexRow>
      </FlexContainer>
    );

    expect(fluidWrapper.hasClass('container-fluid')).toBe(true);
    expect(fluidWrapper.hasClass('container')).toBe(false);
  });

  it('accepts a role prop', () => {
    const roleWrapper = shallow(
      <FlexContainer role="banner">
        <FlexRow>
          <FlexCol lg="4" md="6" sm="6">
            Foo
          </FlexCol>
          <FlexCol>
            Bear
          </FlexCol>
        </FlexRow>
      </FlexContainer>
    );

    expect(roleWrapper.props().role).toBe('banner');
  });

  it('accepts an id prop', () => {
    const roleWrapper = shallow(
      <FlexContainer id="banner">
        <FlexRow>
          <FlexCol lg="4" md="6" sm="6">
            Foo
          </FlexCol>
          <FlexCol>
            Bear
          </FlexCol>
        </FlexRow>
      </FlexContainer>
    );

    expect(roleWrapper.props().id).toBe('banner');
  });
});
