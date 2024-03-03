import { Module } from '@nestjs/common';
import { UploadFileController } from './upload_file.controller';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    MulterModule.register({
      dest: './upload',
    }),
  ],
  controllers: [UploadFileController],
})
export class UploadFileModule {}
