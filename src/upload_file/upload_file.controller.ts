import { Controller, Post, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
@Controller('upload-file')
export class UploadFileController {
  constructor() {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  uploadimage() {}
}
