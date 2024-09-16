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
export type MegaphoneProps = typeof __propDef.props;
export type MegaphoneEvents = typeof __propDef.events;
export type MegaphoneSlots = typeof __propDef.slots;
export default class Megaphone extends SvelteComponentTyped<MegaphoneProps, MegaphoneEvents, MegaphoneSlots> {
}
export {};
