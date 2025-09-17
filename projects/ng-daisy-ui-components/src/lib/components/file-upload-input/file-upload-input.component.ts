import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
// import { DndDropEvent } from 'ngx-drag-drop';
import { ToastService } from '../../services/toast.service';
import { FileItem } from '../../models/file-item';

@Component({
  selector: 'app-file-upload-input',
  templateUrl: './file-upload-input.component.html',
})
export class FileUploadInputComponent {
  @Input() multiple = false;
  @Input() disabled = false;
  @Input() uploadedFiles: FileItem[] = [];
  @Output() fileUploadedEmitter = new EventEmitter();

  allowedMimeTypes = [
    'application/pdf', // PDF files
    'image/jpeg', // JPG/JPEG images
    'application/msword', // DOC files (older Microsoft Word format)
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // DOCX files
  ];
  error = false;
  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private toastService: ToastService
  ) {}

  // onDrop(event: DndDropEvent) {
  //   if (event.event.dataTransfer?.files) {
  //     this.uploadFile(event.event.dataTransfer?.files);
  //   }
  // }

  // onInputChange(e: Event): void {
  //   if (!this.disabled) {
  //     const inputFile = e.target as HTMLInputElement;
  //     this.uploadFile(inputFile.files);
  //   }
  // }

  // /* eslint-disable  @typescript-eslint/no-explicit-any */
  // uploadFile(files: any) {
  //   if (files && files.length === 0) {
  //     return;
  //   }
  //   if (!this.multiple) {
  //     this.uploadedFiles = [];
  //   }
  //   for (let i = 0; i < files.length; i++) {
  //     const file: FileItem = { loading: true };
  //     const fileFromInput = files[i];
  //     const mimeType = fileFromInput.type;
  //     if (!this.allowedMimeTypes.includes(mimeType)) {
  //       this.toastService.showError(`Unsupported document type`);
  //       continue;
  //     }
  //     file.file = fileFromInput;
  //     const reader = new FileReader();
  //     reader.readAsDataURL(fileFromInput);
  //     reader.onload = () => {
  //       file.name = file.file?.name;
  //       file.loading = false;
  //       this.changeDetectorRef.detectChanges();
  //     };
  //     this.uploadedFiles.push(file);
  //   }
  //   this.fileUploadedEmitter.emit(this.uploadedFiles);
  // }

  // removeItem(index: number) {
  //   this.uploadedFiles.splice(index, 1);
  //   this.fileUploadedEmitter.emit([...this.uploadedFiles]);
  // }
}
