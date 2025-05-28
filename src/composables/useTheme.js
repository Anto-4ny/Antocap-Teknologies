import { ref } from 'vue';

export const isDarkMode = ref(true);

export function toggleTheme() {
  isDarkMode.value = !isDarkMode.value;
}
