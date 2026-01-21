import { type InertiaForm } from '@inertiajs/vue3';
import { type RequestMethod } from 'laravel-precognition';
import type { DefineComponent } from 'vue';
import CheckboxGroup from '../components/elements/CheckboxGroup.vue';
import type Grid from '../components/elements/Grid.vue';
type Component = DefineComponent<any, any, any> | typeof Grid | typeof CheckboxGroup;
type Form = InertiaForm<any> & {
    _prefix: string;
};
type CheckboxesConfig = {
    checked: Array<number | string>;
    items: any[];
};
type ElementConfig<T extends Component = Component> = {
    component: T;
    value?: any;
    label?: string;
    schema?: ElementMap;
    fieldset?: Fieldset;
    showLabel?: boolean;
    visible?: (form: Form) => boolean;
    alert?: Alert;
    props?: Record<string, any>;
    precognitive?: boolean;
    precognitiveEvent?: 'update' | 'change' | 'blur' | 'focus';
} & (T extends typeof CheckboxGroup ? CheckboxesConfig : {});
type SchemaOptions = {
    precognition?: boolean;
    optInPrecognition?: boolean;
    method?: RequestMethod;
    url?: string;
};
type ElementDefinition = ElementConfig | Component;
type ElementMap = {
    [key: string]: ElementDefinition;
};
type Element = {
    name: string;
    definition: ElementDefinition;
};
type Fieldset = {
    [key: string]: {
        model?: string;
        value?: any;
    };
};
type Schema = {
    elements: Element[];
    form: Form;
    options: SchemaOptions;
};
type Alert = {
    text: string;
    actionText?: string;
    actionHref?: string;
    externalAction?: boolean;
    visible?: Function;
};
export declare const mapElements: (elements: ElementMap) => Element[];
export default function useSchema(elements?: ElementMap, options?: SchemaOptions): Schema;
export type { Schema, SchemaOptions, ElementMap, Element, Fieldset, Form, Alert };
