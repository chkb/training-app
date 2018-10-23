import { Component, OnInit } from '@angular/core';
import { single } from './data';
import { moveIn } from '../router.animations';
import { LoginProviderService } from '../core/login-provider.service';
import { User } from '../models/user';
import { CrudService } from '../service/crud.service';
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.less'],
    animations: [moveIn()],
    // tslint:disable-next-line:use-host-property-decorator
    host: { '[@moveIn]': '' }
})
export class DashboardComponent implements OnInit {
    list: any[] = [];
    user: User;
    single: any[];
    multi: any[];

    view: any[] = [700, 400];

    // options
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = true;
    showXAxisLabel = true;
    xAxisLabel = 'Country';
    showYAxisLabel = true;
    yAxisLabel = 'Population';

    colorScheme = {
        domain: ['#159487', '#4054B1', '#2B97EF', '#1EA9F0', '#1FBCD1']
    };

    constructor(
        private authService: LoginProviderService,
        private crudService: CrudService
    ) {
        Object.assign(this, { single });
    }

    ngOnInit() {
        this.authService.user.subscribe(user => this.user = user);
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
                    console.log(item);
                });
            });
    }

    deleteItem(id: string): void {
        this.crudService.deleteDocument('excercise', id);
        this.getItems();
    }

    onSelect(event) {
        console.log(event);
    }

    createTest(): void {
        this.crudService.createDocument('excercise', { name: 'squat', description: 'go deep!' });
        this.getItems();
    }

    changeItem(event: any): void {
        console.log(event);
    }
}
