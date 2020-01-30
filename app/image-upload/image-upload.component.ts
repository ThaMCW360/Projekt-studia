import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})

export class ImageUploadComponent implements OnInit {

  selectedFile: File;


  constructor() { }

  ngOnInit() {

		localStorage.setItem('logged', '0');
		console.log("Zostałeś wylogowany :). Zapraszamy ponownie");
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
  }

  onUpload() {
  // this.http is the injected HttpClient
  const uploadData = new FormData();
  uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
  console.log("uploaded! :)");
  // this.http.post('my-backend.com/file-upload', uploadData)
  //   .subscribe(...);
}

}
