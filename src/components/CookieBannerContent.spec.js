import React from 'react';
import { mount, shallow } from 'enzyme';
import CookieBannerContent from './CookieBannerContent';
import CookieOption from './CookieOption';
import bannerStyle from './bannerStyle';

describe('CookieBannerContent component', () => {
  test('should be rendered', () => {
    const component = shallow(
      <CookieBannerContent message="Custom text" />,
    );

    expect(component).toMatchSnapshot();
  });

  test('should be rendered with elements', () => {
    const props = {
      styles: bannerStyle,
      message: 'Custom text',
      policyLink: '/url-to-policy',
      privacyPolicyLinkText: 'Privacy Policy',
      necessaryOptionText: 'Necessary',
      preferencesOptionText: 'Preferences',
      statisticsOptionText: 'Statistics',
      marketingOptionText: 'Marketing',
      acceptAllButtonText: 'Accept All',
      acceptSelectionButtonText: 'Accept Selection',
    };

    const component = mount(
      <CookieBannerContent {...props} />,
    );

    const cookieOptionStyle = {
      optionWrapperStyle: bannerStyle.optionWrapper,
      optionLabelStyle: bannerStyle.optionLabel,
      checkboxStyle: bannerStyle.checkbox,
    };

    expect(component.find('.react-cookie-law-msg').text()).toBe('Custom text');
    expect(component.find('a.react-cookie-law-policy').prop('href')).toBe('/url-to-policy');
    expect(component.find('.react-cookie-law-policy').text()).toBe('Privacy Policy');
    expect(component.contains(<CookieOption id="check-required-cookies" text="Necessary" disabled checked styles={cookieOptionStyle} />)).toBeTruthy();
    expect(component.contains(<CookieOption id="check-preferences-cookies" text="Preferences" onChange={Function} checked={false} styles={cookieOptionStyle} />)).toBeTruthy();
    expect(component.contains(<CookieOption id="check-statistics-cookies" text="Statistics" onChange={Function} checked={false} styles={cookieOptionStyle} />)).toBeTruthy();
    expect(component.contains(<CookieOption id="check-marketing-cookies" text="Marketing" onChange={Function}  checked={false} styles={cookieOptionStyle} />)).toBeTruthy();
  });

  test('should click confirm button', () => {
    const props = {
      onConfirmAll: jest.fn(),
    };

    const component = mount(
      <CookieBannerContent {...props} />,
    );

    component.find('.react-cookie-law-accept-all-btn').simulate('click');

    expect(props.onConfirmAll).toHaveBeenCalledTimes(1);
  });

  test('should click accept selection button', () => {
    const props = {
      onConfirmSelection: jest.fn(),
      showAcceptSelectionButton: true,
    };

    const component = mount(
      <CookieBannerContent {...props} />,
    );

    component.find('.react-cookie-law-accept-selection-btn').simulate('click');

    expect(props.onConfirmSelection).toHaveBeenCalledTimes(1);
  });

  test('should hide preferences checkbox', () => {
    const props = {
      onConfirmSelection: jest.fn(),
      showPreferencesOption: false,
    };

    const component = mount(
      <CookieBannerContent {...props} />,
    );

    expect(component.find('#check-preferences-cookies').exists()).toBeFalsy();
  });

  test('should hide statistics checkbox', () => {
    const props = {
      onConfirmSelection: jest.fn(),
      showStatisticsOption: false,
    };

    const component = mount(
      <CookieBannerContent {...props} />,
    );

    expect(component.find('#check-statistics-cookies').exists()).toBeFalsy();
  });

  test('should hide marketing checkbox', () => {
    const props = {
      onConfirmSelection: jest.fn(),
      showMarketingOption: false,
    };

    const component = mount(
      <CookieBannerContent {...props} />,
    );

    expect(component.find('#check-marketing-cookies').exists()).toBeFalsy();
  });

  test('should show all checkboxes as default', () => {
    const props = {
      onConfirmSelection: jest.fn(),
    };

    const component = mount(
      <CookieBannerContent {...props} />,
    );

    expect(component.find('#check-preferences-cookies').exists()).toBeTruthy();
    expect(component.find('#check-statistics-cookies').exists()).toBeTruthy();
    expect(component.find('#check-marketing-cookies').exists()).toBeTruthy();
  });
});
