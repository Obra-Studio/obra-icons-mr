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
export type FireExtinguisherProps = typeof __propDef.props;
export type FireExtinguisherEvents = typeof __propDef.events;
export type FireExtinguisherSlots = typeof __propDef.slots;
export default class FireExtinguisher extends SvelteComponentTyped<FireExtinguisherProps, FireExtinguisherEvents, FireExtinguisherSlots> {
}
export {};
