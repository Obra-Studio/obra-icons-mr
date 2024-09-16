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
export type PhoneFillProps = typeof __propDef.props;
export type PhoneFillEvents = typeof __propDef.events;
export type PhoneFillSlots = typeof __propDef.slots;
export default class PhoneFill extends SvelteComponentTyped<PhoneFillProps, PhoneFillEvents, PhoneFillSlots> {
}
export {};
