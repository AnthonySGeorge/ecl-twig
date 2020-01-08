# ECL Twig - EC Page Header component

npm package: `@ecl-twig/ec-component-page-header`

```shell
npm install --save @ecl-twig/ec-component-page-header
```

### Parameters

- **"title"** (string) (default: '') Title of header
- **"description"** (string) (default: '') Description of header
- **"meta"** (string) (default: '') Meta of header
- **"composition"** (string) (default: '') Room for the language switcher
- **"infos"** (array) (default: []) Array of infos. format:
  - "text" (string) Label of info
  - "icon" (associative array) Predefined structure compatible with EC Icon
- **"breadcrumb"** (associative array) (default: '') Predefined structure compatible with EC Breadcrumb
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example :

<!-- prettier-ignore -->
```twig
{% include '@ecl-twig/ec-component-page-header/ecl-page-header.html.twig' with {  
  title: 'Page title',  
  description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',  
  meta: 'News article | 17 October 2015',  
  breadcrumb: {  
    links: [    
      {  
        label: 'Link 1',  
        path: '/example'  
      },  
    ],  
    icon_file_path: '/path-to-the-icons-file',  
    navigation_text: 'You are here:',
  },  
  infos: [  
    {  
      text: 'Monday 8 February',  
      icon: {  
        type: 'general',  
        name: 'calendar',  
        path: '/path-to-the-icons-file',  
      },  
    },  
  ]  
} %}  
```