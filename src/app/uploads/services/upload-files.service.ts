import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'any'
})
export class UploadFilesService {

  constructor(private httpClient: HttpClient) { }

  //pode receber o form.value no lugar do set de arquivos
  upload(files: Set<File>, url: string) {
    const formData = new FormData();

    files.forEach(file => formData.append('file', file, file.name));

    // const request = new HttpRequest("POST", url, formData, );
    // return this.httpClient.request(request);

    return this.httpClient.post(url, formData, { observe: "events", reportProgress: true})
  }
}
