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

    return { accounts };
});