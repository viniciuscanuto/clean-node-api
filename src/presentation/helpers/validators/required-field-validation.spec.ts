import { MissingParamError } from '../../errors'
import { RequiredFielValidation } from './required-field-validation'

const makeSut = (): RequiredFielValidation => {
  return new RequiredFielValidation('field')
}

describe('RequiredField Validation', () => {
  test('Should return a MissingParamError if validation falls', () => {
    const sut = makeSut()
    const error = sut.validate({ name: 'any_name' })
    expect(error).toEqual(new MissingParamError('field'))
  })

  test('Should not return if validation succeeds', () => {
    const sut = makeSut()
    const error = sut.validate({ field: 'any_name' })
    expect(error).toBeFalsy()
  })
})
