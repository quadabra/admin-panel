import {Component, Input, OnInit, Output} from '@angular/core';
import {ApiService} from '../../../_api/api.service';

@Component({
  selector: 'app-image-loader',
  templateUrl: './image-loader.component.html',
  styleUrls: ['./image-loader.component.css']
})
export class ImageLoaderComponent implements OnInit {
  @Input() imageHash: string;
  @Output() newImageHash: string;

  selectedFile: File = null;
  imageSrc;

  constructor(private api: ApiService) {
  }

  getImageAddress(): string {
    return this.imageSrc ? this.imageSrc : this.api.getImageByHash(this.newImageHash);
  }

  onFileSelect(event): void {
    this.selectedFile = <File>event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => this.imageSrc = reader.result;
    reader.readAsDataURL(this.selectedFile);
  }

  onUpload() {
    const data = new FormData();
    data.append('image_file', this.selectedFile, this.selectedFile.name);
    this.api.imageUpload(data)
      .subscribe(res => {
          console.log('upload res:', res);
        },
        err => {
          console.log('upload error', err);
        });
  }

  ngOnInit() {
    this.newImageHash = this.imageHash;
  }

}
