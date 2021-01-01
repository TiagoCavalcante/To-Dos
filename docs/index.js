var app = new Vue({
	el: "main",
	data: {
		toDos: [],
		newTodo: null
	},
	mounted() {
		this.toDos = localStorage.toDos ? JSON.parse(localStorage.toDos) : [];
	},
	methods: {
		finishe(toDo) {
			const index = this.toDos.indexOf(toDo);
			this.toDos[index] = toDo;
			localStorage.toDos = JSON.stringify(this.toDos);
		},
		store(e, description) {
			if (e.which == 13) {
				this.toDos.push({
					description: description,
					finished: false,
					edit: false
				});
				localStorage.toDos = JSON.stringify(this.toDos);
				this.newTodo = null;
			}
		},
		edit(toDo) {
			toDo.edit = true
		},
		update(e, toDo) {
			if (e.which == 13) {
				const index = this.toDos.indexOf(toDo);
				toDo.edit = false;
				this.toDos[index] = toDo;
				localStorage.toDos = JSON.stringify(this.toDos);
			}
		},
		cancelUpdate(toDo) {
			toDo.edit = false;
		},
		remove(toDo) {
			const index = this.toDos.indexOf(toDo);
			this.toDos.splice(index, 1);
			localStorage.toDos = JSON.stringify(this.toDos);
		}
	}
})