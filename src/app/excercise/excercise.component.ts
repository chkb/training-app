import { Component, OnInit } from '@angular/core';

import { LoginProviderService } from '../core/login-provider.service';
import { moveIn } from '../router.animations';
import { CrudService } from '../service/crud.service';
import { Excercise } from './excercise';

@Component({
    selector: 'app-excercise',
    templateUrl: './excercise.component.html',
    styleUrls: ['./excercise.component.less'],
    animations: [moveIn()],
    // tslint:disable-next-line:use-host-property-decorator
    host: { '[@moveIn]': '' }
})
export class ExcerciseComponent implements OnInit {
    excercise = new Excercise();
    list;

    constructor(
        private authService: LoginProviderService,
        private crudService: CrudService
    ) { }

    ngOnInit() {
        this.getItems();
    }

    getItems(): void {
        this.crudService
            .getCollection('excercise')
            .subscribe(res => {
                this.list = [];
                res.forEach(element => {
                    const item = {
                        id: element.payload.doc.id,
                        data: element.payload.doc.data()
                    };
                    this.list.push(item);
                });
            });
    }

    deleteItem(id: string): void {
        this.crudService.deleteDocument('excercise', id);
        this.getItems();
    }


    createExcercise(): void {
        console.log(this.excercise);
        this.crudService.createDocument('excercise', this.excercise);
        this.excercise = new Excercise();
        this.getItems();
    }
}
