import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

export interface Account {
    id: string;
    method: string;
    type: 'Локальная' | 'LDAP';
    login: string;
    password: string;
}
export const useAccountsStore = defineStore('accounts', () => {
    const accounts = ref<Account[]>([]);

    const loadFromLocalStorage = () => {
        const savedAccounts = localStorage.getItem('accounts');
        if (savedAccounts) {
            accounts.value = JSON.parse(savedAccounts);
        } else {
            accounts.value = [
                { id: '1', method: 'XXX', type: 'Локальная', login: 'XXXX.YYYYYYYYY', password: '********' },
                { id: '2', method: 'XXX: YYYYYYYYY: IIIIII.MMMMMMMMMMM', type: 'Локальная', login: 'XXXX', password: '********' },
                { id: '3', method: 'XXX', type: 'Локальная', login: 'XXXX', password: '********' },
                { id: '4', method: 'Значение', type: 'LDAP', login: 'Значение', password: '' },
                { id: '5', method: 'Значение', type: 'LDAP', login: 'Значение', password: '' }
            ];
        }
    };

    watch(accounts, (newAccounts) => {
        localStorage.setItem('accounts', JSON.stringify(newAccounts));
    },
        { deep: true }
    );

    const addAccount = () => {
        accounts.value.push({
            id: Date.now().toString() + Math.random().toString(),
            method: '',
            type: 'Локальная',
            login: '',
            password: ''
        });
    };


    const updateAccount = (id: string, updatedAccount: Account) => {
        const index = accounts.value.findIndex(acc => acc.id === id);
        if (index !== -1) {
            accounts.value[index] = updatedAccount;
        }
    };

    const deleteAccount = (id: string) => {
    accounts.value = accounts.value.filter(acc => acc.id !== id);
    };

    loadFromLocalStorage();

    return { accounts, addAccount, updateAccount, deleteAccount };
});