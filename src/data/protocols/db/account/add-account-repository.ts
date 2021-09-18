import { AddAccountParams } from '@/domain/usecases/account'
import { AccountModel } from '@/domain/models'

export interface AddAccountRepository {
  add (data: AddAccountParams): Promise<AccountModel>
}
