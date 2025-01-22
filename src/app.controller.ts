import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('index')
  root() {
    return {
      data: {
        title: '네스트챗',
        copyright: 'philip jang',
      },
    };
  }
}
