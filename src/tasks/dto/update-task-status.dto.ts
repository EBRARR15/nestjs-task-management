import { IsEnum } from "class-validator";
import { TaskStatus } from "../task.model";



export class UpdateTaskStatusDto {
    @IsEnum(TaskStatus)
    status: TaskStatus;
    // status: TaskStatus; // Uncomment if you want to include status in the DTO
    // You can add more properties if needed, such as taskId or other identifiers
}