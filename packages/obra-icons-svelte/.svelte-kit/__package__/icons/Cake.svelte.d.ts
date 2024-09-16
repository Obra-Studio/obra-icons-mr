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
export type CakeProps = typeof __propDef.props;
export type CakeEvents = typeof __propDef.events;
export type CakeSlots = typeof __propDef.slots;
export default class Cake extends SvelteComponentTyped<CakeProps, CakeEvents, CakeSlots> {
}
export {};
