import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../material.module';
import {ImageLoaderComponent} from './components/image-loader/image-loader.component';

@NgModule({
  declarations: [ImageLoaderComponent],
  imports: [CommonModule, MaterialModule],
  exports: [ImageLoaderComponent],
  providers: []
})
export class SharedModule {
}
