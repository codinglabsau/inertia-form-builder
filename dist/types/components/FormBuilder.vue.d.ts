import { Actions, PrimaryButton } from '@codinglabsau/ui';
import type { Schema } from '../composables/useSchema';
import Element from './Element.vue';
type __VLS_Props = {
    schema: Schema;
    submit?: string;
};
declare const __VLS_ctx: InstanceType<__VLS_PickNotAny<typeof __VLS_self, new () => {}>>;
declare var __VLS_1: {}, __VLS_6: {
    form: any;
}, __VLS_12: {
    form: any;
};
type __VLS_Slots = __VLS_PrettifyGlobal<__VLS_OmitStringIndex<typeof __VLS_ctx.$slots> & {
    default?: (props: typeof __VLS_1) => any;
} & {
    'actions-wrapper'?: (props: typeof __VLS_6) => any;
} & {
    actions?: (props: typeof __VLS_12) => any;
}>;
declare const __VLS_self: import("vue").DefineComponent<__VLS_Props, {
    Actions: typeof Actions;
    PrimaryButton: typeof PrimaryButton;
    Element: typeof Element;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    submit: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
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
