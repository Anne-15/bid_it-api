import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Suppliers {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    companyName: string;

    @Column()
    category: string;

    @Column()
    sector: string;
}
