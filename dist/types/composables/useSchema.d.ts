import { type InertiaForm } from '@inertiajs/vue3';
import { type ComputedRef, type DefineComponent, type Ref } from 'vue';
import CheckboxGroup from '../components/elements/CheckboxGroup.vue';
import type Grid from '../components/elements/Grid.vue';
type Component = DefineComponent<any, any, any> | typeof Grid | typeof CheckboxGroup;
type RequestMethod = 'get' | 'post' | 'put' | 'patch' | 'delete';
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
    label?: string | false | null;
    schema?: ElementMap;
    fieldset?: Fieldset;
    visible?: (form: Form) => boolean;
    alert?: Alert;
    props?: Record<string, any>;
    precognitive?: boolean;
    precognitiveEvent?: 'update' | 'change' | 'blur' | 'focus';
} & (T extends typeof CheckboxGroup ? CheckboxesConfig : {});
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
 * @example
 * // Standard
 * useSchema({ name: Input })
 *
 * // Function (reactive)
 * useSchema(() => ({ name: Input }))
 *
 * // Precognition — mirrors laravel-precognition-vue API
 * useSchema('post', '/users', { name: Input })
 */
export default function useSchema(methodOrElements?: RequestMethod | ElementMapInput, urlOrNothing?: string, elementsInput?: ElementMapInput): Schema;
export type { Schema, ElementMap, Element, Fieldset, Form, Alert, ElementMapInput };
