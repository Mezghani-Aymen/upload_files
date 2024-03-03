import { Controller, Post } from '@nestjs/common';

@Controller('upload-file')
export class UploadFileController {
  constructor() {}

  @Post()
  uploadimage() {}
}
