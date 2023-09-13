import type { Schema } from './useSchema';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    schema: {
        type: import("vue").PropType<Schema>;
        required: true;
    };
    submit: {
        type: import("vue").PropType<string>;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    schema: {
        type: import("vue").PropType<Schema>;
        required: true;
    };
    submit: {
        type: import("vue").PropType<string>;
        default: string;
    };
}>>, {
    submit: string;
}, {}>, {
    actions?(_: {
        form: any;
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
