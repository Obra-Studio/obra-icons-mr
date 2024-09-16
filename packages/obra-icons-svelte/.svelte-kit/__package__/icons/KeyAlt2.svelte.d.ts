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
export type KeyAlt2Props = typeof __propDef.props;
export type KeyAlt2Events = typeof __propDef.events;
export type KeyAlt2Slots = typeof __propDef.slots;
export default class KeyAlt2 extends SvelteComponentTyped<KeyAlt2Props, KeyAlt2Events, KeyAlt2Slots> {
}
export {};
