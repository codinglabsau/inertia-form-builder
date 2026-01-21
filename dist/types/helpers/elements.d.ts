import type { DefineComponent } from 'vue';
type Component = DefineComponent<any, any, any>;
type ElementConfig<T extends Component = Component> = {
    component: T;
    value?: any;
    label?: string;
    schema?: Record<string, any>;
    fieldset?: Record<string, any>;
    showLabel?: boolean;
    visible?: (form: any) => boolean;
    alert?: {
        text: string;
        actionText?: string;
        actionHref?: string;
        externalAction?: boolean;
        visible?: () => boolean;
    };
    props?: Record<string, any>;
    precognitive?: boolean;
    precognitiveEvent?: 'update' | 'change' | 'blur' | 'focus';
};
/**
 * Type-safe element factory for defining form elements with full autocomplete.
 *
 * @example
 * defineElement(Input, { value: '', label: 'Name' })
 * defineElement(Select, { value: null, props: { options } })
 */
export declare function defineElement<T extends Component>(component: T, config?: Omit<ElementConfig<T>, 'component'>): ElementConfig<T>;
/**
 * Creates a hidden input element.
 *
 * @example
 * { user_id: hidden(currentUser.id) }
 */
export declare function hidden(value: any): ElementConfig;
/**
 * Creates a conditionally visible element.
 *
 * @example
 * { details: when(form => form.showDetails, Input, { label: 'Details' }) }
 */
export declare function when<T extends Component>(condition: (form: any) => boolean, component: T, config?: Omit<ElementConfig<T>, 'component' | 'visible'>): ElementConfig<T>;
export {};
