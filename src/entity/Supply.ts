import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity()
export class Supply extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    companyName: string;

    @Column()
    category: string;

    @Column()
    sector: string;

    @Column()
    about: string;
}
