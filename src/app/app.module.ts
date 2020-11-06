import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { AlertController, IonicModule, IonicRouteStrategy, IonTabs, LoadingController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

import { SuperTabsModule} from '@ionic-super-tabs/angular';
import { IonicStorageModule } from '@ionic/storage';
import { Camera} from '@ionic-native/camera/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { CommonModule } from '@angular/common';
import { Utils } from './Models/Classes/utils';
import { SecureStorage, SecureStorageObject } from '@ionic-native/secure-storage/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import { MediaCapture } from '@ionic-native/media-capture/ngx';
import { RequestResponse } from './Models/Classes/request-response';
import { User } from './Models/Classes/user';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    CommonModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    HttpClientModule,
    SuperTabsModule.forRoot(),
<<<<<<< HEAD
    FormsModule,
    ReactiveFormsModule
    
=======
    ReactiveFormsModule,
>>>>>>> newPages
  ],
  providers: [
    Utils,
    User,
    SecureStorage,
    NativeStorage,
    LoadingController,
    AlertController,
    RequestResponse,
    StatusBar,
    SplashScreen,
    NativeStorage,
    Camera,
    ImagePicker,
    Base64,
    MediaCapture,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
