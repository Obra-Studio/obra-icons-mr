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
export type HandLuggageFillProps = typeof __propDef.props;
export type HandLuggageFillEvents = typeof __propDef.events;
export type HandLuggageFillSlots = typeof __propDef.slots;
export default class HandLuggageFill extends SvelteComponentTyped<HandLuggageFillProps, HandLuggageFillEvents, HandLuggageFillSlots> {
}
export {};
