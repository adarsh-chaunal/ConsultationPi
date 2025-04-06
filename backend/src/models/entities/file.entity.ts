import { BaseEntity } from "../common/baseEntity";

export interface File extends BaseEntity {
    fileName: string;
    filePath: string;
    fileSize: number;
    fileType: string; //MIME type
}