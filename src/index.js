import './style.css';
import Project from './modules/project.js';
import { addExpandListeners, addEditListeners } from './modules/dom.js';

addExpandListeners();
addEditListeners();

const Test = new Project('ProjectTest1');

Test.projectTasks = 3;
Test.projectTasks = 4;

console.log(Test.projectTasks);
