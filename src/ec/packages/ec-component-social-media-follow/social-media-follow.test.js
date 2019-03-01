import path from 'path';
import { renderTwigFile } from '@ecl-twig/test-utils';

import demoData from './demo/data';

demoData.links.forEach(link => {
  if (link.icon) {
    link.icon.forEach(icon => {
      icon.path = 'example'; // eslint-disable-line no-param-reassign
    });
  }
});

describe('EC - Social Media Follow', () => {
  const template = path.resolve(__dirname, './social-media-follow.html.twig');

  describe('Horizontal', () => {
    test('renders correctly', done => {
      expect.assertions(1);

      renderTwigFile(template, demoData, (err, html) => {
        expect(html).toMatchSnapshot();
        done();
      });
    });
  });

  describe('Vertical', () => {
    test('renders correctly', done => {
      expect.assertions(1);

      renderTwigFile(
        template,
        {
          ...demoData,
          variant: 'vertical',
        },
        (err, html) => {
          expect(html).toMatchSnapshot();
          done();
        }
      );
    });
  });
});