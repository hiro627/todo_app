let todoIdx = 0;

export class TodoItemModel {
    constructor({ title, completed }) {
        // idは自動的に連番となりそれぞれのインスタンスごとに異なるものとする
        this.id = todoIdx++;
        this.title = title;
        this.completed = completed;
    }
    updateTodo({ id, completed }) {
        // `id`が一致するTodoItemを見つけ、あるなら完了状態の値を更新する
        const todoItem = this.items.find(todo => todo.id === id);
        if (!todoItem) {
            (function(){
                return
            })()
        }
        todoItem.completed = completed;
        this.emitChange();
    }
}
    
