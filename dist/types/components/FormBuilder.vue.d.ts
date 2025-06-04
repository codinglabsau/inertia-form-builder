import type { Schema } from '../composables/useSchema';
type __VLS_Props = {
    schema: Schema;
    submit?: string;
};
declare var __VLS_1: {}, __VLS_6: {
    form: any;
}, __VLS_12: {
    form: any;
};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
} & {
    'actions-wrapper'?: (props: typeof __VLS_6) => any;
} & {
    actions?: (props: typeof __VLS_12) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    submit: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
