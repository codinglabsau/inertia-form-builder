declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: import("vue").PropType<any[]>;
        required: true;
    };
    items: {
        type: import("vue").PropType<any[]>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: any) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<any[]>;
        required: true;
    };
    items: {
        type: import("vue").PropType<any[]>;
        required: true;
    };
}>> & {
    "onUpdate:modelValue"?: (value: any) => any;
}, {}, {}>;
export default _default;
