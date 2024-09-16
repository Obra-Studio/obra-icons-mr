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
export type EnterProps = typeof __propDef.props;
export type EnterEvents = typeof __propDef.events;
export type EnterSlots = typeof __propDef.slots;
export default class Enter extends SvelteComponentTyped<EnterProps, EnterEvents, EnterSlots> {
}
export {};
