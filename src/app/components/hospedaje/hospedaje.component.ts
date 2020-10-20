import { Component, OnInit, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Publication } from 'src/app/Models/Classes/publication';

@Component({
  selector: 'app-hospedaje',
  templateUrl: './hospedaje.component.html',
  styleUrls: ['./hospedaje.component.scss'],
})
export class HospedajeComponent implements OnInit {

  @Input() publication: Publication;

  constructor(public alertController: AlertController) { }

  ngOnInit() {
    this.presentAlertPrompt();
  }


  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Hospedaje',
      inputs: [
        {
          name: 'checkIn',
          type: 'date',
          min: '2019-01-01',
          max: '2030-12-12'
        },
        {
          name: 'checkOut',
          type: 'date',
          min: '2019-01-01',
          max: '2030-12-12'
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

            this.publication.checkIn = data.checkIn;
            this.publication.checkOut = data.checkOut;
            this.publication.price = Number(data.price);
          }
        }
      ]
    });

    await alert.present();
  }

}
