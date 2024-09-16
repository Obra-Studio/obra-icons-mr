import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        size?: number;
        color?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type FireFillProps = typeof __propDef.props;
export type FireFillEvents = typeof __propDef.events;
export type FireFillSlots = typeof __propDef.slots;
export default class FireFill extends SvelteComponentTyped<FireFillProps, FireFillEvents, FireFillSlots> {
}
export {};
