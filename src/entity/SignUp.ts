import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity()
export class Sign extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fullName: string;

    @Column({unique:true})
    email: string;

    @Column()
    password: string;

    @Column({
        type: "timestamp",
        nullable: true
    })
    created: Date;
}
