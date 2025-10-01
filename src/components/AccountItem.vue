<template>
	<div class="table-row">
		<div class="column method">
			<input placeholder="Значение" class="input" v-model="localAccount.method" />
		</div>
		<div class="column type">
			<select class="select" v-model="localAccount.type">
				<option>Локальная</option>
				<option>LDAP</option>
			</select>
		</div>
		<div class="column login">
			<input placeholder="Значение" class="input" v-model="localAccount.login" />
		</div>
		<div class="column password">
			<input v-if="localAccount.type !== 'LDAP'" :type="showPassword ? 'text' : 'password'"
				class="input password-input" v-model="localAccount.password" />
		</div>
		<div class="column actions">
			<button v-if="localAccount.type !== 'LDAP'" class="action-button" @click="togglePassword">
				<Icon icon="iconoir:eye" width="24" height="24" />
			</button>
			<button v-if="localAccount.type !== 'LDAP'" class="action-button" @click="$emit('delete')">
				<Icon icon="material-symbols:delete-outline" color="gray" width="24" height="24" />
			</button>
		</div>
	</div>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue';
import { Icon } from '@iconify/vue';

const props = defineProps({
	account: {
		type: Object,
		required: true
	}
});

const emit = defineEmits(['update', 'delete']);

const localAccount = ref({ ...props.account });
const showPassword = ref(false);

watch(localAccount, (newVal) => {
	emit('update', newVal);
}, { deep: true });

const togglePassword = () => {
	showPassword.value = !showPassword.value;
};
</script>

<style scoped>
.table-row {
	display: flex;
	padding: 10px;
	border-top: 1px solid #ddd;
	align-items: center;
	gap: 10px;
}

.input,
.select {
	width: 100%;
	padding: 5px;
	border: 1px solid #ccc;
	border-radius: 3px;
	box-sizing: border-box;
}

.select {
	appearance: none;
	background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"><path d="M0 3 L5 8 L10 3" stroke="black" fill="none"/></svg>') no-repeat right 10px center;
	background-size: 10px;
	padding-right: 20px;
}

.password-input {
	letter-spacing: 2px;
}

.action-button {
	background: none;
	border: none;
	cursor: pointer;
	margin-left: 10px;
}

.icon {
	font-size: 16px;
	color: #007bff;
}
</style>