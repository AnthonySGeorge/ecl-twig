# ECL Twig - EC Language List component

npm package: `@ecl-twig/ec-component-language-list`

```shell
npm install --save @ecl-twig/ec-component-language-list
```

### Parameters

- **"items"** (array) (default: [])
  - "lang" (string) (default: '')
  - "label" (string) (default: '')
  - "path" (string) (default: '')
  - "active" (boolean) (default: false)
- **"icon_path"** (string) (default: ''): file containing the svg icons
- **"close_label"** (string) (default: ''): label of close button
- **"hide_overlay"** (boolean) (default: false)
- **"title"** (string) (default: ''): title of the page
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example for overlay:

<!-- prettier-ignore -->
```twig
{% include '@ecl-twig/ec-component-language-list/ecl-language-list-overlay.html.twig' with { 
  items: [ 
    { lang: 'bg', label: 'български', path: '/example' }, 
    { lang: 'es', label: 'español', path: '/example' }, 
    ... 
  ], 
  close_label: 'Close', 
  title: 'Select your language', 
  icon_path: '/path-to-the-icon-file', 
  extra_classes: 'my-extra-class-1 my-extra-class-2', 
  extra_attributes: [ 
    { name: 'data-test', value: 'data-test-value' }, 
    { name: 'data-test-1', value: 'data-test-value-1' } 
  ] 
} %}
```