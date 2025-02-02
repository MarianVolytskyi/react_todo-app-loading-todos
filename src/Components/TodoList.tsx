import React from 'react';
import classNames from 'classnames';
import { Todo } from '../types/Todo';

type Props = {
  visibleTodos: Todo[],
};

export const TodoList: React.FC<Props> = ({ visibleTodos }) => {
  return (
    <section className="todoapp__main">
      {/* This is a completed todo */}
      {visibleTodos.map(todo => (
        <div
          key={todo.id}
          className={classNames('todo',
            { completed: todo.completed })}
        >
          <label className="todo__status-label">
            <input
              type="checkbox"
              className="todo__status"
              defaultChecked={todo.completed}
            />
          </label>

          <span className="todo__title">{todo.title}</span>
          <button type="button" className="todo__remove">
            ×
          </button>

          {false && (
            <form>
              <input
                type="text"
                className="todo__title-field"
                placeholder="Empty todo will be deleted"
                value="Todo is being edited now"
              />
            </form>
          )}

          {/* overlay will cover the todo while it is being updated */}
          <div className={
            classNames('modal overlay',
              { 'is-active': false })
          }
          >
            <div className="modal-background has-background-white-ter " />
            <div className="loader" />
          </div>
        </div>
      ))}

    </section>
  );
};
