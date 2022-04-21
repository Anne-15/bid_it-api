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
    description: string;

    @Column()
    closingDate: string;
}
