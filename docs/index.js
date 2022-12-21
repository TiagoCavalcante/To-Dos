Vue.createApp({
	data() {
		return {
			toDos: [],
			newTodo: null
		};
	},
	mounted() {
		this.toDos = localStorage.toDos ? JSON.parse(localStorage.toDos) : [];
	},
	methods: {
		finish(toDo) {
			toDo.finished = !toDo.finished;

			localStorage.toDos = JSON.stringify(this.toDos.map((element) => {
				return {
					description: element.description,
					finished: element.finished,
					edit: element.edit
				};
			}));
		},
		store(e, description) {
			if (e.which == 13) {
				this.toDos.push({
					description: description,
					finished: false,
					edit: false
				});

				localStorage.toDos = JSON.stringify(this.toDos.map((element) => {
					return {
						description: element.description,
						finished: element.finished,
						edit: element.edit
					};
				}));
				this.newTodo = null;
			}
		},
		edit(toDo) {
			toDo.edit = true;
		},
		update(e, toDo) {
			if (e.which == 13) {
				this.cancelUpdate(toDo);

				localStorage.toDos = JSON.stringify(this.toDos.map((element) => {
					return {
						description: element.description,
						finished: element.finished,
						edit: element.edit
					};
				}));
			}
		},
		cancelUpdate(toDo) {
			toDo.edit = false;
		},
		remove(toDo) {
			const index = this.toDos.indexOf(toDo);
			this.toDos.splice(index, 1);
			localStorage.toDos = JSON.stringify(this.toDos.map((element) => {
				return {
					description: element.description,
					finished: element.finished,
					edit: element.edit
				};
			}));
		}
	},
	directives: {
		focus: {
			mounted(element) {
				element.focus();
			}
		}
	}
}).mount('main');