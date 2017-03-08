import { AppModule } from '../app.module';

export class FsService {
    root: any;
    current:any;

    constructor() {
        this.root = {
            id: 1, name: 'root', children: [
                {
                    id: 2, name: 'sub1', children: [
                        { id: 5, name: 'sub3', children: [] },
                        { id: 6, name: 'file1', content: 'text' },
                        { id: 7, name: 'file3', content: 'text' },
                    ]
                },
                { id: 3, name: 'sub2', children: [] },
                { id: 4, name:'file2', content:'text'}
            ]
        }
    }

    getRoot() {
        return this.root;
    }
}

AppModule.service('fsService', FsService);

