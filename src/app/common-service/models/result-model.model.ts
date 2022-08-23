import { ServiceModelDto } from "./service-model-dto.model";

export interface ResultModel {
    success:boolean,
    data:any[],
    message:string,
    errors:string[],
}
