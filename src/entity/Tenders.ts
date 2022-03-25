import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity()
export class Tenders extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    tenderName: string;

    @Column()
    services: string;

    @Column()
    closingDate: string;

    //companyName, sector, category from Suppliers table

}
