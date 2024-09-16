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
export type ShortAnswerProps = typeof __propDef.props;
export type ShortAnswerEvents = typeof __propDef.events;
export type ShortAnswerSlots = typeof __propDef.slots;
export default class ShortAnswer extends SvelteComponentTyped<ShortAnswerProps, ShortAnswerEvents, ShortAnswerSlots> {
}
export {};
