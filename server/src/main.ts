import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const start = async () => {
  try {
    const PORT = process.env.PORT || 5000;
    const app = NestFactory.create(AppModule);
    (await app).enableCors;
    (await app).listen(PORT, () =>
      console.log(`Server started on ${PORT} port`),
    );
  } catch (error) {
    console.log(error);
  }
};

start();
