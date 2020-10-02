import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController, LoadingController } from '@ionic/angular';
import { PublicationService } from '../../../services/publication.service';
import { AuthResponse } from '../../../Auth/auth-response';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Multimedia, Publication } from '../../../services/publication';
import { AlertController } from '@ionic/angular';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Router } from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: './home.page.html',
	styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(){}
  ngOnInit(){}

}
