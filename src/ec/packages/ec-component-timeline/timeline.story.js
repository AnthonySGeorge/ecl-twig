/* eslint-disable no-param-reassign */

import { storiesOf } from '@storybook/html';
import { withKnobs, number } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';
import iconPath from '@ecl/ec-resources-icons/dist/sprites/icons.svg';

import demoData from './demo/data';

import timeline from './timeline.html.twig';
import notes from './docs/timeline.md';

storiesOf('Components/Timeline', module)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add(
    'default',
    () => {
      const from = number('From', demoData.hide.from);
      const to = number('To', demoData.hide.to);

      let hiddenCount = 0;
      if (to > 0) {
        hiddenCount = to - from;
      } else {
        hiddenCount = demoData.items.length + to - from;
      }

      const fullDemoData = {
        ...demoData,
        toggle_collapsed: `Show ${hiddenCount} more items`,
        toggle_expanded: `Hide ${hiddenCount} items`,
        icon_path: iconPath,
        hide: {
          from,
          to,
        },
      };

      const html = timeline(fullDemoData);

      const demo = document.createDocumentFragment();

      const htmlElement = document.createElement('div');
      htmlElement.innerHTML = html.trim();
      demo.appendChild(htmlElement.firstChild);

      const scriptElement = document.createElement('script');
      scriptElement.innerHTML = `
        var elements = document.querySelectorAll('[data-ecl-timeline]');

        var timeline = new ECL.Timeline(elements[0]);
        timeline.init();
      `;
      demo.appendChild(scriptElement);

      return demo;
    },

    {
      notes: { markdown: notes },
    }
  );