import { makeAddSurveyValidation } from '@/main/factories'
import { RequiredFielValidation, ValidationComposite } from '@/validation/validators'
import { Validation } from '@/presentation/protocols'

jest.mock('@/validation/validators/validation-composite')

describe('AddSurveyValidation Factory', () => {
  test('Should call ValidationComposite with all validations', () => {
    makeAddSurveyValidation()
    const validations: Validation[] = []
    for (const field of ['question', 'answers']) {
      validations.push(new RequiredFielValidation(field))
    }
    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})
