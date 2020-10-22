import { Component, OnInit, Input } from '@angular/core';
import { Publication } from 'src/app/Models/Classes/publication';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.scss'],
})
export class EntertainmentComponent implements OnInit {

  @Input() publication: Publication;

  constructor(public alertController: AlertController) { }

  ngOnInit() {
    this.presentAlertPrompt();
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Evento',
      inputs: [
        {
          name: 'date',
          type: 'date',
          min: '2019-01-01',
          max: '2030-12-12'
        },
        {
          name: 'hour',
          type: 'time'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log(data.date);
            console.log(data.hour);
            this.publication.checkIn = data.date;
            this.publication.hour = data.hour;
            this.publication.typeContent = 9;
          }
        }
      ]
    });

    await alert.present();
  }

}
