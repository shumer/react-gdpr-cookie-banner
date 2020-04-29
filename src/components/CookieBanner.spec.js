import React from 'react';
import { mount, shallow } from 'enzyme';
import CookieBanner from './CookieBanner';
import CookieBannerContent from './CookieBannerContent';

describe('CookieBanner component', () => {
  beforeEach((done) => {
    document.cookie.split(';').forEach((cookie) => {
      const eqPos = cookie.indexOf('=');
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    });

    done();
  });

  test('should be rendered', () => {
    const component = shallow(
      <CookieBanner message="Text" />,
    );

    expect(component).toMatchSnapshot();
  });

  test('should be rendered with elements', () => {
    const component = mount(
      <CookieBanner message="Custom text" />,
    );

    expect(component.find(CookieBannerContent)).toHaveLength(1);
  });


  test('should be rendered with custom class', () => {
    const component = mount(
      <CookieBanner className={'testclass'} message="Custom text" />,
    );

    expect(component.hasClass('testclass')).toBe(true)
  });

  test('shouldn\'t show banner if cookies are already accepted', () => {
    document.cookie = 'rcl_consent_given=true';

    const component = mount(
      <CookieBanner message="Custom text" />,
    );

    expect(component.find(CookieBannerContent)).toHaveLength(0);
  });

  test('should close banner if confirm function is called', () => {
    const component = mount(
      <CookieBanner message="Custom text" />,
    );

    expect(component.html().length).toBeGreaterThan(0);
    expect(component.contains(CookieBannerContent)).toBeTruthy();
    component.find(CookieBannerContent).prop('onConfirmAll')();
    expect(component.html()).toBeNull();
  });

  test('should close banner if decline button is pressed', () => {
    const component = mount(
      <CookieBanner message="Custom text" />,
    );

    expect(component.html().length).toBeGreaterThan(0);
    expect(component.contains(CookieBannerContent)).toBeTruthy();
    component.find(CookieBannerContent).prop('onConfirmSelection')();
    expect(component.html()).toBeNull();
  });

  test('should close banner at scrolling if dismissOnScroll is true', () => {
    const component = mount(
      <CookieBanner message="Test" dismissOnScroll />,
    );

    expect(component.html().length).toBeGreaterThan(0);
    window.dispatchEvent(new window.UIEvent('scroll', { detail: 0 }));
    expect(component.html()).toBeNull();
  });

  test('shouldn\'t close banner at scrolling if dismissOnScroll is true', () => {
    const component = mount(
      <CookieBanner message="Test" />,
    );

    expect(component.html().length).toBeGreaterThan(0);
    window.dispatchEvent(new window.UIEvent('scroll', { detail: 0 }));
    expect(component.html().length).toBeGreaterThan(0);
  });

  test('should give consent if confirm function is called', () => {
    const component = mount(
      <CookieBanner message="Custom text" />,
    );

    component.find(CookieBannerContent).prop('onConfirmAll')();

    expect(document.cookie.indexOf('rcl_consent_given=true')).toBeGreaterThanOrEqual(0);
  });

  test('should give consent if decline function is called', () => {
    const component = mount(
      <CookieBanner message="Custom text" />,
    );

    component.find(CookieBannerContent).prop('onConfirmSelection')();

    expect(document.cookie.indexOf('rcl_consent_given=true')).toBeGreaterThanOrEqual(0);
  });

  test('should give consent at scrolling if dismissOnScroll is true', () => {
    mount(<CookieBanner message="Custom text" dismissOnScroll />);

    window.dispatchEvent(new window.UIEvent('scroll', { detail: 0 }));
    expect(document.cookie.indexOf('rcl_consent_given=true')).toBeGreaterThanOrEqual(0);
  });

  test('should accept all consents at confirm all', () => {
    const component = mount(
      <CookieBanner message="Custom text" />,
    );

    component.find(CookieBannerContent).prop('onConfirmAll')();

    expect(document.cookie.indexOf('rcl_consent_given=true')).toBeGreaterThanOrEqual(0);
    expect(document.cookie.indexOf('rcl_preferences_consent=true')).toBeGreaterThanOrEqual(0);
    expect(document.cookie.indexOf('rcl_statistics_consent=true')).toBeGreaterThanOrEqual(0);
    expect(document.cookie.indexOf('rcl_marketing_consent=true')).toBeGreaterThanOrEqual(0);
  });
  
  test('should give consent to marketing only at confirm selected', () => {
    const component = mount(
      <CookieBanner message="Custom text" />,
    );

    component.find(CookieBannerContent).prop('onToggleMarketingCookies')();
    component.find(CookieBannerContent).prop('onConfirmSelection')();

    expect(document.cookie).toBe('rcl_consent_given=true; rcl_marketing_consent=true');
  });

  test('should give consent to statistics only at confirm selected', () => {
    const component = mount(
      <CookieBanner message="Custom text" />,
    );

    component.find(CookieBannerContent).prop('onToggleStatisticsCookies')();
    component.find(CookieBannerContent).prop('onConfirmSelection')();

    expect(document.cookie).toBe('rcl_consent_given=true; rcl_statistics_consent=true');
  });

  test('should give consent to preferences only at confirm selected', () => {
    const component = mount(
      <CookieBanner message="Custom text" />,
    );

    component.find(CookieBannerContent).prop('onTogglePreferencesCookies')();
    component.find(CookieBannerContent).prop('onConfirmSelection')();

    expect(document.cookie).toBe('rcl_consent_given=true; rcl_preferences_consent=true');
  });
});
