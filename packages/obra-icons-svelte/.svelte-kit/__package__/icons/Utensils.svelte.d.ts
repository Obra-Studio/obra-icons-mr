import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        size?: number;
        color?: string;
        strokeWidth?: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type UtensilsProps = typeof __propDef.props;
export type UtensilsEvents = typeof __propDef.events;
export type UtensilsSlots = typeof __propDef.slots;
export default class Utensils extends SvelteComponentTyped<UtensilsProps, UtensilsEvents, UtensilsSlots> {
}
export {};
