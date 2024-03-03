import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
@Controller('upload-file')
export class UploadFileController {
  constructor() {}

  @Post('/single')
  @UseInterceptors(FileInterceptor('file'))
  UploadSingleFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
  }

  @Post('/ùultiple ')
  @UseInterceptors(FileInterceptor('file'))
  UploadMultipleFiles(@UploadedFile() file) {
    console.log(file);
  }
}
