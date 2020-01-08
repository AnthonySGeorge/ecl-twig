import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';

import dataGroup1 from './demo/data--group1';
import dataGroup2 from './demo/data--group2';

describe('EC - Footer Harmonised', () => {
  const template =
    '@ecl-twig/ec-component-footer-harmonised/ecl-footer-harmonised.html.twig';
  const render = params => renderTwigFileAsNode(template, params);

  describe('Group 1', () => {
    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(dataGroup1)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(dataGroup1, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(dataGroup1, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });
  });

  describe('Group 2', () => {
    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(dataGroup2)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(dataGroup2, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(dataGroup2, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });
  });
});