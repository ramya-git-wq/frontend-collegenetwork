import { Component, OnInit } from "@angular/core";
import { UploaderService } from "../services/uploader.service";

@Component({
  selector: "faculty-post-upload",
  templateUrl: "./faculty-post-upload.component.html",
  styleUrls: ["./faculty-post-upload.component.css"]
})
export class FacultyPostUploadComponent implements OnInit {
  progress: number | undefined;
  infoMessage: any;
  isUploading: boolean = false;
  file: File | undefined;

  imageUrl: string | ArrayBuffer | null =
    "https://bulma.io/images/placeholders/480x480.png";
  fileName: string = "No file selected";

  constructor(private uploader: UploaderService) {}

  ngOnInit() {
    this.uploader.progressSource.subscribe(progress => {
      this.progress = progress;
    });
  }

  onChange(file: any) {
    if (file) {
      file = file.files[0]
      this.fileName = file.name;
      this.file = file;

      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = event => {
        this.imageUrl = reader.result;
      };
    }
  }

  onUpload() {
    this.infoMessage = null;
    this.progress = 0;
    this.isUploading = true;

    if(this.file)
    this.uploader.upload(this.file).subscribe(message => {
      this.isUploading = false;
      this.infoMessage = message;
    });
  }
}
