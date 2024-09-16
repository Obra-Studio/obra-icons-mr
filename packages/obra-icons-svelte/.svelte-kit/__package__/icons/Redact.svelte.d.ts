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
export type RedactProps = typeof __propDef.props;
export type RedactEvents = typeof __propDef.events;
export type RedactSlots = typeof __propDef.slots;
export default class Redact extends SvelteComponentTyped<RedactProps, RedactEvents, RedactSlots> {
}
export {};
