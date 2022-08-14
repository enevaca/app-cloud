import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('DEMO CLOUD')
    .setDescription('API demo para la materia de Computación en la nube')
    .setVersion('1.0')
    .addTag('interprete, genero, album, cancion')
    .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT', in: 'header' })
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('apidoc', app, document, { swaggerOptions: { filter: true, displayRequestDuration: true } });

  await app.listen(process.env.PORT || 3000);
  console.log(`App corriendo en ${await app.getUrl()}/apidoc`);
}
bootstrap();
