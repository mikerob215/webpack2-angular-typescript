const template = require('./sub.template.html');
import './sub.styles.css';
export default class SubComponent implements ng.IComponentOptions {
    template = template;
    controller = SubCtrl;
}

class SubCtrl implements ng.IComponentController {

    $onInit() {
        console.log(this);
    }
}