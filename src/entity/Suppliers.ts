import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity()
export class Suppliers extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    companyName: string;

    @Column()
    category: string;

    @Column()
    sector: string;
}
