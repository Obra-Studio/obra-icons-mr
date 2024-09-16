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
export type DiscoBallProps = typeof __propDef.props;
export type DiscoBallEvents = typeof __propDef.events;
export type DiscoBallSlots = typeof __propDef.slots;
export default class DiscoBall extends SvelteComponentTyped<DiscoBallProps, DiscoBallEvents, DiscoBallSlots> {
}
export {};
