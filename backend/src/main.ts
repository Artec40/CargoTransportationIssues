import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors()

    const options = new DocumentBuilder()
        .setTitle('Issues example')
        .setDescription('The issue API description')
        .setVersion('1.0')
        .addTag('issue')
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);

    await app.listen(5000);
}

bootstrap();
