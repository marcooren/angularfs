import { AppModule } from '../../app.module';

class ContextMenuComponent {
    private type: string;
    private id: number;
    private posX: number;
    private posY: number;

    constructor(private $scope: ng.IScope) {
        $scope.$on('showContextMenu', (event, obj) => {
            this.type = obj.type;
            this.id = obj.id;
            this.posX = obj.event.clientX;
            this.posY = obj.event.clientY;
        });
    }
    hideMe(event: any) {
        if (event.target.classList.contains('context-bg')) {
             this.id = null;
        }
    }
    createFolder(event:any, id:number){

    }
    createFile(event:any, id:number){
    }
    rename(event:any, id:number){
    }
    delete(event:any, id:number){
    }
}

AppModule.component('contextMenu', {
    templateUrl: 'app/components/contextmenu/contextmenu.template.html',
    controller: ['$scope', ContextMenuComponent]
});