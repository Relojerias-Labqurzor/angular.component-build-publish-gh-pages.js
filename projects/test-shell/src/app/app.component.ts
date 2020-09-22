import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

const mockSuggestItem = (id: number) => ({
  id,
  text: `Item ${id}...`,
});

const mockSuggestList = Array(150)
  .fill(void 0)
  .map((_, id) => mockSuggestItem(id));

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  items = mockSuggestList;

  form = this.fb.group({
    'suggest': [[]],
  });

  constructor(
    public fb: FormBuilder,
  ) { }
}
