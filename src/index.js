import './style.css';
import Project from './modules/project.js';
import Task from './modules/task';
import {
  addExpandListeners,
  addEditListeners,
  renderTasks,
} from './modules/dom.js';

addExpandListeners();
addEditListeners();
renderTasks();
