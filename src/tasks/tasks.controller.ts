import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import {  UpdateTaskStatusDto } from './dto/update-task-status.dto';

@Controller('tasks')
export class TasksController {
constructor( private tasksService: TasksService) {}

    @Get()
    getTasks(@Query() filterDto:GetTasksFilterDto):Task[] {


        // If we have a filter, we can apply it here
        if (Object.keys(filterDto).length) {
        return this.tasksService.getTasksWithFilters(filterDto);
        }else {
        // Optionally, you can implement filtering logic here
        return this.tasksService.getAllTasks();
        } 
    }


    @Get('/:id')
    getTaskById(@Param('id') id: string): Task {
        return this.tasksService.getTaskById(id);
    }

    @Post()
    createTask(

   @Body() createTaskDto:CreateTaskDto
    ): Task {
        return this.tasksService.createTask(createTaskDto);
    }
    
    @Delete('/:id')
    deleteTask(@Param('id') id: string): void {
     return  this.tasksService.deleteTask(id);
    }

    @Patch('/:id/status')
    updateTaskStatus(
        @Param('id') id: string,
        @Body() updateTaskStatusDto:UpdateTaskStatusDto
    ):Task {
        const { status } = updateTaskStatusDto;
        // You can add validation for the status if needed
        // For example, check if status is a valid TaskStatus enum value
      return this.tasksService.updateTaskStatus(id, status);
    }
}
