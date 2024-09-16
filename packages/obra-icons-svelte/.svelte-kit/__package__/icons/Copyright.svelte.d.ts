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
export type CopyrightProps = typeof __propDef.props;
export type CopyrightEvents = typeof __propDef.events;
export type CopyrightSlots = typeof __propDef.slots;
export default class Copyright extends SvelteComponentTyped<CopyrightProps, CopyrightEvents, CopyrightSlots> {
}
export {};
