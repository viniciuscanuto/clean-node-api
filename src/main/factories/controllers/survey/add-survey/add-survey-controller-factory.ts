import { makeAddSurveyValidation } from './add-survey-validation-factory'
import { Controller } from '@/presentation/protocols'
import { AddSurveyController } from '@/presentation/controller/survey/add-survey/add-survey-controller'
import { makeLogControllerDecorator } from '@/main/factories/decorators/log-controller-decorator-factory'
import { makeDbAddSurvey } from '@/main/factories/usecases/survey/add-survey/db-add-survey-factory'

export const makeAddSurveyController = (): Controller => {
  const controller = new AddSurveyController(makeAddSurveyValidation(), makeDbAddSurvey())
  return makeLogControllerDecorator(controller)
}
