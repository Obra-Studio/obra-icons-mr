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
export type SigmaProps = typeof __propDef.props;
export type SigmaEvents = typeof __propDef.events;
export type SigmaSlots = typeof __propDef.slots;
export default class Sigma extends SvelteComponentTyped<SigmaProps, SigmaEvents, SigmaSlots> {
}
export {};
