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
export type BusinessProps = typeof __propDef.props;
export type BusinessEvents = typeof __propDef.events;
export type BusinessSlots = typeof __propDef.slots;
export default class Business extends SvelteComponentTyped<BusinessProps, BusinessEvents, BusinessSlots> {
}
export {};
