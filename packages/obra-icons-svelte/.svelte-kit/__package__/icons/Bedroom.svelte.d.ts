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
export type BedroomProps = typeof __propDef.props;
export type BedroomEvents = typeof __propDef.events;
export type BedroomSlots = typeof __propDef.slots;
export default class Bedroom extends SvelteComponentTyped<BedroomProps, BedroomEvents, BedroomSlots> {
}
export {};
