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
  @Input() typePublication: string;

  constructor(public alertController: AlertController) { }

  ngOnInit() {
    this.presentAlertPrompt();
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Evento',
      inputs: [
        {
          name: 'startDate',
          type: 'date',
          min: '2019-01-01',
          max: '2030-12-12'
        },
        {
          name: 'endDate',
          type: 'date',
          min: '2019-01-01',
          max: '2030-12-12'
        },
        {
          name: 'startHour',
          type: 'time'
        },
        {
          name: 'endHour',
          type: 'time'
        },
        {
          name: 'price',
          type: 'number',
          placeholder: 'Precio $'
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
            this.publication.startDate = data.startDate;
            this.publication.endDate = data.endDate;
            this.publication.startHour = data.startHour;
            this.publication.endHour = data.endHour;
            this.publication.price = Number(data.price);
            this.publication.typeContent = Number(this.typePublication);
           
          }
        }
      ]
    });

    await alert.present();
  }

}
