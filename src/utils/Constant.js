import TodoListVideo from '../assets/video.mp4';
import Add_delete_updateItems from '../assets/video1.mp4'
import RestaurantMenu from '../assets/video2.mp4'
import Travellingone from '../assets/travelling1.mp4'
import TodoList from '../assets/Travelling.png'

export const PROJECT_DATA = [
  {
    position: 'right',
    link:{
      isVideo : true,
      isUrl: false,
      source: TodoListVideo 
    },
    title: 'TodoList Video',
    date: '(SEPTEMBER 2023)',
    desc:
      'This is my first project on React Native, I implemented many features (adding a task, updating a task, deleting a task) using local data.',
    tags: ['React Native'],
    
    github: 'https://github.com/KapeelDev123/todoList/tree/master',
  },
  {
    position: 'left',
    link:{
      isVideo : true,
      isUrl: false,
      source: RestaurantMenu 
    },
    title: 'Restaurant Menu',
    date: '(OCTOBER 2023)',
    desc:
      'This is my second project about react native, I implement many features (select the food item that show in the favorite and remove the selected item) using the local data.',

    tags: ['React Native', 'Redux', 'Context'],
    
    github: 'https://github.com/KapeelDev123/restaurant-menu',
  },
  {
    position: 'right',
    link:{
      isVideo : true,
      isUrl: false,
      source: Add_delete_updateItems 
    },
    
    title: 'Add Delete & Update items',
    date: '(FEBRUARY 2023)',
    desc:
      'This is my 3rd project of react native, designed with pure HTML, CSS, JS and React Native and its depend on screens.',
    tags: ['React Ntive','StyleSheet'],
    
    github: 'https://github.com/KapeelDev123/add-delete-update-items',
  },

  {
    position: 'left',
    link:{
      isVideo : true,
      isUrl: false,
      isWidthFull: true,
      source: Travellingone
    },
    title: 'TodoList Video',
    date: '(SEPTEMBER 2023)',
    desc:
      'This is my first project on React Js, I implemented many features (adding a task, updating a task, deleting a task) using local data.',
    tags: ['ReactJs'],
    
    github: 'https://github.com/KapeelDev123/travelling/tree/master',
  },

  {
    position: 'right',
    link:{
      isVideo : false,
      isUrl: true,
      source: TodoList 
    },
    title: 'Todo list sorting clear',
    date: '(October 2023)',
    desc:
      'My to-do app, designed with pure HTML, CSS, JS and React Js offers full CRUD functionality and responsive design for seamless task management.',
    tags: ['Html', 'CSS', 'JavaScript', 'React Js'],
    
    github: 'https://github.com/KapeelDev123/todolist-sorting-clear-features/tree/master',
  },
]
