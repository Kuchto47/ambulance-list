import { newE2EPage } from '@stencil/core/testing';

describe('mar-ku-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mar-ku-ambulance-wl-list></mar-ku-ambulance-wl-list>');

    const element = await page.find('mar-ku-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
