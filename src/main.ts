import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    transform:true ,
    enableDebugMessages: true ,
    whitelist: true,
    disableErrorMessages: false,
    forbidNonWhitelisted: true,
  }));
  const config = new DocumentBuilder()
    .setTitle('login example')
    .setVersion('1.0')
    .addTag('simple-login')
    .build();
  const document = SwaggerModule.createDocument(app , config) ;
  SwaggerModule.setup("docs" , app , document) ;

  await app.listen(3000);
}
bootstrap();
