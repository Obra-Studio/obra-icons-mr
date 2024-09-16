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
export type CodeAltProps = typeof __propDef.props;
export type CodeAltEvents = typeof __propDef.events;
export type CodeAltSlots = typeof __propDef.slots;
export default class CodeAlt extends SvelteComponentTyped<CodeAltProps, CodeAltEvents, CodeAltSlots> {
}
export {};
