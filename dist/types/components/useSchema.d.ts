import { type InertiaForm } from '@inertiajs/vue3';
import type { DangerButton, PrimaryButton, SecondaryButton, Breadcrumbs, Container, DataTable, Dropdown, DropdownItem, Heading, Notifications, Pagination, StackedList, Tabs, Toggle, Actions, Combobox, Checkbox, Date, DateRange, Email, Error, Hidden, Image, Label, Number, Password, Price, Select, Textarea, Text } from '@codinglabsau/ui';
import CheckboxGroup from './elements/CheckboxGroup.vue';
import type Grid from './elements/Grid.vue';
type Component = typeof DangerButton | typeof PrimaryButton | typeof SecondaryButton | typeof Breadcrumbs | typeof Container | typeof DataTable | typeof Dropdown | typeof DropdownItem | typeof Heading | typeof Notifications | typeof Pagination | typeof StackedList | typeof Tabs | typeof Toggle | typeof Actions | typeof Combobox | typeof Checkbox | typeof Date | typeof DateRange | typeof Email | typeof Error | typeof Hidden | typeof Image | typeof Label | typeof Number | typeof Password | typeof Price | typeof Select | typeof Textarea | typeof Text | typeof Grid | typeof CheckboxGroup;
type Form = InertiaForm<any>;
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
    props?: InstanceType<T>['$props'];
} & (T extends typeof CheckboxGroup ? CheckboxesConfig : {});
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
};
export declare const mapElements: (elements: ElementMap) => Element[];
export default function useSchema(elements: ElementMap): Schema;
export type { Schema, ElementMap, Element, Fieldset, Form };
