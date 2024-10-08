import { type AccountModel } from '@/domain/models'
import { mockAccountModel } from '@/domain/test'
import { type AddAccount, type AddAccountParams } from '@/domain/usecases'

export class AddAccountSpy implements AddAccount {
  account = mockAccountModel()
  params: AddAccountParams
  callsCount = 0

  async add(params: AddAccountParams): Promise<AccountModel> {
    this.params = params
    this.callsCount++
    return this.account
  }
}
