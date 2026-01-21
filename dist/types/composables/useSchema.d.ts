import { type InertiaForm } from '@inertiajs/vue3';
import { type RequestMethod } from 'laravel-precognition';
import { type ComputedRef, type DefineComponent, type Ref } from 'vue';
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
/** Fieldset maps component models to form fields. Values can be raw or object with model/value. */
type Fieldset = {
    [key: string]: any | {
        model?: string;
        value?: any;
    };
};
type Schema = {
    elements: ComputedRef<Element[]>;
    form: Form;
    options: SchemaOptions;
};
/** Input type for useSchema - supports static object, function, or ref */
type ElementMapInput = ElementMap | (() => ElementMap) | Ref<ElementMap>;
type Alert = {
    text: string;
    actionText?: string;
    actionHref?: string;
    externalAction?: boolean;
    visible?: Function;
};
export declare const mapElements: (elements: ElementMap) => Element[];
/**
 * Creates a reactive form schema from element definitions.
 *
 * @param elementsInput - Static object, function, or ref containing element definitions
 * @param options - Schema options (precognition settings, etc.)
 * @returns Schema with reactive elements, form instance, and options
 *
 * @example
 * // Static (BC)
 * useSchema({ name: Input })
 *
 * // Function (reactive)
 * useSchema(() => ({ name: Input }))
 *
 * // Ref (reactive)
 * const elements = ref({ name: Input })
 * useSchema(elements)
 */
export default function useSchema(elementsInput?: ElementMapInput, options?: SchemaOptions): Schema;
export type { Schema, SchemaOptions, ElementMap, Element, Fieldset, Form, Alert, ElementMapInput };
