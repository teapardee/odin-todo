import './style.css';
import Project from './modules/project.js';
import Task from './modules/task';
import {
  addExpandListeners,
  addEditListeners,
  renderTask,
  renderProject,
  addSubmitListeners,
  addInputListeners,
} from './modules/dom.js';
import { controller } from './modules/controller';
import { storage } from './modules/storage';

controller.render();
addExpandListeners();
addEditListeners();
addInputListeners();
