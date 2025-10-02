import { defineStore } from 'pinia';
import { ref } from 'vue';

interface Account {
    method: string;
    type: 'Локальная' | 'LDAP';
    login: string;
    password: string;
}

export const useAccountsStore = defineStore('accounts', () => {
    const accounts = ref<Account[]>([
        { method: 'XXX', type: 'Локальная', login: 'XXXX.YYYYYYYYY', password: '********' },
        { method: 'XXX: YYYYYYYYY: IIIIII.MMMMMMMMMMM', type: 'Локальная', login: 'XXXX', password: '********' },
        { method: 'XXX', type: 'Локальная', login: 'XXXX', password: '********' },
        { method: 'Значение', type: 'LDAP', login: 'Значение', password: '' },
        { method: 'Значение', type: 'LDAP', login: 'Значение', password: '' }
    ]);

    const addAccount = () => {
        accounts.value.push({ method: '', type: 'Локальная', login: '', password: '' });
    };

    const updateAccount = (index: number, updatedAccount: Account) => {
        if (accounts.value[index]) {
            accounts.value[index] = { ...updatedAccount };
        }
    };

    const deleteAccount = (index: number) => {
        accounts.value.splice(index, 1);
    };

    return { accounts, addAccount, updateAccount, deleteAccount };
});