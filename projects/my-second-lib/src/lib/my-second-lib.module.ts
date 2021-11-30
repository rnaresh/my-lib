import { NgModule } from '@angular/core';
import { MySecondLibComponent } from './my-second-lib.component';

import { MyLibModule } from 'my-lib';

@NgModule({
  declarations: [MySecondLibComponent],
  imports: [MyLibModule],
  exports: [MySecondLibComponent],
})
export class MySecondLibModule {}
