import { makeLogControllerDecorator, makeDbLoadSurveyById, makeDbLoadSurveyResult } from '@/main/factories'
import { LoadSurveyResultController } from '@/presentation/controller'
import { Controller } from '@/presentation/protocols'

export const makeLoadSurveyResultController = (): Controller => {
  const controller = new LoadSurveyResultController(makeDbLoadSurveyById(), makeDbLoadSurveyResult())
  return makeLogControllerDecorator(controller)
}
