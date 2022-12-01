import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'mar-ku-ambulance-wl-list',
  styleUrl: 'mar-ku-ambulance-wl-list.css',
  shadow: true,
})
export class MarKuAmbulanceWlList {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
