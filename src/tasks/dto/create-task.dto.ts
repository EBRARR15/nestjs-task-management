import { IsNotEmpty} from "class-validator";


export class CreateTaskDto{

    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    description: string;
    // status: TaskStatus; // Uncomment if you want to include status in the DTO

}