import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Suppliers {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    tenderName: string;

    @Column()
    services: string;

    @Column()
    closingDate: Date;

    //companyName, sector, category from Suppliers table

}
