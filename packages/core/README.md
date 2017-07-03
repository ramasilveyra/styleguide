# Auth0 Styleguide - Core

Includes the common styles for every Auth0 applications like variables, mixins, utility classes and css reset.

## Installation

### CDN

Using our CDN is the prefered solution. Just add the following line in your project's HTML head and you are done.

```html
<link rel="preload" href="https://cdn.auth0.com/styleguide/core/3.0.0/fonts/fakt/faktpro-normal.woff2" as="font" type="font/woff2" crossorigin />
<link rel="stylesheet" href="https://cdn.auth0.com/styleguide/core/3.0.0/core.min.css" />
<script>
(function () {
  if (sessionStorage.a0scFontsLoaded || typeof Promise === 'undefined') {
    document.documentElement.classList.add('a0sc-fonts--loaded');
  } else {
    var script = document.createElement('script');
    script.src = 'https://cdn.auth0.com/styleguide/core/3.0.0/core.min.js';
    script.async = true;
    document.head.appendChild(script);
  }
})();
</script>
```

### NPM

Download the package from NPM if you need to access to the stylus mixins or variables.

```bash
npm install --save @auth0/styleguide-core
```

## Development

**Node.js v6.9.1 and npm v3.10.8 or newer is required.**

Run this commands to start developing:

```bash
npm install
npm start
```

## Releasing a new version

Run the command `bin/version <patch|minor|major|version-no>` inside the package directory. This will commit a new version for you.

Example
```
bin/version patch
```

## License

All the logos and branding are copyright Auth0 and may not be used or reproduced without explicit permission from Auth0 Inc.

The icons are licensed from [Budi Harto Tanrim](http://budicon.buditanrim.co/). All other third-party components are subject to their own licenses.
