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
export type Volume1FillProps = typeof __propDef.props;
export type Volume1FillEvents = typeof __propDef.events;
export type Volume1FillSlots = typeof __propDef.slots;
export default class Volume1Fill extends SvelteComponentTyped<Volume1FillProps, Volume1FillEvents, Volume1FillSlots> {
}
export {};
