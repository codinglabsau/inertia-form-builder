import type { Form } from '@/composables/useSchema';
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<{
    form: Form;
    modelValue: any[];
    items: any[];
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: any) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    form: Form;
    modelValue: any[];
    items: any[];
}>>> & {
    "onUpdate:modelValue"?: (value: any) => any;
}, {}, {}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
