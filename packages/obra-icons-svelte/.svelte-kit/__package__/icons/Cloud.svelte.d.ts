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
export type CloudProps = typeof __propDef.props;
export type CloudEvents = typeof __propDef.events;
export type CloudSlots = typeof __propDef.slots;
export default class Cloud extends SvelteComponentTyped<CloudProps, CloudEvents, CloudSlots> {
}
export {};
