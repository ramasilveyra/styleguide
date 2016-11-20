import React, { PropTypes } from 'react';

/**
 * Select: Drop-down list.
 */
var Select = function Select(_ref) {
  var options = _ref.options,
      selected = _ref.selected,
      label = _ref.label,
      color = _ref.color,
      handleChange = _ref.handleChange;
  return React.createElement(
    "div",
    { className: "select" },
    label && React.createElement(
      "span",
      null,
      label
    ),
    React.createElement(
      "span",
      { className: "value text-truncate", style: { color: color } },
      options[selected]
    ),
    React.createElement("i", { className: "icon-budicon-460" }),
    React.createElement(
      "select",
      {
        onChange: handleChange,
        value: options.reduce(function (prev, current, index) {
          if (index === selected) return index;
          return prev;
        })
      },
      options.map(function (name, index) {
        return React.createElement(
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
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  /**
   * Index of default selected value
   */
  selected: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  color: PropTypes.string
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
  return React.createElement(
    "div",
    { className: "empty-state" },
    React.createElement(
      "h2",
      { className: "empty-state-title" },
      title
    ),
    image || React.createElement(
      "div",
      { className: "empty-state-icon" },
      React.createElement("i", { className: "icon-budicon-" + iconCode })
    ),
    description && React.createElement(
      "p",
      { className: "empty-state-description" },
      description
    ),
    React.createElement(
      "div",
      { className: "empty-state-children" },
      " ",
      children,
      " "
    )
  );
};

EmptyState.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  iconCode: PropTypes.string,
  image: PropTypes.node,
  children: PropTypes.node
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

  return React.createElement(
    'div',
    _extends({
      className: 'a0src-try-banner ' + className + ' ' + (dark ? 'a0src-try-banner--dark' : '')
    }, rest),
    React.createElement(
      'span',
      { className: 'a0src-try-banner__title' },
      title
    ),
    toString.call(buttonAction) === '[object String]' ? React.createElement(
      'a',
      {
        className: 'a0src-try-banner__button btn btn-success btn-lg',
        href: buttonAction
      },
      button
    ) : React.createElement(
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
  title: PropTypes.string,
  /**
   * Text for the button.
   */
  button: PropTypes.string,
  /**
   * Action of the button when pressed, this can be a URL (the button will be an anchor tag) or a function (the button will be a button tag).
   */
  buttonAction: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  /**
   * Display in dark mode if true.
   */
  dark: PropTypes.bool,
  /**
   * Add CSS class selectors to the root element.
   */
  className: PropTypes.string
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
  return React.createElement(
    "footer",
    { className: "site-footer" },
    React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "div",
        { className: "logo" },
        React.createElement("img", {
          src: "https://cdn.auth0.com/styleguide/latest/lib/logos/img/badge.png",
          width: "30",
          role: "presentation"
        })
      ),
      React.createElement(
        "div",
        { className: "footer-grid" },
        React.createElement(
          "div",
          { className: "column" },
          React.createElement(
            "div",
            { className: "item" },
            React.createElement(
              "h6",
              null,
              "Product"
            )
          ),
          React.createElement(
            "div",
            { className: "item" },
            React.createElement(
              "a",
              { href: "https://auth0.com/pricing" },
              "Pricing"
            )
          ),
          React.createElement(
            "div",
            { className: "item" },
            React.createElement(
              "a",
              { href: "https://auth0.com/why-auth0" },
              "Why Auth0"
            )
          ),
          React.createElement(
            "div",
            { className: "item" },
            React.createElement(
              "a",
              { href: "https://auth0.com/how-it-works" },
              "How It Works"
            )
          )
        ),
        React.createElement(
          "div",
          { className: "column" },
          React.createElement(
            "div",
            { className: "item" },
            React.createElement(
              "h6",
              null,
              "Company"
            )
          ),
          React.createElement(
            "div",
            { className: "item" },
            React.createElement(
              "a",
              { href: "https://auth0.com/about" },
              "About Us"
            )
          ),
          React.createElement(
            "div",
            { className: "item" },
            React.createElement(
              "a",
              { href: "https://auth0.com/blog" },
              "Blog"
            )
          ),
          React.createElement(
            "div",
            { className: "item" },
            React.createElement(
              "a",
              { href: "https://auth0.com/jobs" },
              "Jobs"
            )
          ),
          React.createElement(
            "div",
            { className: "item" },
            React.createElement(
              "a",
              { href: "https://auth0.com/press" },
              "Press"
            )
          )
        ),
        React.createElement(
          "div",
          { className: "column" },
          React.createElement(
            "div",
            { className: "item" },
            React.createElement(
              "h6",
              null,
              "Security"
            )
          ),
          React.createElement(
            "div",
            { className: "item" },
            React.createElement(
              "a",
              { href: "https://auth0.com/availability-trust" },
              "Availability & Trust"
            )
          ),
          React.createElement(
            "div",
            { className: "item" },
            React.createElement(
              "a",
              { href: "https://auth0.com/security" },
              "Security"
            )
          ),
          React.createElement(
            "div",
            { className: "item" },
            React.createElement(
              "a",
              { href: "https://auth0.com/whitehat" },
              "White Hat"
            )
          )
        ),
        React.createElement(
          "div",
          { className: "column" },
          React.createElement(
            "div",
            { className: "item" },
            React.createElement(
              "h6",
              null,
              "Learn"
            )
          ),
          React.createElement(
            "div",
            { className: "item" },
            React.createElement(
              "a",
              { href: "https://support.auth0.com" },
              "Help & Support"
            )
          ),
          React.createElement(
            "div",
            { className: "item" },
            React.createElement(
              "a",
              { href: "https://auth0.com/docs" },
              "Documentation"
            )
          ),
          React.createElement(
            "div",
            { className: "item" },
            React.createElement(
              "a",
              { href: "https://auth0.com/opensource" },
              "Open Source"
            )
          )
        ),
        React.createElement(
          "div",
          { className: "column" },
          React.createElement(
            "div",
            { className: "item" },
            React.createElement(
              "h6",
              null,
              "Extend"
            )
          ),
          React.createElement(
            "div",
            { className: "item" },
            React.createElement(
              "a",
              { href: "https://auth0.com/lock" },
              "Lock"
            )
          ),
          React.createElement(
            "div",
            { className: "item" },
            React.createElement(
              "a",
              { href: "https://auth0.com/wordpress" },
              "WordPress"
            )
          ),
          React.createElement(
            "div",
            { className: "item" },
            React.createElement(
              "a",
              { href: "https://auth0.com/docs/apiv2" },
              "API Explorer"
            )
          )
        ),
        React.createElement(
          "div",
          { className: "contact" },
          React.createElement(
            "div",
            { className: "column" },
            React.createElement(
              "div",
              { className: "item" },
              React.createElement(
                "h6",
                null,
                "Contact"
              )
            ),
            React.createElement(
              "div",
              { className: "item item-text" },
              "10900 NE 8th Street",
              React.createElement("br", null),
              "Suite 700",
              React.createElement("br", null),
              "Bellevue, WA   98004"
            )
          ),
          React.createElement(
            "div",
            { className: "column no-heading" },
            React.createElement(
              "div",
              { className: "item" },
              React.createElement(
                "a",
                { href: "tel:+18882352699" },
                "+1 (888) 235-2699"
              )
            ),
            React.createElement(
              "div",
              { className: "item" },
              React.createElement(
                "a",
                { href: "tel:+14253126521" },
                "+1 (425) 312-6521"
              )
            ),
            React.createElement(
              "div",
              { className: "item" },
              React.createElement(
                "a",
                { href: "https://support.auth0.com" },
                "Support Center"
              )
            )
          )
        )
      ),
      React.createElement(
        "div",
        { className: "colophon" },
        React.createElement(
          "div",
          { className: "column" },
          React.createElement(
            "div",
            { className: "social" },
            React.createElement(
              "div",
              { className: "twitter" },
              React.createElement("iframe", {
                allowTransparency: "true",
                frameBorder: "0",
                scrolling: "no",
                src: "//platform.twitter.com/widgets/follow_button.html?screen_name=auth0",
                className: "twitter"
              })
            ),
            React.createElement(
              "div",
              { className: "facebook" },
              React.createElement("iframe", {
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
        React.createElement(
          "div",
          { className: "column" },
          React.createElement(
            "ul",
            { className: "list-inline text-right" },
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "https://auth0.com/privacy" },
                "Privacy Policy"
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "https://auth0.com/terms" },
                "Terms of Service"
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
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

export { Select, EmptyState, TryBanner, Footer };
