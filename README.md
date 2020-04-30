# React GDPR Cookie Banner

[![Build Status](https://travis-ci.com/qeeps/react-cookie-law.svg?branch=master)](https://travis-ci.com/github/qeeps/react-gdpr-cookie-banner)

A GDPR compliant Cookie Banner component for React.

![Preview](https://raw.githubusercontent.com/qeeps/react-gdpr-cookie-banner/master/banner_preview.png)
![Preview](https://raw.githubusercontent.com/qeeps/react-gdpr-cookie-banner/master/banner_preview_custom_style.png)

## Install

```
yarn add @qeeps/react-gdpr-cookie-banner
```

or

```
npm install --save @qeeps/react-gdpr-cookie-banner
```

## Adjustments
This is a fork of https://github.com/Palmabit-IT/react-cookie-law

Custom adjustments are:

**1. Change "Accept"-Button to "Accept All"-Button**

When user clicks "Accept All" all options are getting selected and respective cookies are set.

**2. Change "Decline"-Button to "Accept Selection"-Button**

The Decline-Button got removed and therefor a "Accept Selection"-Button got introduced which basically just sets the selected cookies.
Initially - if no checkbox is selected - this button just sets the necessary cookies.

**3. Checkbox-Labels are clickable:**

You can now click the labels to select/deselect the options

**4. Introduced options to set an initial state for each checkbox:**

|Name|Type|Default|Description|
|----|----|-------|-----------|
| **preferencesOptionInitiallyChecked** | bool | false | *optional*. Sets the inital state of the *preferences* checkbox |
| **statisticsOptionInitiallyChecked** | bool | false | *optional*. Sets the inital state of the *statistics* checkbox |
| **marketingOptionInitiallyChecked** | bool | false | *optional*. Sets the inital state of the *marketing* checkbox |


## Usage

```js
import { CookieBanner } from '@qeeps/react-gdpr-cookie-banner';

React.renderComponent(
  <div>
    <CookieBanner
      message="Cookie banner message"
      onAcceptPreferences = {() => { 
        // load your preferences trackers here
      }}
      onAcceptStatistics = {() => {
        // load your statistics trackers here
      }}
      onAcceptMarketing = {() => {
        // load your marketing trackers here
      }}
    />
  </div>,
  document.body
);
```

### Options

|Name|Type|Default|Description|
|----|----|-------|-----------|
| **className** | string | | **optional**. Classes |
| **message** | string | | **Required**. Custom text of the banner |
| **policyLink** | string | "/#" | *optional*. Link to privacy policy page |
| **privacyPolicyLinkText** | string | "Privacy Policy" | *optional*. Text for the privacy policy link |
| **necessaryOptionText** | string | "Necessary" | *optional*. Text for the *necessary* cookies checkbox |
| **preferencesOptionText** | string | "Preferences" | *optional*. Text for the *preferences* cookies checkbox |
| **statisticsOptionText** | string | "Statistics" | *optional*. Text for the *statistics* cookies checkbox |
| **marketingOptionText** | string | "Marketing" | *optional*. Text for the *marketing* cookies checkbox |
| **acceptAllButtonText** | string | "Accept All" | *optional*. Text for the *acceptAll* button |
| **acceptSelectionButtonText** | string | "Accept Selection" | *optional*. Text for the *acceptSelection* button |
| **showAcceptSelectionButton** | bool | false | *optional*. Show or hide the *acceptSelection* button |
| **dismissOnScroll** | bool | false | *optional*. Enable or disable the dismissing on scroll of the banner |
| **showPreferencesOption** | bool | true | *optional*. Show or hide the *preferences* checkbox |
| **showStatisticsOption** | bool | true | *optional*. Show or hide the *statistics* checkbox |
| **showMarketingOption** | bool | true | *optional*. Show or hide the *marketing* checkbox |
| **preferencesOptionInitiallyChecked** | bool | false | *optional*. Sets the inital state of the *preferences* checkbox |
| **statisticsOptionInitiallyChecked** | bool | false | *optional*. Sets the inital state of the *statistics* checkbox |
| **marketingOptionInitiallyChecked** | bool | false | *optional*. Sets the inital state of the *marketing* checkbox |
| **onAccept** | function | Function | *optional*. Callback called when the consent is given |
| **onAcceptPreferences** | function | Function | *optional*. Callback called if *preferences* cookies is accepted |
| **onAcceptStatistics** | function | Function | *optional*. Callback called if *statistics* cookies is accepted |
| **onAcceptMarketing** | function | Function | *optional*. Callback called if *marketing* cookies is accepted |
| **onDeclinePreferences** | function | Function | *optional*. Callback called if *preferences* cookies is declined |
| **onDeclineStatistics** | function | Function | *optional*. Callback called if *statistics* cookies is declined |
| **onDeclineMarketing** | function | Function | *optional*. Callback called if *marketing* cookies is declined |

### Style

```js
<CookieBanner
  message="Cookie banner message"
  styles={{
    dialog: { backgroundColor: 'red' }
  }}
/>
```

|Style option|Description|
|----|----|
| **dialog** | Style that override `.react-cookie-law-dialog` class |
| **container** | `.react-cookie-law-container` class |
| **message** | Style for banner text (`.react-cookie-law-message` class) |
| **policy** | Style for cookie policy link (`.react-cookie-law-policy` class) |
| **selectPane** | Style for select pane (`.react-cookie-law-select-pane` class) |
| **optionWrapper** | Style for option checkbox wrapper (`.react-cookie-law-option-wrapper` class) |
| **optionLabel** | Style for the text of checkbox labels |
| **checkbox** | Style for checkboxes (`.react-cookie-law-option-checkbox` class) |
| **buttonWrapper** | Style for buttons wrapper (`.react-cookie-law-dialog` class) |
| **button** | Style for buttons (`.react-cookie-law-dialog` class) |

To style the buttons differently you can use the following classes:

|Classname|Description|
|----|----|
| **react-cookie-law-accept-all-btn** | Styles the *Accept All*-Button |
| **react-cookie-law-accept-selection-btn** |  Styles the *Accept Selection*-Button |

#### Example of a custom style:
![Preview](https://raw.githubusercontent.com/qeeps/react-gdpr-cookie-banner/master/banner_preview_custom_style.png)


## Test

```
yarn test
```

or

```
npm test
```

# Author

## Original Author

[Palmabit-IT](https://www.palmabit.com)

## Improvements

[Daniel Engelhardt (qeeps.de)](https://www.qeeps.de)

# Licence

[See the MIT License](http://opensource.org/licenses/MIT)
