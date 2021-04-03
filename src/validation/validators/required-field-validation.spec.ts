import { RequiredFielValidation } from './required-field-validation'
import { MissingParamError } from '@/presentation/errors'
import faker from 'faker'

const field = faker.random.word()

const makeSut = (): RequiredFielValidation => {
  return new RequiredFielValidation(field)
}

describe('RequiredField Validation', () => {
  test('Should return a MissingParamError if validation falls', () => {
    const sut = makeSut()
    const error = sut.validate({ invalidField: faker.random.word() })
    expect(error).toEqual(new MissingParamError(field))
  })

  test('Should not return if validation succeeds', () => {
    const sut = makeSut()
    const error = sut.validate({ [field]: faker.random.word() })
    expect(error).toBeFalsy()
  })
})
