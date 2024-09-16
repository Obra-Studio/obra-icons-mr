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
export type VerifiedFillProps = typeof __propDef.props;
export type VerifiedFillEvents = typeof __propDef.events;
export type VerifiedFillSlots = typeof __propDef.slots;
export default class VerifiedFill extends SvelteComponentTyped<VerifiedFillProps, VerifiedFillEvents, VerifiedFillSlots> {
}
export {};
