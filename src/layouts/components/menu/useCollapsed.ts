import { useSessionStorage } from '@vueuse/core';

export default function useCollapsed() {
  const collapsed = useSessionStorage('collapsed', false);
  const handleToggleCollapse = () => {
    collapsed.value = !collapsed.value;
  };
  return {
    collapsed,
    handleToggleCollapse,
  };
}
