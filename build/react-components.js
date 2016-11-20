(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
  typeof define === 'function' && define.amd ? define('auth0-styleguide-react-components', ['exports', 'react'], factory) :
  (factory((global.auth0StyleguideReactComponents = global.auth0StyleguideReactComponents || {}),global.React));
}(this, (function (exports,React) { 'use strict';

var React__default = 'default' in React ? React['default'] : React;

/**
 * Select: Drop-down list.
 */
var Select = function Select(_ref) {
  var options = _ref.options,
      selected = _ref.selected,
      label = _ref.label,
      color = _ref.color,
      handleChange = _ref.handleChange;
  return React__default.createElement(
    "div",
    { className: "select" },
    label && React__default.createElement(
      "span",
      null,
      label
    ),
    React__default.createElement(
      "span",
      { className: "value text-truncate", style: { color: color } },
      options[selected]
    ),
    React__default.createElement("i", { className: "icon-budicon-460" }),
    React__default.createElement(
      "select",
      {
        onChange: handleChange,
        value: options.reduce(function (prev, current, index) {
          if (index === selected) return index;
          return prev;
        })
      },
      options.map(function (name, index) {
        return React__default.createElement(
          "option",
          { key: index, value: index },
          name
        );
      })
    )
  );
};

Select.defaultProps = {
  options: ['Default'],
  selected: 0,
  label: '',
  handleChange: function handleChange() {}
};

Select.propTypes = {
  /**
   * List of options
   */
  options: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  /**
   * Index of default selected value
   */
  selected: React.PropTypes.number.isRequired,
  handleChange: React.PropTypes.func.isRequired,
  label: React.PropTypes.string,
  color: React.PropTypes.string
};

/**
 * Empty state: Simple component for onboarding users to sections with no data.
 */
var EmptyState = function EmptyState(_ref) {
  var title = _ref.title,
      description = _ref.description,
      iconCode = _ref.iconCode,
      image = _ref.image,
      children = _ref.children;
  return React__default.createElement(
    "div",
    { className: "empty-state" },
    React__default.createElement(
      "h2",
      { className: "empty-state-title" },
      title
    ),
    image || React__default.createElement(
      "div",
      { className: "empty-state-icon" },
      React__default.createElement("i", { className: "icon-budicon-" + iconCode })
    ),
    description && React__default.createElement(
      "p",
      { className: "empty-state-description" },
      description
    ),
    React__default.createElement(
      "div",
      { className: "empty-state-children" },
      " ",
      children,
      " "
    )
  );
};

EmptyState.propTypes = {
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  iconCode: React.PropTypes.string,
  image: React.PropTypes.node,
  children: React.PropTypes.node
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/* eslint max-len: ["error", 100, { "ignoreComments": true }] */
/**
 * Try Banner: The main call to action to signup.
 */
function TryBanner(_ref) {
  var title = _ref.title,
      button = _ref.button,
      buttonAction = _ref.buttonAction,
      dark = _ref.dark,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ['title', 'button', 'buttonAction', 'dark', 'className']);

  return React__default.createElement(
    'div',
    _extends({
      className: 'a0src-try-banner ' + className + ' ' + (dark ? 'a0src-try-banner--dark' : '')
    }, rest),
    React__default.createElement(
      'span',
      { className: 'a0src-try-banner__title' },
      title
    ),
    toString.call(buttonAction) === '[object String]' ? React__default.createElement(
      'a',
      {
        className: 'a0src-try-banner__button btn btn-success btn-lg',
        href: buttonAction
      },
      button
    ) : React__default.createElement(
      'button',
      {
        className: 'a0src-try-banner__button btn btn-success btn-lg',
        onClick: buttonAction
      },
      button
    )
  );
}

TryBanner.propTypes = {
  /**
   * Try Banner title.
   */
  title: React.PropTypes.string,
  /**
   * Text for the button.
   */
  button: React.PropTypes.string,
  /**
   * Action of the button when pressed, this can be a URL (the button will be an anchor tag) or a function (the button will be a button tag).
   */
  buttonAction: React.PropTypes.oneOfType([React.PropTypes.func, React.PropTypes.string]),
  /**
   * Display in dark mode if true.
   */
  dark: React.PropTypes.bool,
  /**
   * Add CSS class selectors to the root element.
   */
  className: React.PropTypes.string
};

TryBanner.defaultProps = {
  title: 'Don\'t have an account yet?',
  button: 'Try Auth0 for Free',
  buttonAction: '#',
  dark: false,
  className: ''
};

/**
 * Footer: Auth0's footer component.
 */
var Footer = function Footer() {
  return React__default.createElement(
    "footer",
    { className: "site-footer" },
    React__default.createElement(
      "div",
      { className: "container" },
      React__default.createElement(
        "div",
        { className: "logo" },
        React__default.createElement("img", {
          src: "https://cdn.auth0.com/styleguide/latest/lib/logos/img/badge.png",
          width: "30",
          role: "presentation"
        })
      ),
      React__default.createElement(
        "div",
        { className: "footer-grid" },
        React__default.createElement(
          "div",
          { className: "column" },
          React__default.createElement(
            "div",
            { className: "item" },
            React__default.createElement(
              "h6",
              null,
              "Product"
            )
          ),
          React__default.createElement(
            "div",
            { className: "item" },
            React__default.createElement(
              "a",
              { href: "https://auth0.com/pricing" },
              "Pricing"
            )
          ),
          React__default.createElement(
            "div",
            { className: "item" },
            React__default.createElement(
              "a",
              { href: "https://auth0.com/why-auth0" },
              "Why Auth0"
            )
          ),
          React__default.createElement(
            "div",
            { className: "item" },
            React__default.createElement(
              "a",
              { href: "https://auth0.com/how-it-works" },
              "How It Works"
            )
          )
        ),
        React__default.createElement(
          "div",
          { className: "column" },
          React__default.createElement(
            "div",
            { className: "item" },
            React__default.createElement(
              "h6",
              null,
              "Company"
            )
          ),
          React__default.createElement(
            "div",
            { className: "item" },
            React__default.createElement(
              "a",
              { href: "https://auth0.com/about" },
              "About Us"
            )
          ),
          React__default.createElement(
            "div",
            { className: "item" },
            React__default.createElement(
              "a",
              { href: "https://auth0.com/blog" },
              "Blog"
            )
          ),
          React__default.createElement(
            "div",
            { className: "item" },
            React__default.createElement(
              "a",
              { href: "https://auth0.com/jobs" },
              "Jobs"
            )
          ),
          React__default.createElement(
            "div",
            { className: "item" },
            React__default.createElement(
              "a",
              { href: "https://auth0.com/press" },
              "Press"
            )
          )
        ),
        React__default.createElement(
          "div",
          { className: "column" },
          React__default.createElement(
            "div",
            { className: "item" },
            React__default.createElement(
              "h6",
              null,
              "Security"
            )
          ),
          React__default.createElement(
            "div",
            { className: "item" },
            React__default.createElement(
              "a",
              { href: "https://auth0.com/availability-trust" },
              "Availability & Trust"
            )
          ),
          React__default.createElement(
            "div",
            { className: "item" },
            React__default.createElement(
              "a",
              { href: "https://auth0.com/security" },
              "Security"
            )
          ),
          React__default.createElement(
            "div",
            { className: "item" },
            React__default.createElement(
              "a",
              { href: "https://auth0.com/whitehat" },
              "White Hat"
            )
          )
        ),
        React__default.createElement(
          "div",
          { className: "column" },
          React__default.createElement(
            "div",
            { className: "item" },
            React__default.createElement(
              "h6",
              null,
              "Learn"
            )
          ),
          React__default.createElement(
            "div",
            { className: "item" },
            React__default.createElement(
              "a",
              { href: "https://support.auth0.com" },
              "Help & Support"
            )
          ),
          React__default.createElement(
            "div",
            { className: "item" },
            React__default.createElement(
              "a",
              { href: "https://auth0.com/docs" },
              "Documentation"
            )
          ),
          React__default.createElement(
            "div",
            { className: "item" },
            React__default.createElement(
              "a",
              { href: "https://auth0.com/opensource" },
              "Open Source"
            )
          )
        ),
        React__default.createElement(
          "div",
          { className: "column" },
          React__default.createElement(
            "div",
            { className: "item" },
            React__default.createElement(
              "h6",
              null,
              "Extend"
            )
          ),
          React__default.createElement(
            "div",
            { className: "item" },
            React__default.createElement(
              "a",
              { href: "https://auth0.com/lock" },
              "Lock"
            )
          ),
          React__default.createElement(
            "div",
            { className: "item" },
            React__default.createElement(
              "a",
              { href: "https://auth0.com/wordpress" },
              "WordPress"
            )
          ),
          React__default.createElement(
            "div",
            { className: "item" },
            React__default.createElement(
              "a",
              { href: "https://auth0.com/docs/apiv2" },
              "API Explorer"
            )
          )
        ),
        React__default.createElement(
          "div",
          { className: "contact" },
          React__default.createElement(
            "div",
            { className: "column" },
            React__default.createElement(
              "div",
              { className: "item" },
              React__default.createElement(
                "h6",
                null,
                "Contact"
              )
            ),
            React__default.createElement(
              "div",
              { className: "item item-text" },
              "10900 NE 8th Street",
              React__default.createElement("br", null),
              "Suite 700",
              React__default.createElement("br", null),
              "Bellevue, WA   98004"
            )
          ),
          React__default.createElement(
            "div",
            { className: "column no-heading" },
            React__default.createElement(
              "div",
              { className: "item" },
              React__default.createElement(
                "a",
                { href: "tel:+18882352699" },
                "+1 (888) 235-2699"
              )
            ),
            React__default.createElement(
              "div",
              { className: "item" },
              React__default.createElement(
                "a",
                { href: "tel:+14253126521" },
                "+1 (425) 312-6521"
              )
            ),
            React__default.createElement(
              "div",
              { className: "item" },
              React__default.createElement(
                "a",
                { href: "https://support.auth0.com" },
                "Support Center"
              )
            )
          )
        )
      ),
      React__default.createElement(
        "div",
        { className: "colophon" },
        React__default.createElement(
          "div",
          { className: "column" },
          React__default.createElement(
            "div",
            { className: "social" },
            React__default.createElement(
              "div",
              { className: "twitter" },
              React__default.createElement("iframe", {
                allowTransparency: "true",
                frameBorder: "0",
                scrolling: "no",
                src: "//platform.twitter.com/widgets/follow_button.html?screen_name=auth0",
                className: "twitter"
              })
            ),
            React__default.createElement(
              "div",
              { className: "facebook" },
              React__default.createElement("iframe", {
                // eslint-disable-next-line max-len
                src: "//www.facebook.com/plugins/like.php?href=https%3A%2F%2Ffacebook.com%2Fgetauth0&width&layout=button_count&action=like&show_faces=false&show_count=false&share=false&height=21&appId=507756515938786",
                scrolling: "no",
                frameBorder: "0",
                allowTransparency: "true",
                className: "facebook"
              })
            )
          )
        ),
        React__default.createElement(
          "div",
          { className: "column" },
          React__default.createElement(
            "ul",
            { className: "list-inline text-right" },
            React__default.createElement(
              "li",
              null,
              React__default.createElement(
                "a",
                { href: "https://auth0.com/privacy" },
                "Privacy Policy"
              )
            ),
            React__default.createElement(
              "li",
              null,
              React__default.createElement(
                "a",
                { href: "https://auth0.com/terms" },
                "Terms of Service"
              )
            ),
            React__default.createElement(
              "li",
              null,
              React__default.createElement(
                "span",
                null,
                "\xA9 2013-2016 Auth0\xAE Inc. All Rights Reserved."
              )
            )
          )
        )
      )
    )
  );
};

exports.Select = Select;
exports.EmptyState = EmptyState;
exports.TryBanner = TryBanner;
exports.Footer = Footer;

Object.defineProperty(exports, '__esModule', { value: true });

})));
