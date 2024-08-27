new Vue({
    el: '#app',
    data() {
      return {
        newTask: '',
        newTaskCategory: 'today',
        categories: ['today', 'tomorrow', 'upcoming', 'noDueDate'],
        tasks: [
          { text: 'Example Task 1', category: 'today', done: false },
          { text: 'Example Task 2', category: 'tomorrow', done: false },
          { text: 'Example Task 3', category: 'upcoming', done: false },
          { text: 'Example Task 4', category: 'noDueDate', done: false }
        ]
      };
    },
    methods: {
      addTask() {
        if (this.newTask.trim() !== '') {
          this.tasks.push({ text: this.newTask, category: this.newTaskCategory, done: false });
          this.newTask = '';
        }
      },
      removeTask(index, category) {
        const taskIndex = this.tasks.findIndex(
          task => task.category === category && task.text === this.filteredTasks(category)[index].text
        );
        this.tasks.splice(taskIndex, 1);
      },
      filteredTasks(category) {
        return this.tasks.filter(task => task.category === category);
      },
      capitalize(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      },
      getCategoryIcon(category) {
        switch (category) {
          case 'today':
            return 'fas fa-calendar-day';
          case 'tomorrow':
            return 'fas fa-calendar-alt';
          case 'upcoming':
            return 'fas fa-calendar-week';
          case 'noDueDate':
            return 'fas fa-calendar-times';
          default:
            return '';
        }
      },
      translateCategory(category) {
        switch (category) {
          case 'today':
            return '今日の予定';
          case 'tomorrow':
            return '明日の予定';
          case 'upcoming':
            return '今週の予定';
          case 'noDueDate':
            return '日にちは決まってない';
          default:
            return '';
        }
      }
    }
  });