import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KeyBoardManagerDirective } from './keyboard-manager.directive';
import { KeyboardManagedItemDirective } from './keyboard-managed-item.directive';

@NgModule({
  declarations: [KeyBoardManagerDirective, KeyboardManagedItemDirective],
  imports: [CommonModule],
  exports: [KeyBoardManagerDirective, KeyboardManagedItemDirective],
})
export class KeyboardManagerModule {}
