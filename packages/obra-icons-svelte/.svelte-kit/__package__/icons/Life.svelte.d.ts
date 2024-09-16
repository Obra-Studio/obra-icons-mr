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
export type LifeProps = typeof __propDef.props;
export type LifeEvents = typeof __propDef.events;
export type LifeSlots = typeof __propDef.slots;
export default class Life extends SvelteComponentTyped<LifeProps, LifeEvents, LifeSlots> {
}
export {};
