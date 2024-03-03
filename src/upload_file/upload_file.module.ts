import { Module } from '@nestjs/common';
import { UploadFileController } from './upload_file.controller';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path';

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
          // get name of file
          const originalname = file.originalname;

          // get extension (jpg-png-.....)
          const extension = path.extname(originalname);

          // create unique id
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);

          // generate new name
          const filename =
            path.basename(originalname, extension) +
            '-' +
            uniqueSuffix +
            extension;
          callback(null, filename);
        },
      }),
    }),
  ],
  controllers: [UploadFileController],
})
export class UploadFileModule {}
