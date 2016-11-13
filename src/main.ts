import * as angular from 'angular';
import AppComponent from "./app.component";

angular.module('tsApp', [])
    .component('appComponent', new AppComponent());

const app = angular.element(document.getElementById('app'));

app.ready(() => angular.bootstrap(app, ['tsApp']));