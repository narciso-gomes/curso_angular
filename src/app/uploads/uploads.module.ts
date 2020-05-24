import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadRoutingModule } from './uploads.routing.module';
import { UploadFilesComponent } from './upload-files/upload-files.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [UploadFilesComponent],
  imports: [
    CommonModule,
    UploadRoutingModule,
    HttpClientModule
  ]
})
export class UploadsModule { }
