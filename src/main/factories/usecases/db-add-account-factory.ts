import { AccountMongoRepository } from '@/infra/db'
import { BcryptAdapter } from '@/infra/cryptography'
import { AddAccount } from '@/domain/usecases'
import { DbAddAccount } from '@/data/usecases'

export const makeDbAddAccount = (): AddAccount => {
  const salt = 12
  const bcryptAdapter = new BcryptAdapter(salt)
  const accountMongoRepository = new AccountMongoRepository()
  return new DbAddAccount(bcryptAdapter, accountMongoRepository, accountMongoRepository)
}
