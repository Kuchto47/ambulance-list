import { Component, Host, h } from '@stencil/core';
import { Patient } from '../../model/Patient';
import '@material/mwc-list'; 
import '@material/mwc-icon';

@Component({
  tag: 'mar-ku-ambulance-wl-list',
  styleUrl: 'mar-ku-ambulance-wl-list.css',
  shadow: true,
})
export class MarKuAmbulanceWlList {
  private waitingPatients: Patient[] = [];

  public async componentWillLoad() {
    this.waitingPatients = await this.getWaitingPatientsAsync();
  }

  private getWaitingPatientsAsync(): Promise<Patient[]> {
    return Promise.resolve(
      [
        {
          name: 'Martinko',
          patientId: '12345',
          since: new Date(Date.now() - 10 * 60).toISOString(),
          estimated: new Date(Date.now() + 65 * 60).toISOString(),
          estimatedDurationMinutes: 15,
          condition: 'Kontrola'
        },
        {
          name: 'Bc. August Cézar',
          patientId: '10096',
          since: new Date(Date.now() - 30 * 60).toISOString(),
          estimated: new Date(Date.now() + 30 * 60).toISOString(),
          estimatedDurationMinutes: 20,
          condition: 'Teploty'
        },
        {
          name: 'Ing. Ferdinand Trety',
          patientId: '10028',
          since: new Date(Date.now() - 72 * 60).toISOString(),
          estimated: new Date(Date.now() + 5 * 60).toISOString(),
          estimatedDurationMinutes: 15,
          condition: 'Bolesti hrdla'
        }
      ]
    );
  }

  private isoDateToLocale(iso:string) {
    return !iso ? '' : new Date(Date.parse(iso)).toLocaleTimeString()
  }

  render() {
    return (
      <Host>
        <mwc-list>
          { this.waitingPatients.map( entry => 
            <mwc-list-item graphic="avatar" twoline>
              <span>{entry.name}</span>
              <span slot="secondary">Predpokladaný vstup: {this.isoDateToLocale(entry.estimated)}</span>
              <mwc-icon slot="graphic">person</mwc-icon>
            </mwc-list-item>
          )}
        </mwc-list>
      </Host>
    );
  }
}
