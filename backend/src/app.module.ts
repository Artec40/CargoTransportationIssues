import { Module } from '@nestjs/common';
import {IssuesModule} from "./issues/issues.module";

@Module({
  imports: [IssuesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
