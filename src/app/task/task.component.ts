import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

interface Task {
  id: number;
  name: string;
  isFinished: boolean;
}

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  tasks = this.taskService.getTasks();
  newTaskName: string = '';
  editTaskId: number | null = null;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

  addTask(): void {
    this.taskService.addTask(this.newTaskName);
    this.newTaskName = '';
  }

  deleteTask(taskId: number): void {
    this.taskService.deleteTask(taskId);
    this.tasks = this.taskService.getTasks(); // Refresh the tasks array
  }

  markAsFinished(taskId: number): void {
    this.taskService.markAsFinished(taskId);
  }

  startEditing(taskId: number): void {
    this.editTaskId = taskId;
  }

  saveTask(taskId: number, newName: string): void {
    const task = this.tasks.find(task => task.id === taskId);
    if (task && newName.trim()) {
      task.name = newName;
      this.editTaskId = null;
    }
  }

  cancelEditing(): void {
    this.editTaskId = null;
  }
}