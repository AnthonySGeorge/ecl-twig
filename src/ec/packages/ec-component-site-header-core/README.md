# ECL Twig - EC Site Header Core component

npm package: `@ecl-twig/ec-component-site-header-core`

```shell
npm install --save @ecl-twig/ec-component-site-header-core
```

## Site Header Core

### Parameters

- "icon_file_path" (string) (default: ''): file containing the svg icons
- "logo" (associative array) (default: predefined structure): Logo image settings. format:
  - "title" (string) (default: ''): Logo title attribute.
  - "alt" (string) (default: ''): Logo alt attribute.
  - "href" (string) (default: ''): Logo URL.
  - "src" (string) (default: ''): Logo image file path, eg. dist/images/logo--en.svg.
- "language_selector" (associative array) (default: predefined structure): Language switcher settings. format:
  - "href" (string) (default: ''): URL for switcher
  - "name" (string) (default: ''): Switcher language label, eg. 'English', 'Français', etc.
  - "code" (string) (default: ''): Switcher language code, eg. 'en', 'fr', etc.
  - "overlay" (associative array) (default: predefined structure): Overlay language switcher settings. format:
    - "close_label" (string) (default: ''): Close button label eg. 'Close'.
    - "title" (string) (default: ''): Overlay title, eg. 'Select your language'.
    - "items" (array) (default: []): (array) (default: []): format:
      - "lang" (string) (default: '') Item language code, eg. 'en', 'fr', etc.
      - "label" (string) (default: '') Item language label, eg. 'English', 'Français', etc.
      - "path" (string) (default: '') Item language URL eg. '/example#language_en'.
      - "active" (boolean) (default: false) define if item is the active language.
- "search_toggle": (associative array) (default: { label: 'Search', href: '/example' }),
- "search_form" (associative array) (default: predefined structure): EC Search Form component structure
- "extra_classes" (string) (default: '')
- "extra_attributes" (array) (default: []): format:
  - "name" (string) (default: '')
  - "value" (string) (default: '')

### Example :

<!-- prettier-ignore -->
```twig
{% include '@ecl-twig/ec-component-site-header-core/ecl-site-header-core.html.twig' with { 
  icon_file_path: '/path-to-the-icons-file', 
  logo: { 
    title: 'European Commission', 
    alt: 'European Commission logo', 
    href: '/example', 
    src: 'dist/images/logo--en.svg', 
  }, 
  language_selector: { 
    href: '/example', 
    name: 'English', 
    code: 'en', 
    overlay: { 
      close_label: 'Close', 
      title: 'Select your language', 
      items: [ 
        { lang: 'bg', label: 'български', path: '/example#language_bg' }, 
        { lang: 'es', label: 'español', path: '/example#language_es', active: true }, 
        ... 
      ], 
    }, 
  }, 
  search_toggle: { 
    label: 'Search', 
    href: '#', 
  }, 
  search_form: { 
    text_input: { 
      id: 'input-search', 
      name: 'search', 
    }, 
    button: { 
      label: 'Search', 
    }, 
  }, 
  extra_classes: 'my-extra-class-1 my-extra-class-2', 
  extra_attributes: [ 
    { name: 'data-test', value: 'data-test-value' }, 
    { name: 'data-test-1', value: 'data-test-value-1' }, 
    ... 
  ], 
} %} 
```