<template>
    <div class="accounts-section">
        <div class="header">
            <h2>Учетные записи</h2>
            <button class="add-button" @click="accountStore.addAccount">+</button>
        </div>
        <div class="hint">
            <span class="hint-icon">?</span>
            Для указания нескольких методов для одной пары логин/пароль используйте разделитель ;
        </div>
        <div class="accounts-table">
            <div class="table-header">
                <div class="column method">Метки</div>
                <div class="column type">Тип записи</div>
                <div class="column login">Логин</div>
                <div class="column password">Пароль</div>
                <div class="column actions"></div>
            </div>
            <AccountItem
                v-for="account in accountStore.accounts"
                :key="account.id"
                :account="account"
                @update="accountStore.updateAccount(account.id, $event)"
                @delete="accountStore.deleteAccount(account.id)"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useAccountsStore } from '../store/account';
import AccountItem from './AccountItem.vue';

const accountStore = useAccountsStore();

</script>

<style scoped>
.accounts-section {
    font-family: Arial, sans-serif;
    max-width: 800px;
    margin: 0 auto;
}

.header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

h2 {
    margin: 0;
    font-size: 24px;
}


.add-button {
    padding: 3px 9px 3px 9px;
    background-color: #fff;
    border: 1px solid #d4dee7;
    border-radius: 5px;
    font-size: 24px;
    cursor: pointer;
    margin-left: 10px;
}

.hint {
    background-color: #e7f3ff;
    border-radius: 5px;
    padding: 10px;
    margin: 10px 0;
    display: flex;
    align-items: center;
}

.hint-icon {
    background-color: #ffffff;
    border: 1px solid #ccc;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    font-size: 14px;
}

.accounts-table {
    border: 1px solid #ddd;
    border-radius: 5px;
    overflow: hidden;
}

.table-header {
    display: flex;
    background-color: #f8f8f8;
    padding: 10px;
    font-weight: bold;
}

.column {
    flex: 2;
    padding: 0 10px;
}

.method {
    flex: 2;

}

.actions {
    flex: 0.5;
    text-align: right;
}
</style>