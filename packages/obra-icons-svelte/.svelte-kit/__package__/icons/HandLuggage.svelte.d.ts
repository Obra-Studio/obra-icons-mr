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
export type HandLuggageProps = typeof __propDef.props;
export type HandLuggageEvents = typeof __propDef.events;
export type HandLuggageSlots = typeof __propDef.slots;
export default class HandLuggage extends SvelteComponentTyped<HandLuggageProps, HandLuggageEvents, HandLuggageSlots> {
}
export {};
