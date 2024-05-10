import { computed, ref } from "vue";
import { IFormErrors } from "../types/error";

export function useForm<T extends string>(fields: Record<T, string>) {
  const loading = ref(false);
  const apiError = ref("");

  const values = ref(fields);

  const errors = ref(
    Object.entries(fields).reduce((acc, f) => {
      acc[f[0]] = null;
      return acc;
    }, {} as IFormErrors)
  );

  const hasErrors = computed(() => {
    return Object.keys(errors.value).some((key) => errors.value[key]);
  });

  return { values, errors, hasErrors, loading, apiError };
}
