import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UploadFileModule } from './upload_file/upload_file.module';
import { UserController } from './user/user.controller';

@Module({
  imports: [UploadFileModule],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
