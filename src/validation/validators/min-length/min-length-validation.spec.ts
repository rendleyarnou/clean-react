import { MinLengthValidation } from './min-lenght-validation'
import { InvalidFieldError } from '@/validation/errors'
import faker from 'faker'

const makeSut = (field: string): MinLengthValidation =>
  new MinLengthValidation(field, 5)

describe('MinLengthValidation', () => {
  test('should return error if value is invalid', () => {
    const field = faker.database.column()
    const sut = makeSut(field)
    const error = sut.validate({ [field]: faker.random.alphaNumeric(4) })
    expect(error).toEqual(new InvalidFieldError())
  })

  test('should return falsy if value is valid', () => {
    const field = faker.database.column()
    const sut = makeSut(field)
    const error = sut.validate({ [field]: faker.internet.email() })
    expect(error).toBeFalsy()
  })

  test('should return falsy if field does not exists in schema', () => {
    const sut = makeSut(faker.database.column())
    const error = sut.validate({
      [faker.database.column()]: faker.internet.email()
    })
    expect(error).toBeFalsy()
  })
})
