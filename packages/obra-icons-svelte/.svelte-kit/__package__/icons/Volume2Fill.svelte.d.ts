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
export type Volume2FillProps = typeof __propDef.props;
export type Volume2FillEvents = typeof __propDef.events;
export type Volume2FillSlots = typeof __propDef.slots;
export default class Volume2Fill extends SvelteComponentTyped<Volume2FillProps, Volume2FillEvents, Volume2FillSlots> {
}
export {};
