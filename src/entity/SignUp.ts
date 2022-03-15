import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity()
export class Sign extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fullName: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({
        type: "timestamp",
        nullable: true
    })
    created: Date;
}
