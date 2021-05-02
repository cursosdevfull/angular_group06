import {
  Component,
  ElementRef,
  forwardRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'amb-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PhotoComponent),
      multi: true,
    },
  ],
})
export class PhotoComponent implements OnInit {
  @ViewChild('photo') photo: ElementRef | null = null;
  @Input() photoByDefault: string = '';
  statusHover = false;
  value: File | null = null;

  onChange = (_: any) => {};
  onTouch = () => {};

  writeValue(value: File) {
    if (value) {
      this.value = value;
    }
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }

  constructor() {}

  ngOnInit(): void {}

  fileUpload(file: File) {
    if (!file.type.startsWith('image/')) {
      return;
    }
    const fr: FileReader = new FileReader();
    fr.onloadend = (response: any) => {
      const dataBase64 = response.target.result;
      (this
        .photo as ElementRef).nativeElement.style.backgroundImage = `url(${dataBase64})`;
      this.value = file;
      this.onChange(file);
      this.onTouch();
    };

    fr.readAsDataURL(file);
  }

  ngAfterViewInit() {
    if (this.photoByDefault) {
      const pathPhoto = environment.pathPhotos + '/' + this.photoByDefault;
      (this
        .photo as ElementRef).nativeElement.style.backgroundImage = `url(${pathPhoto})`;
    }
  }
}
