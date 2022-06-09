import { makeDbAuthentication, makeSignUpValidation, makeDbAddAccount, makeLogControllerDecorator } from '@/main/factories'
import { SignUpController } from '@/presentation/controller'
import { Controller } from '@/presentation/protocols'

export const makeSignUpController = (): Controller => {
  const controller = new SignUpController(makeDbAddAccount(), makeSignUpValidation(), makeDbAuthentication())
  return makeLogControllerDecorator(controller)
}
