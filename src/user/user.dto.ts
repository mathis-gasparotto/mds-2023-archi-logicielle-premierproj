import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsArray, IsNumber, IsString } from 'class-validator'

export class UserDto {
  @ApiProperty({
    description: "The user's ID.",
    type: Number,
    example: 1
  })
  @IsNumber()
  id: number

  @ApiProperty({
    description: "The user's username.",
    type: String,
    example: 'username'
  })
  @IsString()
  username: string

  @ApiProperty({
    description: "The user's roles.",
    isArray: true,
    type: String
  })
  @IsArray()
  @Type(() => String)
  roles: string[]
}
