let template = require('./app.template.html');
import './styles.css';

export default class AppComponent implements ng.IComponentOptions {
    public template = template;
    public controller = AppCtrl;
}

class AppCtrl implements ng.IController {
    public title = 'App works!';

    constructor() {
    }
}