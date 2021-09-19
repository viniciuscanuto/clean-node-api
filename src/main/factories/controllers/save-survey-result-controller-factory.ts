import { makeLogControllerDecorator, makeDbLoadSurveyById, makeDbSaveSurveyResult } from '@/main/factories'
import { Controller } from '@/presentation/protocols'
import { SaveSurveyResultController } from '@/presentation/controller'

export const makeSaveSurveyResultController = (): Controller => {
  const controller = new SaveSurveyResultController(makeDbLoadSurveyById(), makeDbSaveSurveyResult())
  return makeLogControllerDecorator(controller)
}
