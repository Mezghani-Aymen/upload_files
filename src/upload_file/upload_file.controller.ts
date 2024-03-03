import {
  Controller,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import {
  FileFieldsInterceptor,
  FileInterceptor,
  FilesInterceptor,
} from '@nestjs/platform-express';
@Controller('upload-file')
export class UploadFileController {
  constructor() {}

  @Post('/single')
  @UseInterceptors(FileInterceptor('file'))
  UploadSingleFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
  }

  // with same filed name key
  @Post('/multiple')
  @UseInterceptors(FilesInterceptor('file'))
  UploadMultipleFilesByOneKey(
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    return files;
  }

  // different filed name keys
  @Post('/multiple')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'Key1', maxCount: 1 },
      { name: 'Key2', maxCount: 2 },
    ]),
  )
  UploadMultipleFilesByKeys(
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    return files;
  }
}
