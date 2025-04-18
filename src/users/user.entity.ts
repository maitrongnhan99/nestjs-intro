import { Post } from 'src/posts/post.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 20,
    nullable: false,
  })
  firstName: string;

  @Column({
    type: 'varchar',
    length: 20,
    nullable: true,
  })
  lastName?: string;

  @Column({
    type: 'varchar',
    length: 36,
    nullable: false,
    unique: true,
  })
  email: string;

  @Column({
    type: 'varchar',
    length: 256,
    nullable: false,
  })
  password: string;

  @OneToMany(() => Post, (post) => post.author)
  posts: Post[];
}
