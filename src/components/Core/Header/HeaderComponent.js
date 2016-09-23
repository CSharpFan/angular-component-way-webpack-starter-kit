import angular      from 'angular';
import headerStyles from './HeaderStyles.scss';
import headerView from './HeaderView.html';


class controller {
  constructor() { 'ngInject';

  }
}

const Component = {
  template:     headerView(headerStyles),
  controllerAs: 'Header',
  controller
};


export default angular.module('App.core.Header', []).component('appHeader', Component).name;
