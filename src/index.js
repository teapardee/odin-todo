import './style.css';
import Project from './modules/project.js';
import addListeners from './modules/dom.js';

addListeners();

const Test = new Project('ProjectTest1');

Test.projectTasks = 3;
Test.projectTasks = 4;

console.log(Test.projectTasks);
