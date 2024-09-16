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
export type VerifiedProps = typeof __propDef.props;
export type VerifiedEvents = typeof __propDef.events;
export type VerifiedSlots = typeof __propDef.slots;
export default class Verified extends SvelteComponentTyped<VerifiedProps, VerifiedEvents, VerifiedSlots> {
}
export {};
