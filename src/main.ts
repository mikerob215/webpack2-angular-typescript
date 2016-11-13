import * as angular from 'angular';
import AppComponent from "./app.component";
import SubComponent from "./components/sub.component";

angular.module('tsApp', [])
    .component('appComponent', new AppComponent())
    .component('subComponent', new SubComponent());

const app = angular.element(document.getElementById('app'));

app.ready(() => angular.bootstrap(app, ['tsApp']));