import { Component, OnInit } from '@angular/core';
import { UploadFilesService } from '../services/upload-files.service';
import { Subscription } from 'rxjs';
import { HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.css']
})
export class UploadFilesComponent implements OnInit {

  subscription: Subscription;

  progress: number = 0;


  files: Set<File>; //Estrutura de dados que nao permite repetição de itens, ao contrário do array...

  constructor(private service: UploadFilesService) { }

  ngOnInit(): void {
  }

  onChange(event) {
    const selectedFiles: FileList = <FileList>event.srcElement.files;
    // document.getElementById("customFileLabel").innerHTML = selectedFiles[0].name;
    this.files = new Set()
    const filesName = [];
    for (let i = 0; i < selectedFiles.length; i++) {
      this.files.add(selectedFiles[i])
      filesName.push(selectedFiles[i].name);
    }

    document.getElementById("customFileLabel").innerHTML = filesName.join(', ');

    this.progress = 0
  }

  onUpload() {
    if (this.files && this.files.size > 0) {
      this.subscription = this.service.upload(this.files, 'http://localhost:8000/upload').subscribe(
        (event: HttpEvent<Object>) => {
          console.log(event)
          if (event.type === HttpEventType.Response) {
            console.log('Upload concluído')
          } else if (event.type === HttpEventType.UploadProgress) {
            const percentDone =  Math.round(((event.loaded * 100) / event.total))
            this.progress = percentDone
            console.log('Progresso: ', percentDone)
          }
        }
      )
    }
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }

}
