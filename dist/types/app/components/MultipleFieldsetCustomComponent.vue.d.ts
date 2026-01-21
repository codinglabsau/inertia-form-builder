type __VLS_Props = {
    manufacturer?: string;
    model?: any;
    error?: string;
};
declare const __VLS_export: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "update:manufacturer": (value?: string) => any;
    "update:model": (value?: any) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:manufacturer"?: (value?: string) => any;
    "onUpdate:model"?: (value?: any) => any;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
