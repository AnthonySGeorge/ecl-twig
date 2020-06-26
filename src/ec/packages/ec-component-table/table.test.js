import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';

// Import data for tests
import dataDefault from '@ecl/ec-specs-table/demo/data--default';
import dataMulti from '@ecl/ec-specs-table/demo/data--multi';

describe('EC - Table', () => {
  const template = '@ecl-twig/ec-component-table/ecl-table.html.twig';
  const render = params => renderTwigFileAsNode(template, params);

  describe('Zebra', () => {
    test('renders correctly', () => {
      expect.assertions(1);
      const data = merge(dataDefault, {
        zebra: true,
      });

      return expect(render(data)).resolves.toMatchSnapshot();
    });
  });

  describe('Default', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataDefault)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(dataDefault, {
        extra_classes: 'custom-table--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(dataDefault, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });

    test('renders correctly with row extra attributes', () => {
      expect.assertions(1);

      const withRowExtraAttributes = dataDefault;
      withRowExtraAttributes.rows.forEach(row => {
        row.extra_attributes = 'data-test data-test-another';
      });

      return expect(render(withRowExtraAttributes)).resolves.toMatchSnapshot();
    });

    test('renders correctly with row extra classes', () => {
      expect.assertions(1);

      const withRowExtraClasses = dataDefault;
      withRowExtraClasses.rows.forEach(row => {
        row.extra_classes = 'row-extra-class';
      });

      return expect(render(withRowExtraClasses)).resolves.toMatchSnapshot();
    });

    test('with missing input data and debug enabled shows the right warning message.', () => {
      expect.assertions(1);

      const dataCompliance = { ...dataDefault, _compliance_: true };
      dataCompliance.headers[0].label = '';
      dataCompliance.rows = [];

      return expect(render(dataCompliance)).resolves.toMatchSnapshot();
    });
  });

  describe('Multi', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataMulti)).resolves.toMatchSnapshot();
    });
  });
});
