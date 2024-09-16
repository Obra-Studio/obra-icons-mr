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
export type FireProps = typeof __propDef.props;
export type FireEvents = typeof __propDef.events;
export type FireSlots = typeof __propDef.slots;
export default class Fire extends SvelteComponentTyped<FireProps, FireEvents, FireSlots> {
}
export {};
