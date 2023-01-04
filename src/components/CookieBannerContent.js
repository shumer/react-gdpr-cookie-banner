import React from 'react';
import CookieOption from './CookieOption';
import bannerStyle from './bannerStyle';

export default (props = {}) => {
  const {
    styles = {},
    className = '',
    message = 'No text',
    policyLink = '/#',
    privacyPolicyLinkText = 'Privacy Policy',
    necessaryOptionText = 'Necessary',
    preferencesOptionText = 'Preferences',
    statisticsOptionText = 'Statistics',
    marketingOptionText = 'Marketing',
    showDeclineButton = true,
    declineButtonText = 'Decline',
    showAcceptSelectionButton = false,
    acceptAllButtonText = 'Accept All',
    acceptSelectionButtonText = 'Accept Selection',
    showPreferencesOption = true,
    showStatisticsOption = true,
    showMarketingOption = true,
    preferencesOptionInitiallyChecked = false,
    statisticsOptionInitiallyChecked = false,
    marketingOptionInitiallyChecked = false,
    onTogglePreferencesCookies = Function,
    onToggleStatisticsCookies = Function,
    onToggleMarketingCookies = Function,
    onDecline = Function,
    onConfirmSelection = Function,
    onConfirmAll = Function,
  } = props;

  const {
    dialog: dialogStyle,
    container: containerStyle,
    message: messageStyle,
    policy: policyStyle,
    selectPane: selectPaneStyle,
    optionWrapper: optionWrapperStyle,
    optionLabel: optionLabelStyle,
    checkbox: checkboxStyle,
    buttonWrapper: buttonWrapperStyle,
    button: buttonStyle,
  } = { ...bannerStyle, ...styles };

  const cookieOptionStyle = { optionWrapperStyle, optionLabelStyle, checkboxStyle };

  return (
    <div className={`react-cookie-law-dialog ${className}`} style={dialogStyle}>
      <div className="react-cookie-law-container" style={containerStyle}>
        <div className="react-cookie-law-msg" style={messageStyle}>{message}</div>

        <div className="react-cookie-law-select-pane" style={selectPaneStyle}>
          <CookieOption
            id="check-required-cookies"
            text={necessaryOptionText}
            styles={cookieOptionStyle}
            disabled
            checked
          />

          {
            showPreferencesOption && (
              <CookieOption
                id="check-preferences-cookies"
                text={preferencesOptionText}
                styles={cookieOptionStyle}
                onChange={onTogglePreferencesCookies}
                checked={preferencesOptionInitiallyChecked}
              />
            )
          }

          {
            showStatisticsOption && (
              <CookieOption
                id="check-statistics-cookies"
                text={statisticsOptionText}
                styles={cookieOptionStyle}
                onChange={onToggleStatisticsCookies}
                checked={statisticsOptionInitiallyChecked}
              />
            )
          }

          {
            showMarketingOption && (
              <CookieOption
                id="check-marketing-cookies"
                text={marketingOptionText}
                styles={cookieOptionStyle}
                onChange={onToggleMarketingCookies}
                checked={marketingOptionInitiallyChecked}
              />
            )
          }
        </div>

        <a href={policyLink} className="react-cookie-law-policy" style={policyStyle}>{privacyPolicyLinkText}</a>

        <div className="react-cookie-law-button-wrapper" style={buttonWrapperStyle}>
          {
            showDeclineButton && (
              <button type="button" className="react-cookie-law-decline-btn" style={buttonStyle} onClick={() => onDecline()}>
                <span>{declineButtonText}</span>
              </button>
            )
          }
          {
            showAcceptSelectionButton && (
              <button type="button" className="react-cookie-law-accept-selection-btn" style={buttonStyle} onClick={() => onConfirmSelection()}>
                <span>{acceptSelectionButtonText}</span>
              </button>
            )
          }

          <button type="button" className="react-cookie-law-accept-all-btn" style={buttonStyle} onClick={() => onConfirmAll()}>
            <span>{acceptAllButtonText}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
