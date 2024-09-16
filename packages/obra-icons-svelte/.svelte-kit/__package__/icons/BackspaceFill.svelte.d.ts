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
export type BackspaceFillProps = typeof __propDef.props;
export type BackspaceFillEvents = typeof __propDef.events;
export type BackspaceFillSlots = typeof __propDef.slots;
export default class BackspaceFill extends SvelteComponentTyped<BackspaceFillProps, BackspaceFillEvents, BackspaceFillSlots> {
}
export {};
