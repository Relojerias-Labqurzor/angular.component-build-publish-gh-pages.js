import {
    Component,
    ViewEncapsulation,
} from '@angular/core';
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
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
    items = mockSuggestList;

    data = [
        { id: 'x', name: 'lalal', surname: 'banana' },
        { id: '2', name: 'lalal', surname: 'banana' },
        { id: '3', name: 'lalal', surname: 'banana' },
        { id: '4', name: 'lalal', surname: 'banana' },
        { id: '5', name: 'lalal', surname: 'banana' },
        { id: '6', name: 'lalal', surname: 'banana' },
        { id: '7', name: 'lalal', surname: 'banana' },
        { id: '8', name: 'lalal', surname: 'banana' },
        { id: '9', name: 'lalal', surname: 'banana' },
        { id: 'xx', name: 'lalal', surname: 'banana' },
        { id: 'x2', name: 'lalal', surname: 'banana' },
        { id: 'x3', name: 'lalal', surname: 'banana' },
        { id: 'x4', name: 'lalal', surname: 'banana' },
        { id: 'x5', name: 'lalal', surname: 'banana' },
        { id: 'x6', name: 'lalal', surname: 'banana' },
        { id: 'x7', name: 'lalal', surname: 'banana' },
        { id: 'x8', name: 'lalal', surname: 'banana' },
        { id: 'x9', name: 'lalal', surname: 'banana' },
    ];

    constructor(
        public fb: FormBuilder,
    ) { }
}
