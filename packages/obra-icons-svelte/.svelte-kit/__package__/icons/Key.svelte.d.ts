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
export type KeyProps = typeof __propDef.props;
export type KeyEvents = typeof __propDef.events;
export type KeySlots = typeof __propDef.slots;
export default class Key extends SvelteComponentTyped<KeyProps, KeyEvents, KeySlots> {
}
export {};
