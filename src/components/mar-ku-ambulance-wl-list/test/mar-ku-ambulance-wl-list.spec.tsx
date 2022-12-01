import { newSpecPage } from '@stencil/core/testing';
import { MarKuAmbulanceWlList } from '../mar-ku-ambulance-wl-list';

describe('mar-ku-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MarKuAmbulanceWlList],
      html: `<mar-ku-ambulance-wl-list></mar-ku-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <mar-ku-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mar-ku-ambulance-wl-list>
    `);
  });
});
