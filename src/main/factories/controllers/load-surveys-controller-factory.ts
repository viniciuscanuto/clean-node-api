import { makeLogControllerDecorator, makeDbLoadSurveys } from '@/main/factories'
import { Controller } from '@/presentation/protocols'
import { LoadSurveysController } from '@/presentation/controller'

export const makeLoadSurveysController = (): Controller => {
  const controller = new LoadSurveysController(makeDbLoadSurveys())
  return makeLogControllerDecorator(controller)
}
