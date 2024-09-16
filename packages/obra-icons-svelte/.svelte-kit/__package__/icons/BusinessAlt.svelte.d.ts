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
export type BusinessAltProps = typeof __propDef.props;
export type BusinessAltEvents = typeof __propDef.events;
export type BusinessAltSlots = typeof __propDef.slots;
export default class BusinessAlt extends SvelteComponentTyped<BusinessAltProps, BusinessAltEvents, BusinessAltSlots> {
}
export {};
