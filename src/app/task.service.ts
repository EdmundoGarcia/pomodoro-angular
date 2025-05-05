import { Injectable } from '@angular/core';

interface Task {
  id: number;
  name: string;
  isFinished: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(name: string): void {
    if (name.trim()) {
      const newTask: Task = {
        id: Date.now(),
        name,
        isFinished: false,
      };
      this.tasks.push(newTask);
    }
  }

  deleteTask(taskId: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  markAsFinished(taskId: number): void {
    const task = this.tasks.find((task) => task.id === taskId);
    if (task) {
      task.isFinished = true;
    }
  }
}